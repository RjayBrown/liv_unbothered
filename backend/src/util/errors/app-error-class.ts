import AppErrorType from "../../constants/enum/app-error-type";
import { HttpStatusCode } from "../../constants/http";

export class AppError extends Error {
	constructor(
		public statusCode: HttpStatusCode,
		public message: string,
		public errorCode?: AppErrorType
	) {
		super(message);
	}
}
