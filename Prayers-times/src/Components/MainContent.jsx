import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Prayer from "./Prayer";
export default function MainContent() {
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
        <Prayer name ="Al Fajr"  time="04 : 40"/>
        <Prayer name ="Al Fajr" time="04 : 40"/>
        <Prayer name ="Al Fajr" time="04 : 40"/>
        <Prayer name ="Al Fajr" time="04 : 40"/>
        <Prayer name ="Al Fajr" time="04 : 40"/>
      </Stack>
      {/* //! END CARDS */}
    </div>
  );
}
