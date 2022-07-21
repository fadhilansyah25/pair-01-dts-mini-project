import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useGetLatestQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvAiringTodayQuery,
} from "../services/requestTMDbAPI";
import { Typography } from "@mui/material";

export default function Seriespage() {
  const { data: trendingSeriesData } = useGetTrendingQuery({
    media_type: "tv",
  });
  const { data: popularSeriesData } = useGetPopularQuery({
    media_type: "tv",
  });
  const { data: latestSeriesData } = useGetLatestQuery({ media_type: "tv" });
  const { data: tvAiringTodayData } = useGetTvAiringTodayQuery({});
  const { data: topRatedSeriesData } = useGetTopRatedQuery({
    media_type: "tv",
  });

  return (
    <>
      <Navbar></Navbar>
      <section style={{ margin: "5rem 3rem 0" }}>
        <Typography
          variant="h4"
          color="white"
          sx={{ fontWeight: "500", mb: "1rem" }}
        >
          TV Seasons or Series
        </Typography>
        <Carrousel>
          {trendingSeriesData?.results?.map((data, i) => (
            <HeroBanner key={i} data={data} />
          ))}
        </Carrousel>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Popular"
          data={popularSeriesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Latest"
          data={latestSeriesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Top Rated"
          data={topRatedSeriesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Tv Airing Today"
          data={tvAiringTodayData?.results}
        ></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
}
