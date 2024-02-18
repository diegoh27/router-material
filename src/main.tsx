import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";

import App from "./App.tsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CssBaseline />
		<SnackbarProvider
			maxSnack={3}
			autoHideDuration={2000}
		>
			<App />
		</SnackbarProvider>
	</React.StrictMode>
);
