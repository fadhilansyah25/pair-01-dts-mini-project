import React from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";

export default function CardMovie({ data }) {
  return (
    <Card
      sx={{
        maxWidth: 200,
        borderRadius: "0",
      }}
    >
      <CardActionArea
        sx={{
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        />
      </CardActionArea>
    </Card>
  );
}
