import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Prayer from "./Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
export default function MainContent() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {/* //! TOP CONTAMINER */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2>wed 13 match 2024 | 3:40 pm</h2>
            <h1>KHOURIBGA</h1>
          </div>
        </Grid>

        <Grid xs={6}>
          <div>
            <h2>Next Prayer at</h2>
            <h1>Al Asr</h1>
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
          name="Al Fajr"
          time="04 : 40"
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Al Fajr"
          time="04 : 40"
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Al Fajr"
          time="04 : 40"
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Al Fajr"
          time="04 : 40"
          image={"src/images/asr-prayer-mosque.png"}
        />
        <Prayer
          name="Al Fajr"
          time="04 : 40"
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
          <InputLabel
            id="demo-select-small-label"
            style={{ color: "white" }}
          >
            City
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10} >Al Fajr</MenuItem>
            <MenuItem value={20} >Dohr</MenuItem>
            <MenuItem value={30} >Al Asr</MenuItem>
            <MenuItem value={30} >Al Magerib</MenuItem>
            <MenuItem value={30} >Al Aichaa</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* //! END SELECT */}
    </div>
  );
}
