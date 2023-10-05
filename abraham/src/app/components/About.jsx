import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <section className="about">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid item xs={12} md={3}>
          <Box className="text">
            <Typography variant="h2">Nuestra historia</Typography>

            <Typography className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit
              aut nam earum omnis. Consectetur, placeat! Corporis molestias et,
              exercitationem quam quisquam laboriosam odio hic dicta perferendis
              dolorum accusantium ducimus! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum sit aut nam earum omnis.
              Consectetur, placeat! Corporis molestias et, exercitationem quam
              quisquam laboriosam odio hic dicta perferendis dolorum accusantium
              ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum sit aut nam earum omnis. Consectetur, placeat! Corporis
              molestias et, exercitationem quam quisquam laboriosam odio hic
              dicta perferendis dolorum accusantium ducimus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Illum sit aut nam earum
              omnis. Consectetur, placeat! Corporis molestias et, exercitationem
              quam quisquam laboriosam odio hic dicta perferendis dolorum
              accusantium ducimus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum sit aut nam earum omnis. Consectetur,
              placeat! Corporis molestias et, exercitationem quam quisquam
              laboriosam odio hic dicta perferendis dolorum accusantium ducimus!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box className="about-img"></Box>
        </Grid>
      </Grid>
    </section>
  );
}
