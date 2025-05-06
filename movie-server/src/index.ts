import path from "path";

import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { MovieRequest } from "../../data/data";

import { handleOmdbResponse } from "./responseHandler";

dotenv.config();
const buildPath = path.join(__dirname, "..", "..", "movie-search", "dist");

const app = express();
app.use(express.static(buildPath));
app.use(express.json());

const PORT = process.env.PORT || 8001;

const API_KEY = process.env.OMDB_API_KEY;

if (!API_KEY) {
  throw new Error("API Key is not set");
}

app.post(
  "/api/searchByTitle",
  async (req: Request, res: Response): Promise<void> => {
    const movieRequest: MovieRequest = req.body;

    if (!movieRequest.Title) {
      res.status(400).json({
        error: "Missing title",
      });
      return;
    }

    await handleOmdbResponse(res, movieRequest, API_KEY);
  },
);

app.post("/api/searchById", async (req: Request, res: Response) => {
  const movieRequest: MovieRequest = req.body;

  if (!movieRequest.Id) {
    res.status(400).json({
      error: "Missing IMDB ID",
    });
    return;
  }

  await handleOmdbResponse(res, movieRequest, API_KEY);
});

app.listen(PORT, () => {
  console.log(`OMDb Server is running at http://localhost:${PORT}`);
});
