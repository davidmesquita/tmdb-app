import { apiKey } from "../api"
import { useState } from "react"

export function useContent() {

  async function loadMovies() {
    const response = (`/movie/popular/?api_key=${apiKey}&language=en-US&page=1`)
    return response.data.results
  }
  async function loadMovie() {
    const response = (`/movie/${id}/?api_key=${apiKey}&language=en-US&page=1`)
    return response.data.results
  }
  async function loadTvShows() {
    const response = (`/tv/popular/?api_key=${apiKey}&language=en-US&page=1`)
    return response.data.results
  }
  async function loadTvShow() {
    const response = (`/tv/${id}/?api_key=${apiKey}&language=en-US&page=1`)
    return response.data.results
  }
}