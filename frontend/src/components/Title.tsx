interface TitleProps {
	text1: string;
	text2: string;
}

export const Title = ({ text1, text2 }: TitleProps) => {
	return (
		<div className="flex flex-col sm:flex-row gap-2 items-center text-2xl font-medium">
			<p className="text-gray-700">
				{text1} <span className="text-red-500">{text2}</span>
			</p>
			<p className="w-8 sm:w-12 h-[2px] bg-gray-700"></p>
		</div>
	);
};
