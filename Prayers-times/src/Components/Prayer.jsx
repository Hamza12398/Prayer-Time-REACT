// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Prayer({ name , time}) {
  return (
    <Card sx={{ maxWidth: 345, background: "#272829" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="src/images/asr-prayer-mosque.png"
        title="Al Fajr"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h2" color="text.secondary">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}
