import React from "react";

interface ButtonProps {
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
		<Button
			className={`my-3 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white  w-fit transition-colors ${className}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};
