import { URL, URLSearchParams } from 'url';

import axios from "axios";
import { Response } from "express";

import { MovieRequest, MovieResponse } from "../../data/data";

import { OMDB_PARAMS } from "./omdbParams";

export async function handleOmdbResponse(
  res: Response,
  movieRequest: MovieRequest,
  apiKey: string,
): Promise<void> {
  try {
    const params = new URLSearchParams();

    params.set(OMDB_PARAMS.API_KEY, apiKey);
    if (movieRequest.Id) {
      params.set(OMDB_PARAMS.IMDB_ID, movieRequest.Id || "");
    }

    if (movieRequest.Title) {
      params.set(OMDB_PARAMS.TITLE, movieRequest.Title || "");
      params.set(OMDB_PARAMS.YEAR, movieRequest.Year?.toString() || "");
    }

    params.set(OMDB_PARAMS.PLOT, movieRequest.Plot || "");
    params.set(OMDB_PARAMS.RESPONSE_TYPE, "json");

    const url = new URL(OMDB_PARAMS.OMDP_URL);
    url.search = params.toString();

    const response = await axios.get<MovieResponse>(url.toString());
    const data = response.data;

    if (data.Response === "False") {
      res.status(404).json({ error: data.Error });
    } else {
      res.json(data);
    }
  } catch (err) {
    console.error("Error fetching OMDb data:", err);
    const message = axios.isAxiosError(err)
      ? err.response?.data?.error || err.message
      : "Unexpected error";
    res.status(500).json({ error: message });
  }
}
