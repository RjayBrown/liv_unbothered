/*
UTILITY FUNCTIONS (Date Calculations)
- Reusable date calculations in ms
*/

export const oneYearFromNow = () => {
	return new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
};

export const thirtyDaysFromNow = () => {
	return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
};

export const oneHourFromNow = () => {
	return new Date(Date.now() + 60 * 60 * 1000);
};

export const fifteenMinutesFromNow = () => {
	return new Date(Date.now() + 15 * 60 * 1000);
};

export const fiveMinutesAgo = () => {
	return new Date(Date.now() - 5 * 60 * 1000);
};

export const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
