import { Box, Container } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import data from '../../JSON/Movie.json';
import { Divider, Grid } from "@mui/material";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useNavigate } from "react-router-dom";

function Movie_page() {
  const params = useParams();
  let name = "don't have movie";
  let stars = [];
  let types = [];
  let writers = [];
  const movie = data.find(
    (movie: { name: string | undefined }) => movie.name === params.name
  );
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == params.name) {
      for (let j = 0; j < data[i].stars!.length; j++) {
        stars.push(data[i].stars![j].star);
      }
      for (let j = 0; j < data[i].roles!.length; j++) {
        types.push(data[i].roles![j].role);
      }
      for (let j = 0; j < data[i].writers!.length; j++) {
        writers.push(data[i].writers![j].writer);
      }
    }
  }
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", paddingTop: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-start", marginRight: 138 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={navigateToHome}
            sx={{ marginTop: 0 }}
          >
            Back
          </Button>
        </Box>
        <Card sx={{ width: 1200, height: 750, marginTop: 2, backgroundColor: "#262626" }}>
          <Container sx={{ color: "white" , display: "flex", flexDirection: "column" }}>
            <h1>{movie?.name}</h1>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: -5 }}>
              <h5 style={{ marginRight: 10 }}> {movie?.time}</h5>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: -5, marginRight: -80 }}>
                <h5>RATING</h5>
                <h4 style={{ marginTop: -20 }}>{movie?.Rating}/10</h4>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: -5, marginRight: -80 }}>
                <h5>YOUR RATING</h5>
                <h4 style={{ marginTop: -20 }}>{movie?.Rating}/10</h4>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: -5 }}>
                <h5>POPULARITY</h5>
                <h4 style={{ marginTop: -20 }}>{movie?.Rating}/10</h4>
              </Box>
            </Box>
          </Container>
          <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: -4 }}>
            <Box sx={{ marginRight: 1 }}>
              <img width={260} height={360} src={movie?.img} alt={name} />
            </Box>
            <Box>
              <iframe
                width="700"
                height="360"
                src={movie?.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
            <Grid sx={{ marginLeft: 1 }}>
              <Card sx={{ width: 175, height: 175, marginBottom: 1, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <VideoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                <h5 style={{ margin: 0 }}>Video</h5>
              </Card>
              <Card sx={{ width: 175, height: 175, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <PhotoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                <h5 style={{ margin: 0 }}>Photo</h5>
              </Card>
            </Grid>
          </CardContent>
          <CardContent sx={{ display: 'flex', flexDirection: 'row', marginLeft: 1 }}>
            {types.map((type) => (
              <Button
                variant="outlined"
                color="primary"
                sx={{ marginTop: -2, marginRight: 1 }}
                onClick={() => console.log("Button clicked")}
              >
                {type}
              </Button>
            ))}
          </CardContent>
          <CardContent sx={{ color: "white" ,display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginLeft: 1, marginTop: -2 }}>
            <Box sx={{ marginRight: 5 }}>
              {movie?.des}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
              <Button variant="outlined" color="primary" sx={{ width: 350, height: 50, marginTop: -2 }} onClick={() => console.log("Button clicked")}>
                Add to Watchlist
              </Button>
            </Box>
          </CardContent>
          <CardContent sx={{ color: "white" ,display: 'flex', flexDirection: 'column', marginLeft: 1, marginTop: -8 }}>
            <Divider sx={{ width: '67%', marginTop: 3 }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: -1 }}>
              <h4>Creater</h4>
              {writers.map((writer) => (
                <Link
                  key={writer}
                  to={`/character/${writer}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 30,
                  }}
                >
                  <h4>{writer}</h4>
                </Link>
              ))}
            </Box>
            <Divider sx={{ width: '67%', marginTop: -1 }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: -1 }}>
              <h4>Stars</h4>
              {stars.map((star) => (
                <Link
                  key={star}
                  to={"/character/" + star}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 30,
                  }}
                >
                  <h4>{star}</h4>
                </Link>
              ))}
            </Box>
            <Divider sx={{ width: '67%', marginTop: -1 }} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Movie_page;
