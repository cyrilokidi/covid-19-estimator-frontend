import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created with love by "}
      <Link color="inherit" href="https://github.com/cyrilokidi">
        Cyril Okidi
      </Link>
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Estimator() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Covid-19 Estimator
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="data-population"
                label="Population"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="data-time-to-elapse"
                label="Time to elapse"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="data-reported-cases"
                label="Reported cases"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                variant="outlined"
                required
                fullWidth
                id="data-total-hospital-beds"
                label="Total hospital beds"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="data-go-
            estimate"
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
