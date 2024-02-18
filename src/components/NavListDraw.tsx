import {
	Box,
	// Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	// ListItemIcon,
	ListItemText,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
import { NavLink } from "react-router-dom";

import { ListNavItems } from "../utils/constans/contans";

export function NavListDraw() {
	return (
		<Box
			sx={{
				width: "250px",
			}}
		>
			<nav>
				<List>
					{ListNavItems.map(({ path, name, icon }, index) => (
						<ListItem
							key={index}
							disablePadding
						>
							<ListItemButton
								component={NavLink}
								to={path}
							>
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText>{name}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</nav>
		</Box>
	);
}
