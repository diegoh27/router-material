import {
	createTheme,
	ThemeProvider,
	Theme,
	useTheme,
} from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { TextField, styled } from "@mui/material";

interface InputsProps {
	name: string;
}

const customTheme = (outerTheme: Theme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						"--TextField-brandBorderColor": "#D21369",
						"--TextField-brandBorderHoverColor": "#D21369",
						"--TextField-brandBorderFocusedColor": "#D21369",
						"& label.Mui-focused": {
							color: "var(--TextField-brandBorderFocusedColor)",
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						borderColor: "var(--TextField-brandBorderColor)",
					},
					root: {
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: "var(--TextField-brandBorderHoverColor)",
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: "var(--TextField-brandBorderFocusedColor)",
						},
					},
				},
			},
			MuiFilledInput: {
				styleOverrides: {
					root: {
						"&::before, &::after": {
							borderBottom: "2px solid var(--TextField-brandBorderColor)",
						},
						"&:hover:not(.Mui-disabled, .Mui-error):before": {
							borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
						},
						"&.Mui-focused:after": {
							borderBottom:
								"2px solid var(--TextField-brandBorderFocusedColor)",
						},
					},
				},
			},
			MuiInput: {
				styleOverrides: {
					root: {
						"&::before": {
							borderBottom: "2px solid var(--TextField-brandBorderColor)",
						},
						"&:hover:not(.Mui-disabled, .Mui-error):before": {
							borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
						},
						"&.Mui-focused:after": {
							borderBottom:
								"2px solid var(--TextField-brandBorderFocusedColor)",
						},
					},
				},
			},
		},
	});

export function RadioRose({ name }: InputsProps) {
	const outerTheme = useTheme();
	const ColoredInputLabel = styled("label")({
		color: "#D21369",
	});
	const ColoredInput = styled("input")({
		color: "#D21369",
	});

	return (
		<ThemeProvider theme={customTheme(outerTheme)}>
			<TextField
				id="outlined-basic"
				label={<ColoredInputLabel>{name}</ColoredInputLabel>}
				variant="outlined"
				sx={{
					color: "#D21369",
				}}
				style={{ color: "#D21369" }}
				inputProps={{
					style: { color: "#D21369" },
				}}
				InputProps={{
					inputComponent: ColoredInput,
				}}
			/>
		</ThemeProvider>
	);
}

import IconButton from "@mui/material/IconButton";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function RadioPassword() {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const outerTheme = useTheme();

	return (
		<ThemeProvider theme={customTheme(outerTheme)}>
			<FormControl variant="outlined">
				<InputLabel
					htmlFor="outlined-adornment-password"
					style={{ color: "#D21369" }}
				>
					Password
				</InputLabel>
				<OutlinedInput
					style={{ color: "#D21369" }}
					inputProps={{
						style: { color: "#D21369" },
					}}
					id="outlined-adornment-password"
					type={showPassword ? "text" : "password"}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								style={{ color: "#D21369" }}
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label="Password"
				/>
			</FormControl>
		</ThemeProvider>
	);
}
