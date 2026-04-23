"use client";
import Card from "@mui/material/Card";

const CustomCard = () => {
  return (
    <Card
      style={{
        backgroundColor: "tertiary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img src="/pics/1.jpg" alt="Custom Image" width={200} height={200} />
    </Card>
  );
};

export default CustomCard;
