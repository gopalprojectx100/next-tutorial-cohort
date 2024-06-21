import axios from "axios";

export async function getUserData() {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("");
    }, 5000)
  );
  const id = Math.floor(Math.random() * 10);
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

export default async function Page() {
  const user = await getUserData();

  return (
    <div className="">
      Hi there
      <ul>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
      </ul>
    </div>
  );
}
