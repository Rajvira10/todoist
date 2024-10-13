import {Resend} from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default resend;