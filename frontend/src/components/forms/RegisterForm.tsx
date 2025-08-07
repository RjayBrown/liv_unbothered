import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../buttons/Button";

export const RegisterForm = () => {
	const [error, setError] = useState("");
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// const name = nameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmPassword = confirmPasswordRef.current?.value;

		// console.log({ email, password });

		(async () => {
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			const url = "http://localhost:3000/auth/register";

			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({ email, password, confirmPassword }),
				credentials: "include",
				headers: myHeaders,
			});
			console.log(res);
			const successMsg = await res.json();

			if (res.ok) {
				console.log(successMsg);
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
			<h2
				className={`${error ? "text-center text-red-700" : "text-transparent"}`}
			>
				{error}
			</h2>
			<label className="w-full" htmlFor="name">
				<input
					ref={nameRef}
					type="name"
					placeholder="Name"
					className="py-1 px-3 my-2 w-full border border-gray-400 rounded-sm"
				/>
			</label>
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
			<label className="w-full" htmlFor="confirm-password">
				<input
					ref={confirmPasswordRef}
					type="password"
					placeholder="Confirm Password"
					className="py-1 px-3 my-2 w-full border border-gray-400 rounded-sm"
				/>
			</label>
			<div className="flex justify-end w-full mb-4">
				<span className="text-xs hover:text-gray-500 cursor-pointer">
					<Link to={"/login"}>Already have an account?</Link>
				</span>
			</div>

			<Button type="submit">Register</Button>
		</form>
	);
};
