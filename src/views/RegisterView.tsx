import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

import { RadioRose } from "../components/inputs";
import { Navbar } from "../components/Navbar";

export default function RegisterView() {
	return (
		<div style={{ minHeight: "100vh", background: "#edede9" }}>
			<Navbar />
			<Container
				maxWidth="xl"
				sx={{
					overflow: "hidden",
				}}
			>
				<Container
					maxWidth="md"
					sx={{
						paddingTop: "20px",
					}}
				>
					<Box
						sx={{
							color: "white",
							background: "none",
							border: "none",
							width: "100%",
							height: "auto",
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							position: "relative",
						}}
					>
						<CardMedia
							component={"img"}
							alt="img"
							image="./public/marioF.png"
							sx={{
								height: "100%",
								objectFit: "fill",
								objectPosition: "center",
								width: "50%",
								filter: "drop-shadow(16px 7px 8px #D21369)",
								paddingBottom: "20px",
								margin: { xs: "0 auto", md: "0" },
							}}
						/>
						<Box
							component={"div"}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "50px",
								justifyContent: "center",
							}}
						>
							<Typography
								variant="h4"
								textAlign={"center"}
								sx={{
									color: "#D21369",
									textShadow: "5px 5px 7px #D21369",
								}}
							>
								Register
							</Typography>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "30px",
								}}
							>
								<RadioRose name={"Email"} />
								<RadioRose name={"User"} />
								<RadioRose name={"Password"} />
								<Button
									variant="contained"
									sx={{
										background: "#D21369",
										"&:hover": {
											background: "black",
											boxShadow: "5px 5px 4px #D21369 ",
											textShadow: "5px 5px 4px  #D21369 ",
										},
									}}
								>
									Submit
								</Button>
							</div>
						</Box>
					</Box>
				</Container>
			</Container>
		</div>
	);
}
