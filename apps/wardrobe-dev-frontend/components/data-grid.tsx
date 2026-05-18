export default async function DataGrid() {
  const post = await fetch("http://localhost:8000/items/1", {
    cache: "no-store",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log("jsdflksj");
      console.log(response);
      console.log("jsdflksj");
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });

  const posts = [post, post];
  console.log(posts);

  return (
    <div>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
