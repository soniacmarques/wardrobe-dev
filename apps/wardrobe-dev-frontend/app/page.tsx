"use client";
import CustomCard from "@/components/card";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import MenuAppBar from "../components/app-bar";
import CustomButton from "../components/button";
import theme from "./styles/theme";
export default function Home() {
  const stars = Array(50).fill(0);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <main>
          <Grid container spacing={0} wrap="nowrap">
            {stars.map((_, index) => (
              <Grid size={1} key={index}>
                <AutoAwesomeOutlinedIcon />
              </Grid>
            ))}
          </Grid>
          <MenuAppBar />
          <CustomButton>Custom MUI Button</CustomButton>
          <Grid container spacing={2}>
            <Grid size={2}>
              <CustomCard />
            </Grid>
            <Grid size={2}>
              <CustomCard />
            </Grid>
            <Grid size={2}>
              <CustomCard />
            </Grid>
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}
