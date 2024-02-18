import { Box, Button, Paper, Typography, styled } from "@mui/material";

export function CardProduct() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    p: 3,
  });
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://placehold.co/600x400/EEE/31343C" alt="imagen" />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Product Name</Typography>
        <Typography variant="body1">Product Description</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6a994e",
            width: "100%",
            margin: "0 auto",
          }}
        >
          Add Cart
        </Button>
      </Box>
      <Box sx={{ mr: 5 }} component="p">
        <Typography>Price</Typography>
        <Typography>19.99</Typography>
      </Box>
    </Paper>
  );
}
