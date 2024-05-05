import { Prisma } from "@prisma/client";

export async function getDataLogin() {
  const data = [
    {
      nama: "Joko",
    },
  ];

  return {
    props: {
      userData: data,
    },
  };
}
