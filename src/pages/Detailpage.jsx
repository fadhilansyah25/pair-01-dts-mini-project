import React from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import {
  useGetCreditsTvOrMovieQuery,
  useGetDetailsTvOrMovieQuery,
  useGetRecommendationsTvOrMovieQuery,
  useGetSimilarTvOrMovieQuery,
} from "../services/requestTMDbAPI";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailsBanner from "../components/DetailsBanner";
import CastList from "../components/CastList";
export default function Detailpage() {
  const { id, media_type } = useParams();

  const { data: detailsData } = useGetDetailsTvOrMovieQuery({ id, media_type });
  const { data: recommendationsData } = useGetRecommendationsTvOrMovieQuery({
    id,
    media_type,
  });
  const { data: similiarsData } = useGetSimilarTvOrMovieQuery({
    id,
    media_type,
  });
  const { data: creditsData } = useGetCreditsTvOrMovieQuery({ id, media_type });

  return (
    <>
      <Navbar />
      <section style={{ margin: "5rem 3rem 0" }}>
        <DetailsBanner data={detailsData} />
      </section>
      <section style={{ margin: "3rem 3rem 0" }}>
        <CastList categoryName="Cast" data={creditsData?.cast}></CastList>
      </section>
      {recommendationsData?.results?.length === 0 ? null : (
        <section style={{ margin: "5rem 3rem 0" }}>
          <MovieList
            categoryName="Recommendations"
            data={recommendationsData?.results}
          ></MovieList>
        </section>
      )}
      {similiarsData?.results?.length === 0 ? null : (
        <section style={{ margin: "3rem 3rem 0" }}>
          <MovieList
            categoryName={`Similiar ${
              media_type === "movie" ? "Movies" : "Series"
            }`}
            data={similiarsData?.results}
          ></MovieList>
        </section>
      )}
      <Footer />
    </>
  );
}
