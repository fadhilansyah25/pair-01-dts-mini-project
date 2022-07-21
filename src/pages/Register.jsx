import React, { useState } from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/UserIcon.svg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("first-name");
    const lastName = data.get("last-name");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
      console.log(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: { sm: "none", md: "block" },
          width: "50%",
          background: `url(${Logo})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, rgba(20,20,20,0) 0%, rgba(20,20,20,1) 85%)",
          }}
        ></div>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ width: "50%", margin: "200px auto" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{ background: "white" }}
                required
                fullWidth
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="first-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ background: "white" }}
                required
                fullWidth
                name="last-name"
                label="Last Name"
                id="last-name"
                autoComplete="last-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ background: "white" }}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ background: "white" }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Typography color="red">{error}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
