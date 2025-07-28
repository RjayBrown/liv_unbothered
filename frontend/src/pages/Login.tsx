import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/buttons/Button";

export const Login = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		console.log({ email, password });

		(async () => {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			const url = "http://localhost:3000/auth/login";

			try {
				const res = await fetch(url, {
					method: "POST",
					body: JSON.stringify({ email, password }),
					credentials: "include",
					headers: myHeaders,
				});
				const data = await res.json();
				console.log(data);

				const getUser = await fetch("http://localhost:3000/user", {
					method: "GET",
					credentials: "include",
					headers: myHeaders,
				});

				const userData = await getUser.json();
				console.log(userData);
				navigate("dashboard/home");
			} catch (error) {
				console.log(error);
			}
		})();
	};

	return (
		<>
			<h1 className="text-center text-3xl font-semibold">Log In</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center w-[12rem] mx-auto"
			>
				<label htmlFor="email">
					<input
						ref={emailRef}
						type="email"
						placeholder="Email"
						className="p-1 my-2 mx-auto border rounded border-gray-700"
					/>
				</label>

				<label htmlFor="password">
					<input
						ref={passwordRef}
						type="password"
						placeholder="Password"
						className="p-1 my-2 mx-auto border rounded border-gray-700"
					/>
				</label>

				<Button type="submit">Log In</Button>
			</form>
		</>
	);
};
