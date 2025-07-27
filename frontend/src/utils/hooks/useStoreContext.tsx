import { useContext } from "react";
import { AppDataContext } from "../../contexts/AppDataContext";

export const useStoreContext = () => {
	const context = useContext(AppDataContext);

	if (!context) {
		throw new Error(
			"Context is undefined - please use within the AppDataProvider"
		);
	}
	return context;
};
