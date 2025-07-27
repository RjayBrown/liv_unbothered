import { Route, Routes } from "react-router-dom";
import { AppDataProvider } from "./contexts/AppDataContext";
import "./index.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/navigation/Navbar";

export const App = () => {
	return (
		<AppDataProvider>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="dashboard">
					<Route index element={<h1>Main Dashboard</h1>} />
				</Route>
			</Routes>
		</AppDataProvider>
	);
};
