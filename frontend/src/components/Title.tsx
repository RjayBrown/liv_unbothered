interface TitleProps {
	text1: string;
	text2: string;
}

export const Title = ({ text1, text2 }: TitleProps) => {
	return (
		<div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-2xl font-medium">
			<p className="hidden sm:block w-8 sm:w-12 h-[2px] bg-gray-700"></p>
			<p className="text-gray-700">
				{text1} <span className="text-red-500">{text2}</span>
			</p>
			<p className="w-8 sm:w-12 h-[2px] bg-gray-700"></p>
		</div>
	);
};
