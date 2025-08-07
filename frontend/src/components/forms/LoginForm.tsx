import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../buttons/Button";

export const LoginForm = () => {
	const [error, setError] = useState("");
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		// console.log({ email, password });

		(async () => {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			const url = "http://localhost:3000/auth/login";

			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({ email, password }),
				credentials: "include",
				headers: myHeaders,
			});
			console.log(res);
			const successMsg = await res.json();

			if (res.ok) {
				console.log(successMsg.message);
				navigate("..");
			} else {
				setError(successMsg.message);
			}
		})();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center items-center w-full py-6 sm:w-2/4"
		>
			<label className="w-full" htmlFor="email">
				<input
					ref={emailRef}
					type="email"
					placeholder="Email"
					className="py-1 px-3 my-2 w-full border border-gray-400 rounded-sm"
				/>
			</label>

			<label className="w-full" htmlFor="password">
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
					className="py-1 px-3 my-2 w-full border border-gray-400 rounded-sm"
				/>
			</label>
			<h2
				className={`${error ? "text-center text-red-700" : "text-transparent"}`}
			>
				{error}
			</h2>
			<div className="flex justify-between w-full mb-4">
				<span className="text-xs hover:text-gray-500 cursor-pointer">
					<Link to={"/register"}>Create an account</Link>
				</span>
				<span className="text-xs hover:text-gray-500 cursor-pointer">
					Forgot your password?
				</span>
			</div>

			<Button type="submit">Log In</Button>
		</form>
	);
};
