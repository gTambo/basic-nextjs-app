import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Article() {
  return <article>Behold: A paragraph inside an article element.</article>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <Article />
      <ul>
        {names.map((name, idx) => (
          <li key={name + idx}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Likes({likes})</button>
    </div>
  );
}
