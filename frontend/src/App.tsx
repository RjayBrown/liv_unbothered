import { Route, Routes } from "react-router-dom";
import { AppDataProvider } from "./contexts/AppDataContext";
import "./index.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/navigation/Navbar";

export const App = () => {
	return (
		<AppDataProvider>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />

				<Route path="/cart" element={<Cart />} />

				<Route path="dashboard">
					<Route index element={<h1>Main Dashboard</h1>} />
				</Route>
			</Routes>
		</AppDataProvider>
	);
};
