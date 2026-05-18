import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Grid } from "@mui/material";
import MenuAppBar from "../components/app-bar";
import CustomButton from "../components/button";
import DataGrid from "../components/data-grid";

export default function Home() {
  const stars = Array(50).fill(0);

  return (
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

        <DataGrid />
      </main>
    </div>
  );
}
