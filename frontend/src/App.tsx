import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppDataProvider } from "./contexts/AppDataContext";

import "./index.css";

import { Navbar } from "./components/navigation/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Bounce, ToastContainer } from "react-toastify";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Footer } from "./components/Footer";

export const App = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<AppDataProvider>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				draggable
				theme="colored"
				transition={Bounce}
			/>
			<Navbar />
			<SearchBar />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />

				<Route path="products/:id" element={<SingleProductPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />

				<Route path="dashboard">
					<Route index element={<h1>Main Dashboard Page</h1>} />
				</Route>
			</Routes>
			<Footer />
		</AppDataProvider>
	);
};
