import { NODE_ENV, SENDER_EMAIL_ADDRESS } from "../../constants/env";
import { resend } from "../resend";

type sendEmailProps = {
	to: string;
	subject: string;
	text: string;
	html: string;
};

const getFromEmail = () => {
	return NODE_ENV === "development"
		? "onboarding@resend.dev"
		: SENDER_EMAIL_ADDRESS;
};

const getToEmail = (to: string) => {
	return NODE_ENV === "development" ? "delivered@resend.dev" : to;
};

export const sendEmail = async ({ to, subject, text, html }: sendEmailProps) =>
	await resend.emails.send({
		from: getFromEmail(),
		to: getToEmail(to),
		subject,
		text,
		html,
	});
