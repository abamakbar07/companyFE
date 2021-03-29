import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {new Date().getFullYear()}
      {" © "}
      <Link color="inherit" href="http://akbarafriansyah.my.id/">
        akbarafriansyah.my.id 
      </Link>{" "}
    </Typography>
  );
}
