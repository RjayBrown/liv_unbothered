import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	type,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`my-3 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white w-fit transition-colors rounded-sm ${className}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
