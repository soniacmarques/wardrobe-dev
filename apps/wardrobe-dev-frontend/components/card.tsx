import Card from "@mui/material/Card";

const CustomCard = (props: { children: React.ReactNode }) => {
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
      {props.children}
    </Card>
  );
};

export default CustomCard;
