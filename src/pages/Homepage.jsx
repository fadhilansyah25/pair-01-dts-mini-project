import React from "react";
import Carrousel from "../components/Carrousel";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import { useGetTrendingMoviesQuery } from "../services/requestTMDbAPI";

export default function Homepage() {
  const { data } = useGetTrendingMoviesQuery();
  console.log(data);
  return (
    <>
      <Navbar></Navbar>
      <div style={{ margin: "0 3rem" }}>
        <Carrousel>
          {data?.results?.map((item, i) => (
            <HeroBanner key={i} item={item} />
          ))}
        </Carrousel>
      </div>
    </>
  );
}
