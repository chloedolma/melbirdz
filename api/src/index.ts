import express from "express";
import cors from "cors"

import health from "./health"
import birds from "./birds"


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());

const HOSTNAME = process.env.HOSTNAME ?? "0.0.0.0";
const PORT = process.env.PORT ?? 4000;
const BASE_URL = "/api/v1";

app
  .get(`${BASE_URL}/birds`, birds)
  .get(`${BASE_URL}/health`, health);

app.listen(PORT, () =>
  console.log(
    `Example app listening on port http://${HOSTNAME}:${PORT}${BASE_URL}/`
  )
);