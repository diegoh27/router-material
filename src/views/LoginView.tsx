import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

import { RadioPassword, RadioRose } from "../components/inputs";
import { Navbar } from "../components/Navbar";

export default function LoginView() {
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
							position: "relative",
							display: "flex",
							flexDirection: { xs: "column", sm: "row", md: "row" },
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
								margin: { xs: " 0 auto", md: "0" },
							}}
						/>

						<Box
							component={"div"}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "70px",
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
								Sing In
							</Typography>

							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "20px",
								}}
							>
								<RadioRose name={"User"} />
								{/* <RadioRose name={"Password"} /> */}
								{/* <RadioRosePassword name={"Password"} /> */}
								<RadioPassword />
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
