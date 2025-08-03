import { LoginForm } from "../components/forms/LoginForm";
import { RegisterForm } from "../components/forms/RegisterForm";
import { Title } from "../components/Title";

export const LoginPage = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-evenly items-center w-full border border-l-0 border-r-0 border-t-gray-400">
			<div className="flex flex-col justify-center items-center w-11/12 mx-auto sm:w-full mt-24">
				<Title text1="LOG" text2="IN" />
				<LoginForm />
			</div>
			<div className="flex flex-col justify-center items-center w-11/12 mx-auto sm:w-full mt-24">
				<Title text1="REGISTER" text2="HERE" />
				<RegisterForm />
			</div>
		</div>
	);
};
