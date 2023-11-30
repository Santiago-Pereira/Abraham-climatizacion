"use client";
import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MailIcon from "@mui/icons-material/Mail";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function Contact() {
  const form = useRef(null);

  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkkbiem",
        "template_fokcy5f",
        form.current,
        "YzvruES_JgSeKWzW3"
      )
      .then(
        (result) => {
          console.log(result.text);
          <Alert severity="success">
            <AlertTitle>Mensaje enviado!</AlertTitle>
            Su mensaje ha sido enviado con éxito, en breve nos pondremos en
            contacto con ud. — <strong>Saludos!</strong>
          </Alert>;
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section id="contact">
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
                ref={form}
                noValidate
                onSubmit={sendEmail}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="nombre"
                  label="Ingrese su nombre"
                  type="text"
                  name="nombre"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="telefono"
                  label="Ingrese su teléfono"
                  type="tel"
                  id="telefono"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Ingrese su email"
                  name="email"
                  autoComplete="on"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="consulta"
                  label="Mensaje"
                  multiline
                  name="consulta"
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
