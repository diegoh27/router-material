import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

export const ListNavItems: NavLink[] = [
	{ name: "Home", path: "/", icon: <HomeIcon /> },
	{ name: "Login", path: "/login", icon: <LoginIcon /> },
	{ name: "Register", path: "/register", icon: <HowToRegIcon /> },
];

export const scrollView = (id: string) => {
	const idScroll: HTMLElement | null = document.getElementById(`${id}`);
	idScroll?.scrollIntoView({ behavior: "smooth" });
};
