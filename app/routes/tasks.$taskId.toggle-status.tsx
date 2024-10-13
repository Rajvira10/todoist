import { ActionFunction, json, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { prisma } from "~/lib/prisma.server";
import type { TaskStatus } from "~/types/task";
import {
  commitSession,
  getSession,
  setErrorMessage,
  setSuccessMessage,
} from "~/message.server";

export const action: ActionFunction = async (args) => {
  const { params, request } = args;
  const { userId } = await getAuth(args, {
    secretKey:
      process.env.CLERK_SECRET_KEY ||
      "sk_test_k2n5NC2uUwockW57lc1Qdg2X94DMI1Q5kQhXDhY8jF",
  });
  if (!userId) return redirect("/sign-in");
  const session = await getSession(request.headers.get("cookie"));
  const taskId = params.taskId;
  const formData = await request.formData();
  const status = formData.get("status") as TaskStatus;

  try {
    await prisma.task.update({
      where: { id: taskId },
      data: { status },
    });
    setSuccessMessage(session, "Task status updated successfully");
    return json(
      { success: true },
      {
        headers: { "Set-Cookie": await commitSession(session) },
      }
    );
  } catch (error) {
    setErrorMessage(session, "There was an error updating the task status");
    return json(
      { success: false },
      {
        headers: { "Set-Cookie": await commitSession(session) },
      }
    );
  }
};
