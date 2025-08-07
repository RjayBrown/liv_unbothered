import { Title } from "../components/Title";
import { LoginForm } from "../components/forms/LoginForm";

export const LoginPage = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-evenly items-center w-full border border-l-0 border-r-0 border-t-gray-400">
			<div className="flex flex-col justify-center items-center w-11/12 mx-auto sm:w-1/2 my-24">
				<Title text1="LOG" text2="IN" />
				<LoginForm />
			</div>
		</div>
	);
};
