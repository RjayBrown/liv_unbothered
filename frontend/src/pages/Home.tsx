import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
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
			<h1 className="text-center text-3xl font-semibold">Home</h1>
		</>
	);
};
