import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
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
    padding: 30,
    backgroundColor: "rgba(118, 118, 118, 0.2)",
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
  input: {
    width: "20%",
    margin: "5%",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  rowLine: {
    borderColor: "grey",
  },
  formInput: {
    display: "flex",
  },
}));

export default function Auth() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Percobaan OTP
        </Typography>
        <form className={classes.form} noValidate>
          <div className={classes.formInput}>
            <TextField
               className={classes.input}
               variant="outlined"
               margin="normal"
               required
               id="otp1"
               name="otp1"
               autoFocus
               inputProps={{
                  maxlength: 1,
               }}
               />
            <TextField
               className={classes.input}
               variant="outlined"
               margin="normal"
               required
               id="otp2"
               name="otp2"
               inputProps={{
                  maxlength: 1,
               }}
               />
            <TextField
               className={classes.input}
               variant="outlined"
               margin="normal"
               required
               id="otp3"
               name="otp3"
               inputProps={{
                  maxlength: 1,
               }}
               />
            <TextField
               className={classes.input}
               variant="outlined"
               margin="normal"
               required
               id="otp4"
               name="otp4"
               inputProps={{
                  maxlength: 1,
               }}
               />
          </div>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Verifikasi
          </Button>
          <Box className={classes.rowLine} border={1} width="100%" />
          <Grid container style={{marginTop: 15,}}>
            <Grid item xs>
              <a variant="body2" style={{fontWeight: 600}}>
                Kirim ulang kode OTP
              </a>
            </Grid>
          </Grid>
        </form>
      </Box>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
