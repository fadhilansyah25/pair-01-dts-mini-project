import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import genres from "../json/genre.json";

export default function HeroBanner(props) {
  return (
    <Box alt="poster" sx={{ display: "flex", height: "80vh" }}>
      <Box
        sx={{
          width: "30%",
          padding: "3rem 2rem",
          backgroundColor: "#091E3A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            color="white"
            sx={{ fontWeight: "700", fontSize: "3rem", lineHeight: "3.5rem", marginBottom: "1rem" }}
          >
            {props?.item?.title || props?.item?.name}
          </Typography>
          <Typography variant="caption" color="white">
            {props?.item?.genre_ids?.map((id, i) =>
              genres.map((genre) =>
                genre.id === id ? ` | ${genre.name}` : null
              )
            )}
          </Typography>
          <Typography color="yellow" sx={{ textTransform: "capitalize" }}>
            {props?.item?.media_type}
          </Typography>
          <Rating
            defaultValue={props?.item?.vote_average / 2}
            readOnly
            precision={0.5}
            size="small"
          />
          <Typography
            variant="body2"
            color={"white"}
            sx={{ marginTop: "2rem" }}
          >
            {props?.item?.overview}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0",
              borderColor: "white",
              color: "white",
              marginRight: "1rem",
              paddingX: "3rem",
            }}
          >
            Watch
          </Button>
          <Button
            variant="text"
            sx={{
              borderRadius: "0",
              borderColor: "white",
              color: "white",
              paddingX: "1rem",
            }}
          >
            Details
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "70%",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${props?.item.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, #091E3A 8.65%, rgba(9, 30, 58, 0.7) 21.88%, rgba(9, 30, 58, 0.5) 35.73%, rgba(9, 30, 58, 0.25) 56.56%, rgba(9, 30, 58, 0.22) 100%)",
          }}
        ></div>
      </Box>
    </Box>
  );
}
