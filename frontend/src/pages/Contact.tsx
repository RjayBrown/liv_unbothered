import { Button } from "../components/buttons/Button";
import { Title } from "../components/Title";
import img from "../assets/LIV-UNBOTHERED.jpg";

export const Contact = () => {
	return (
		<div className="px-6 sm:px-24 flex flex-col justify-center items-center">
			<div className="mb-7">
				<Title text1="CONTACT" text2="US" />
			</div>
			<div className="flex flex-col sm:flex-row justify-around mx-auto mb-12 w-full sm:w-4/5 gap-8">
				<div className="h-[424px] w-full sm:w-[45%] border border-black">
					<img src={img} className="w-full h-full"></img>
				</div>
				<div className="flex flex-col justify-center sm:justify-around w-full sm:w-2/5 gap-4">
					<p className="font-semibold text-gray-700 text-xl">Our Store</p>
					<div>
						<p className="text-gray-500">13203 Main St.</p>
						<p className="text-gray-500">New York, NY</p>
						<p className="text-gray-500">USA</p>
					</div>
					<div>
						<p className="text-gray-500">Tel: 1 (000) 000-0000</p>
						<p className="text-gray-500">Email: store@email.com</p>
					</div>
					<p className="font-semibold text-gray-700 text-xl">Join the Team</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						inventore quas modi.
					</p>
					<Button onClick={() => console.log("Clicked!")}>Reach Out</Button>
				</div>
			</div>
		</div>
	);
};
