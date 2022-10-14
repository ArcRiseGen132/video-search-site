import youtube from "./API/youtube";
import { Grid } from "@mui/material";
import SearchBar from "./Components/SearchBar/SearchBar";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
          </Grid>
          <Grid item xs={8}>
            {/* {VideoDetail} */}
          </Grid>
          <Grid item xs={4}>
            {/* {VideoList} */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY,
        q: searchItem,
      },
    });
    console.log(response.data.items);
  }
}

export default App;
