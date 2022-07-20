import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { useGetTrendingMoviesQuery, useGetPopularMoviesQuery } from "../services/requestTMDbAPI";

export default function Homepage() {
  const { data: trendingMoivesData } = useGetTrendingMoviesQuery();
  const { data: popularMoviesData} = useGetPopularMoviesQuery()

  console.log(popularMoviesData)
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
        <MovieList categoryName="popular" data={popularMoviesData?.results}></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList categoryName="movie " data={popularMoviesData?.results}></MovieList>
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <MovieList categoryName="series" data={popularMoviesData?.results}></MovieList>
      </section>
      <Footer></Footer>
    </>
  );
}
