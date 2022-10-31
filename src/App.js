import youtube from "./API/youtube";
import { Grid } from "@mui/material";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useState } from "react";
import VideoDetail from "./Components/VideoDetail/VideoDetail";
import VideoList from "./Components/VideoList/VideoList";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY,
        q: searchItem,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
