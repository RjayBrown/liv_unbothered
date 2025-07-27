import { NextFunction, Request, Response } from "express";

/*
UTILITY FUNCTION (catchErrors)
- Higher Order Function
- Takes an async controller and returns a new controller with error handling
- Logs controller name before error path
- Passes error to errorHandler middleware
*/

type AsyncController = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<any>;

export const catchErrors = (
	controller: AsyncController,
	name: string
): AsyncController => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await controller(req, res, next);
		} catch (error) {
			console.error(`${name} controller`);

			next(error);
		}
	};
};
