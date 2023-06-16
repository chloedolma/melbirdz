import { Request, Response } from "express";

export default async (_: Request, response: Response) => 
  response.json({health: "ok"});
