import MenuAppBar from "../components/app-bar";
import { CustomButton } from "../components/button";

export default function Home() {
  return (
    <div>
      <main>
        <MenuAppBar />
        <CustomButton variant="contained">Custom MUI Button</CustomButton>
      </main>
    </div>
  );
}
