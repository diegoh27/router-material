import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Collapse,
	Container,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { BlueCard } from "../components/blueCard";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";
import { useSnackbar } from "notistack";

export function HomeView() {
	const [open, setOpen] = useState<boolean>(false);
	const [openSnack, setOpenSnack] = useState<boolean>(false);

	const { enqueueSnackbar } = useSnackbar();

	const handleClick = () => {
		enqueueSnackbar("Se muestra notiStack", {
			variant: "success",
			anchorOrigin: {
				vertical: "top",
				horizontal: "right",
			},
		});
	};

	const [email, setEmail] = useState("");
	const [error, setError] = useState({
		error: false,
		message: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (emailValidation(email)) {
			setError({
				error: false,
				message: "",
			});
			enqueueSnackbar(`El email: ${email} es correcto`, {
				variant: "success",
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
			});
		} else {
			setError({
				error: true,
				message: "Email invalido!",
			});
			enqueueSnackbar(`El email: ${email} es invalido`, {
				variant: "error",
				anchorOrigin: {
					vertical: "top",
					horizontal: "right",
				},
			});
		}
	};

	const emailValidation = (email: string) => {
		// expresion regular para validar email
		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return regex.test(email);
	};

	const rotateStyle = {
		width: "12px",

		transform: `rotate(${open ? "90deg" : "0deg"})`,
		transition: "transform 0.3s ease",
	};

	return (
		<div style={{ background: "#fefae0", minHeight: "100vh" }}>
			<Navbar />
			<Container maxWidth="xl">
				<Container maxWidth="lg">
					<Typography
						variant="h4"
						textAlign={"center"}
						padding={4}
						sx={{
							textShadow: " 5px 5px 5px #0009",
						}}
					>
						Algunas Imagenes
					</Typography>

					<Box
						sx={{
							height: "auto",
							display: "flex",
							flexDirection: { xs: "column", sm: "column", md: "row" },
							alignItems: "center",
							gap: "10px",
							pb: "20px",
							justifyContent: "space-around",
						}}
					>
						<BlueCard />
						<BlueCard />
						<BlueCard />
					</Box>
				</Container>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "15px",
						pb: "20px",
					}}
				>
					<>
						<Typography
							variant="h4"
							textAlign={"center"}
							sx={{
								textShadow: " 5px 5px 5px #0009",
								mb: "10px",
								width: "100%",
								position: "relative",
							}}
						>
							Alertas
							<Button
								onClick={() => setOpen(true)}
								endIcon={<ArrowForwardIosIcon style={rotateStyle} />}
								sx={{
									position: "absolute",
									right: "0",
								}}
							>
								Abrir
							</Button>
						</Typography>
					</>
					<Collapse in={open}>
						<Alert
							severity="success"
							onClose={() => setOpen(false)}
						>
							<AlertTitle>Succes</AlertTitle>
							This is a success Alert.
						</Alert>
					</Collapse>

					<Collapse in={open}>
						<Alert severity="info">
							<AlertTitle>Info</AlertTitle>This is an info Alert.
						</Alert>
					</Collapse>

					<Collapse in={open}>
						<Alert
							severity="warning"
							action={
								<>
									<Button color="success">Yes</Button>
									<Button color="error">No</Button>
								</>
							}
						>
							<AlertTitle>Alert!</AlertTitle>This is a warning Alert.
						</Alert>
					</Collapse>

					<Collapse in={open}>
						<Alert
							severity="error"
							icon={<SignalWifiStatusbarConnectedNoInternet4Icon />}
						>
							<AlertTitle>Error</AlertTitle>This is an error Alert.
						</Alert>
					</Collapse>
				</Box>

				<Box
					sx={{
						background: "#fefae0",
						height: "300px",
					}}
				>
					<>
						<Typography
							variant="h4"
							align="center"
							sx={{
								textShadow: " 5px 5px 5px #0009",
								pb: "10px",
								width: "100%",
								position: "relative",
								background: "#fefae0",
							}}
						>
							SnackBar
							<Box
								sx={{
									position: "absolute",
									right: "-20px",
									top: "0",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Button
									sx={{}}
									onClick={() => handleClick()}
									startIcon={<ArrowForwardIosIcon style={rotateStyle} />}
								>
									NotiStacks
								</Button>
								<Button
									onClick={() => setOpenSnack(true)}
									endIcon={<ArrowForwardIosIcon style={rotateStyle} />}
								>
									Abrir
								</Button>
							</Box>
						</Typography>
					</>

					<Snackbar
						open={openSnack}
						autoHideDuration={1500}
						onClose={() => setOpenSnack(false)}
					>
						<Alert
							severity="warning"
							action={
								<>
									<Button
										color="success"
										onClick={() => setOpen(false)}
									>
										Yes
									</Button>
									<Button color="error">No</Button>
								</>
							}
						>
							<AlertTitle>Alert!</AlertTitle>This is a warning Alert.
						</Alert>
					</Snackbar>
					<Snackbar
						open={true}
						message="Aqui esta el snackbar"
					></Snackbar>
				</Box>

				<Box
					sx={{
						height: "300px",
					}}
				>
					<Typography
						variant="h4"
						align="center"
						sx={{
							textShadow: " 5px 5px 5px #0009",
							pb: "10px",
							width: "100%",
							position: "relative",
							background: "#fefae0",
						}}
					>
						Formulario Controlado
					</Typography>

					<Box
						component={"form"}
						onSubmit={handleSubmit}
					>
						<TextField
							id="email"
							label="Email"
							variant="outlined"
							type="email"
							fullWidth
							helperText={error.message}
							error={error.error}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button
							type="submit"
							variant="outlined"
							sx={{
								mt: "10px",
							}}
						>
							Enviar
						</Button>
					</Box>
				</Box>
			</Container>
		</div>
	);
}
