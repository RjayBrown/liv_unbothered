import assert from "assert";
import AppErrorType from "../../constants/enum/app-error-type";
import { HttpStatusCode } from "../../constants/http";
import { AppError } from "./app-error-class";

/*
UTILITY FUNCTION (appAssert)
 - Reusable logic to check if an operation/call to a service is successful
*/

type AppAssertParams = (
	condition: any,
	httpStatusCode: HttpStatusCode,
	message: string,
	AppErrorType?: AppErrorType
) => asserts condition;

// If the condition is false (operation fails), throws an AppError with the provided status code and message
export const appAssert: AppAssertParams = (
	condition,
	httpStatusCode,
	message,
	appErrorType
) => assert(condition, new AppError(httpStatusCode, message, appErrorType));
