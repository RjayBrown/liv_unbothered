import { Title } from "../components/Title";
import { RegisterForm } from "../components/forms/RegisterForm";

export const RegisterPage = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-evenly items-center w-full border border-l-0 border-r-0 border-t-gray-400">
			<div className="flex flex-col justify-center items-center w-11/12 mx-auto sm:w-2/4 mt-24">
				<Title text1="CREATE ACCOUNT" />
				<RegisterForm />
			</div>
		</div>
	);
};
