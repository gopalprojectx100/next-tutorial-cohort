"use client";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="text-cyan-100">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
