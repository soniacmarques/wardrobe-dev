import CustomCard from "./card";

type Item = {
  title: string;
  description: string;
  user_id: number;
};

export default async function DataGrid() {
  const posts: Item[] = await fetch("http://localhost:8000/items", {
    cache: "no-store",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      {posts.map((item, index) => (
        <CustomCard key={index}>{item.title}</CustomCard>
      ))}
    </div>
  );
}
