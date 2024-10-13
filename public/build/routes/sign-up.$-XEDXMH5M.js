import {
  require_dist
} from "/build/_shared/chunk-4DBEWS3L.js";
import "/build/_shared/chunk-Q6MXKAJT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-JE3P7ALF.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sign-up.$.tsx
init_remix_hmr();
var import_remix = __toESM(require_dist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sign-up.$.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sign-up.$.tsx"
  );
  import.meta.hot.lastModified = "1728639952158.445";
}
var SignUpRoute = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-[calc(100vh-80px)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.SignUp, {}, void 0, false, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = SignUpRoute;
var sign_up_default = SignUpRoute;
var _c;
$RefreshReg$(_c, "SignUpRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  sign_up_default as default
};
//# sourceMappingURL=/build/routes/sign-up.$-XEDXMH5M.js.map
