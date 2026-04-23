"use client";
import Button from "@mui/material/Button";

const CustomButton = (props: React.ComponentProps<typeof Button>) => {
  return <Button variant="contained" color="secondary" {...props}></Button>;
};
export default CustomButton;
