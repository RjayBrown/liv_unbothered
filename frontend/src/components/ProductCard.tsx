import { useNavigate } from "react-router-dom";
import { type Product } from "../contexts/AppDataContext";

interface ProductCardProps {
	product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`../products/${product._id}`)}>
			<div className="w-full overflow-hidden border border-gray-100 shadow-md sm:shadow-none hover:shadow-md">
				<img
					src={product.image[0]}
					className="w-full h-[18rem] hover:scale-110 transition ease-in-out"
					alt=""
				/>
			</div>

			<p className="py-[1px]">{product.name}</p>
			<p className="py-[1px] text-sm font-medium">${product.price}</p>
		</div>
	);
};
