import React from "react";
import { Box, Typography } from "@mui/material";

export default function DetailsBanner({ data }) {
  return data ? (
    <Box
      sx={{
        position: "relative",
        display: "block",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        backgroundSize: "cover",
        width: "100%",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          display: "absolute",
          height: "100%",
          width: "100%",
          backdropFilter: "blur(3px)",
          background: "rgba(68, 63, 65, 0.33)",
        }}
      >
        <Box sx={{ display: "flex", height: "80vh" }}>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              style={{
                maxHeight: "32rem",
                boxShadow: "1px 1px 28px 5px rgba(0,0,0,0.2)",
              }}
              alt=""
            />
          </Box>
          <Box sx={{ width: "60%", padding: "1rem", boxSizing: "border-box" }}>
            <Typography
              color="white"
              sx={{
                fontWeight: "700",
                fontSize: "2rem",
                lineHeight: "3.5rem",
                marginBottom: "1rem",
              }}
            >
              {data?.original_title}{" "}
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "1.6rem",
                  color: "rgba(239, 224, 231, 1)",
                }}
              >
                ({data?.release_date?.slice(0, 4)})
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}
