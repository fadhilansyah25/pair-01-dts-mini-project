import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrow";

export default function DetailsBanner({ data }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
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
          <Box
            sx={{
              width: "60%",
              padding: "3rem 2rem",
              boxSizing: "border-box",
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-between",
              height: "80vh",
            }}
          >
            <Typography
              color="white"
              sx={{
                fontWeight: "700",
                fontSize: "2rem",
                lineHeight: "3rem",
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
            <Typography variant="body1" color="white" fontSize={"0.9rem"}>
              {data?.release_date}{" "}
              {data?.genres.map((data) => `| ${data.name} `)}
              {" - "}
              {`${Math.floor(data?.runtime / 60)}h`} {`${data?.runtime % 60}m`}
            </Typography>
            <Typography color="white">{data?.tagline}</Typography>
            <div style={{ marginTop: "2rem" }}>
              <Typography variant="h5" fontWeight={"500"} color="white">
                Overview
              </Typography>
              <Typography color="white">{data?.overview}</Typography>
            </div>
            <Typography sx={{ marginTop: "1rem" }} color="white">
              {`Budget ${formatter.format(
                data?.budget
              )} | Revenue ${formatter.format(data?.revenue)}`}
            </Typography>
            <Typography sx={{ marginTop: "1rem" }} color="white">
              Status {data?.status}
            </Typography>
            <div style={{ marginTop: "1rem" }}>
              <Typography variant="h6" fontWeight={"500"} color="white">
                Languages
              </Typography>
              <Typography color="white">
                {data?.spoken_languages?.map(
                  (data) => `| ${data.english_name} `
                )}
              </Typography>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  border: "1px solid white",
                  color: "white",
                }}
                target="_blank"
                href={data?.homepage}
                startIcon={<PlayIcon />}
              >
                Play
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}
