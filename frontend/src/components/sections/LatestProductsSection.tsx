import { useContext, useEffect, useState } from "react";
import { AppDataContext, type Products } from "../../contexts/AppDataContext";
import { Title } from "../Title";
import { ProductCard } from "../ProductCard";

export const LatestProductsSection = () => {
	const context = useContext(AppDataContext);
	const [latestProducts, setLatestProducts] = useState<Products>([]);

	// replace with custom hook to get data from api
	useEffect(() => {
		setLatestProducts(context!.products.slice(0, 5));
	}, []);
	return (
		<div className="my-10 mx-auto">
			<div className="text-center py-8 text-3xl">
				<div className="mb-7">
					<Title text1={"NEW"} text2={"DESIGNS"} />
				</div>
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
					ipsum, incidunt nulla ipsa voluptates at doloremque molestiae iste
					placeat ipsam sint quas doloribus eum esse.
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{latestProducts.map((product) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};
