import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../utils/hooks/useStoreContext";
import { ProductCard } from "../components/ProductCard";
import { Title } from "../components/Title";
import { Button } from "../components/buttons/Button";
import { type Size } from "../contexts/AppDataContext";
import img from "../assets/LIV-UNBOTHERED.jpg";

export const SingleProductPage = ({}) => {
	const { products } = useStoreContext();
	const { id } = useParams();
	const product = products.find((product) => product._id === id);
	const [imgUrl, setImgUrl] = useState<string>(product!.image[0]);
	const [selectedSize, setSelectedSize] = useState<Size | undefined>();

	const related = products.filter((product) => {
		if (id) {
			const currentProduct = products.find((product) => product._id === id);
			return product.category === currentProduct!.category;
		}
	});

	return (
		<div className="flex-col justify-center items-center mx-4 sm:mx-24 py-12 border border-l-0 border-r-0 border-t-gray-400">
			<div className="flex gap-12 sm:gap-20 flex-col sm:flex-row sm:justify-around">
				<div className="flex flex-col-reverse sm:flex-row gap-2 h-full">
					<div className="flex flex-row sm:flex-col gap-2 h-full">
						<div className="overflow-hidden border-2 w-1/4 sm:w-full border-gray-100 shadow-md sm:shadow-none hover:shadow-md transition-all cursor-pointer">
							<img
								src={img}
								className="h-[100px] sm:w-[150px] hover:scale-110 "
								onClick={() => setImgUrl(product!.image[0])}
							></img>
						</div>
						<div className="overflow-hidden border-2 w-1/4 sm:w-full border-gray-100 shadow-md sm:shadow-none hover:shadow-md transition-all cursor-pointer">
							<img
								src={img}
								className="h-[100px] sm:w-[150px] hover:scale-110 "
								onClick={() => setImgUrl(product!.image[1])}
							></img>
						</div>
						<div className="overflow-hidden border-2 w-1/4 sm:w-full border-gray-100 shadow-md sm:shadow-none hover:shadow-md transition-all cursor-pointer">
							<img
								src={img}
								className="h-[100px] sm:w-[150px] hover:scale-110 "
								onClick={() => setImgUrl(product!.image[2])}
							></img>
						</div>
						<div className="overflow-hidden border-2 w-1/4 sm:w-full border-gray-100 shadow-md sm:shadow-none hover:shadow-md transition-all cursor-pointer">
							<img
								src={img}
								className="h-[100px] sm:w-[150px] hover:scale-110 "
								onClick={() => setImgUrl(product!.image[3])}
							></img>
						</div>
					</div>
					<div className="h-[340px] sm:h-[440px] w-full sm:w-[550px] border-2 border-gray-100">
						<img src={imgUrl} className="w-full h-full"></img>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 sm:gap-4 w-full sm:w-3/5 h-full">
					<h1 className="text-3xl sm:text-4xl font-medium">{product!.name}</h1>
					<h2 className="text-2xl font-medium">${product!.price}</h2>
					<p className="text-gray-600">{product!.description}</p>
					<h3>Select Size</h3>
					<div className="flex gap-1 justify-start items-center">
						{product!.sizes.map((size, i) => (
							<div
								key={i}
								className={`p-2 w-12 bg-gray-200 text-black text-center my-auto cursor-pointer hover:bg-gray-300 transition-colors border-2 ${selectedSize === size ? "border-black" : "border-transparent"}`}
								onClick={() => setSelectedSize(size)}
							>
								{size}
							</div>
						))}
					</div>
					<Button
						onClick={() => {
							console.log("Adding to cart");
						}}
					>
						Add to Cart
					</Button>
					<hr className="border border-b-0 border-gray-400 w-full" />
					<div>
						<p className="text-gray-400">100% Original Product</p>
						<p className="text-gray-400">
							Cash On Delivery:{" "}
							<span className="text-green-400">Available</span>
						</p>
						<p className="text-gray-400">7-Day Return Policy</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-start items-start my-20">
				<div className="flex">
					<div className="p-2 text-2xl font-semibold">Description</div>
				</div>
				<div className="p-2">
					<p className="pb-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis molestias eaque est vitae, ullam minima illum enim ex
						minus natus dolores eius aliquid at veritatis nostrum tenetur
						voluptatem pariatur eum quia labore ad vero repellat.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
						exercitationem aut, amet aliquam asperiores voluptatibus numquam
						accusantium ex explicabo, ratione nostrum illum illo? Sint,
						doloribus!
					</p>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="my-8">
					<Title text1="RELATED" text2="PRODUCTS" />
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{related.length > 1 ? (
						related
							.slice(0, 6)
							.map((product) =>
								product._id === id ? null : (
									<ProductCard product={product} key={product._id} />
								)
							)
					) : (
						<h1 className="text-4xl text-start font-semibold w-full">
							No Related Products
						</h1>
					)}
				</div>
			</div>
		</div>
	);
};
