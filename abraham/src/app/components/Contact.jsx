"use client";
import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export default function Contact() {
  return (
    <section>
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 3, sm: 3, md: 2 }}
          sx={{ display: "flex", justifyContent: "center", mt: "3rem" }}
        >
          <Grid
            item
            xs={false}
            sm={false}
            md={5}
            sx={{
              backgroundImage:
                "url(https://res.cloudinary.com/ddfz8iwnf/image/upload/v1696022106/abraham/contact_hdz5pi.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            component={Paper}
            elevation={6}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "blue" }}>
                <MailIcon />
              </Avatar>
              <Typography component="h3" variant="h5">
                Contactanos
              </Typography>
              <Box
                component="form"
                /*   ref={form} */
                noValidate
                /*   onSubmit={sendEmail} */
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user_name"
                  label="Ingrese su nombre"
                  type="text"
                  name="user_name"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="user_tel"
                  label="Ingrese su teléfono"
                  type="tel"
                  id="user_tel"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user_email"
                  label="Ingrese su email"
                  name="user_email"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  label="Mensaje"
                  multiline
                  name="message"
                  rows={4}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  name="submit"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => setOpen(true)}
                >
                  ENVIAR
                </Button>
                {/*  <Snackbar
                      open={open}
                      autoHideDuration={2000}
                      onClose={() => setOpen(false)}
                      sx={{ bottom: 0, alignItems: "center" }}
                    >
                      <Alert severity="success">
                        <AlertTitle>Enviado</AlertTitle>
                        Su mensaje ha sido enviado con éxito
                      </Alert>
                    </Snackbar> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
