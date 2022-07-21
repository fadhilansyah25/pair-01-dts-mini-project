import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  useGetTrendingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetPopularTvSeasonsQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedTvSeasonsQuery,
} from "../services/requestTMDbAPI";

export default function Homepage() {
  const { data: trendingMoivesData } = useGetTrendingMoviesQuery();
  const { data: popularMoviesData } = useGetPopularMoviesQuery();
  const { data: popularTvSeasonsData } = useGetPopularTvSeasonsQuery();
  const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery();
  const { data: topRatedTvSeasonsData } = useGetTopRatedTvSeasonsQuery();

  return (
    <>
      <Navbar></Navbar>
      <section style={{ margin: "5rem 3rem 0" }}>
        <Carrousel>
          {trendingMoivesData?.results?.map((data, i) => (
            <HeroBanner key={i} data={data} />
          ))}
        </Carrousel>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Popular Movies"
          data={popularMoviesData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="TV Seasons"
          data={popularTvSeasonsData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Top Rated TV Seasons"
          data={topRatedTvSeasonsData?.results}
        ></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList
          categoryName="Upcoming Movies"
          data={upcomingMoviesData?.results}
        ></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
}
