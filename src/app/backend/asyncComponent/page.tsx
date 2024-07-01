import { PrismaClient } from "@prisma/client";
import axios from "axios";

const client = new PrismaClient();

export async function getUserData() {
  try {
    return await client.user.findFirst({});
  } catch (error) {
    return null;
  }
}

export default async function Page() {
  const user = await getUserData();

  return (
    <div className="">
      Hi there
      {user ? (
        <ul>
          <li>Name : {user.username}</li>
          <li>Email : {user.password}</li>
        </ul>
      ) : null}
    </div>
  );
}
