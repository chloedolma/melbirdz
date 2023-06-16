import { Request, Response } from "express";
import birds from "./data/birds.json"

export default async (request: Request, response: Response) => {
  const {
    query: { name },
  } = request;
  console.log(name);

  const bird = 
    birds.filter((bird) =>
    bird.COMMON_NAME.toLowerCase().match((name as string)?.toLowerCase())
    ) ?? {};

  return new Promise((resolve) =>
  setTimeout(() => resolve(response.json(bird)), 3000)
  );
};
