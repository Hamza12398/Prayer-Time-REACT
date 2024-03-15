import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Prayer from "./Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
export default function MainContent() {
  // ? STATES
  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
  });
  const [selected, setSelected] = useState({
    displayCity: "RABAT",
    displayApiCity: "Rabat",
  });

  const availableCities = [
    {
      displayCity: "RABAT",
      displayApiCity: "Rabat",
    },
    {
      displayCity: "CASABLANCA",
      displayApiCity: "Casablanca",
    },
    {
      displayCity: "KHOURIBGA",
      displayApiCity: "khouribga",
    },
    {
      displayCity: "MEKNES",
      displayApiCity: "meknes",
    },
    {
      displayCity: "FES",
      displayApiCity: "fes",
    },
  ];
  // ? END STATES

  const getTime = async () => {
    const data = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?city=${selected.displayApiCity}&country=Morocco`
    );
    const time = data.data.data.timings;
    setTimings(time);
  };

  useEffect(() => {
    getTime();
  }, [selected]);

  const handleChangeCities = (e) => {
    // const cityObject = availableCities.find((c) => {
    //   return c.displayApiCity === e.target.value;
    // });
    setSelected(e.target.value);
  };
  return (
    <div>
      {/* //! TOP CONTAMINER */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>{moment().format("MMMM Do YYYY, h:mm a")}</h2>
            <h1>{selected.displayCity}</h1>
          </div>
        </Grid>
      </Grid>
      {/* //! END TOP CONTAMINER */}

      <Divider sx={{ borderColor: "#272829" }} />

      {/* //! CARDS */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"space-around"}
        style={{ marginTop: "40px" }}
      >
        <Prayer
          name="Fajr"
          time={timings.Fajr}
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Dhuhr"
          time={timings.Dhuhr}
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Asr"
          time={timings.Asr}
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Al Magerib"
          time={timings.Maghrib}
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Isha"
          time={timings.Isha}
          image={"src/images/asr-prayer-mosque.png"}
        />
      </Stack>
      {/* //! END CARDS */}

      {/* //! SELECT */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          color: "white",
          // background:"orange",
        }}
      >
        <FormControl sx={{ m: 4, minWidth: 320 }} size="large">
          <InputLabel id="demo-select-small-label" style={{ color: "white" }}>
            City
          </InputLabel>
          <Select
            style={{ color: "white" }}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
            onChange={handleChangeCities}
          >
            {availableCities.map((city) => {
              return (
                <MenuItem key={city.displayCity} value={city}>
                  {city.displayCity}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      {/* //! END SELECT */}
    </div>
  );
}
