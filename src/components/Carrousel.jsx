import React from "react";
import Carousel from "react-material-ui-carousel";

export default function Carrousel({ children }) {
<<<<<<< HEAD
  return <Carousel sx={{ height: "80vh" }}>{children}</Carousel>;
=======
  return (
    <Carousel
      sx={{ height: "80vh" }}
      IndicatorIcon={false}
      stopAutoPlayOnHover={false}
      interval={6000}
    >
      {children}
    </Carousel>
  );
>>>>>>> upstream/main
}
