import { NavListDraw } from "./NavListDraw";

import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { ListNavItems } from "../utils/constans/contans";

import { NavLink } from "react-router-dom";
import AccordionBasic from "./acordion";

export function Navbar() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<AppBar
				position="sticky"
				sx={{
					background: "#dda15e",
					// position: "fixed", bottom: "0"
					width: "100%",
				}}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							width: { xs: "100%", sm: "10%", md: "5%", lg: "5%" },
							justifyContent: "space-between",
							flexDirection: "row-reverse",
						}}
					>
						<IconButton
							color="inherit"
							size="large"
							sx={{
								color: "white",
								display: { xs: "block", sm: "none" },
							}}
							onClick={() => setOpen(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							sx={{
								color: "white",
							}}
						>
							LOGO
						</Typography>
					</Box>

					<Box
						sx={{
							display: { xs: "none", sm: "block" },
						}}
					>
						{ListNavItems.map(({ name, path, icon }, index) => {
							return (
								<Button
									component={NavLink}
									to={path}
									key={index}
									color="inherit"
									style={{ color: "white" }}
									startIcon={icon}
								>
									{name}
								</Button>
							);
						})}
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					display: { xs: "block", sm: "none" },
				}}
				open={open}
				anchor="left"
				onClose={() => setOpen(false)}
			>
				<NavListDraw />
				<AccordionBasic />
			</Drawer>
		</>
	);
}
