import { Route, Routes, useLocation } from "react-router-dom";
import { AppDataProvider } from "./contexts/AppDataContext";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/Footer";
import { SingleProductPage } from "./pages/SingleProductPage";
import { SearchBar } from "./components/SearchBar";
import { useEffect } from "react";

export const App = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<AppDataProvider>
			<Navbar />
			<SearchBar />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/login" element={<LoginPage />} />

				<Route path="products/:id" element={<SingleProductPage />} />
				<Route path="/cart" element={<CartPage />} />

				<Route path="dashboard">
					<Route index element={<h1>Main Dashboard Page</h1>} />
				</Route>
			</Routes>
			<Footer />
		</AppDataProvider>
	);
};
