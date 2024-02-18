import Login from "./pages/Login";
import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
	const AppRoutes = () => {
		const routes = useRoutes([
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		]);
		return routes;
	};
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
