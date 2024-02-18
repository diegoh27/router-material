import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function AccordionBasic() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<div
			style={{
				width: "250px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Accordion
				expanded={expanded}
				onChange={handleExpansion}
				sx={{
					mt: 2,
					border: "none",
					boxShadow: "none",
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel1-header"
				>
					<Typography>Custom transition using Fade</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ mt: 2, border: "none", boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					id="panel2-header"
				>
					<Typography>Default transition using Collapse</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion sx={{ mt: 2, border: "none", boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					<Typography>Default transition using Collapse</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
						<AddReactionIcon />
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
