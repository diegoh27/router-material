import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

export function BlueCard() {
	return (
		<Card
			sx={{
				background: "#353535",
				color: "white",
				transition: "0.25s",
				width: "250px",
				height: "320px",
				boxShadow: "5px 5px 6px rgba(0, 0, 0, 0.351)",
				"&:hover": {
					transform: "scale(1.02)",
				},
			}}
		>
			<CardActionArea>
				<CardMedia
					component={"img"}
					alt="img"
					image="https://mf.b37mrtl.ru/actualidad/public_images/2023.04/article/6428f17859bf5b120e372983.jpg"
					sx={{
						height: "130px",
						objectFit: "fill",
						objectPosition: "center",
					}}
				/>
			</CardActionArea>
			<CardContent>
				<Typography variant="h4">Card Title</Typography>
				<Typography
					variant="body1"
					component={"p"}
					sx={{
						fontSize: "12px",
					}}
				>
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>

			<Button size="medium">Add</Button>
			<Button
				onClick={() => ""}
				size="medium"
				color="error"
				variant="text"
			>
				Remove
			</Button>
		</Card>
	);
}
