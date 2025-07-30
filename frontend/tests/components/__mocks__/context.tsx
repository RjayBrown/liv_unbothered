import { MOCK_DATA } from "../../../src/utils/MOCK_DATA";

const appContext = () => {
	return {
		user: { name: "Me" },
		products: MOCK_DATA,
	};
};

export default appContext;
