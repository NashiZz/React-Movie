import { useParams } from "react-router-dom";
import characters from "../../Json/Stars.json";
import { Box, Button, Card, CardContent, Container, Divider, Grid } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

function Character_info_page() {
    const params = useParams();
    const character = characters.find(
        (character: { name: string | undefined }) => character.name === params.name
      );
    if (character?.name == params.name) {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 4,
                backgroundColor: "#262626",

              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginRight: 138,
                }}
              >
              </Box>
              <Card sx={{ width: 1200, height: 750, marginTop: 2 }}>
                <Container sx={{ display: "flex", flexDirection: "column" }}>
                  <h1>{character?.name}</h1>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: -5,
                    }}
                  >
                    <h5 style={{ marginRight: 10 }}>{character?.role}</h5>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 0,
                        marginRight: 10,
                      }}
                    >
                      <Button>STARMETER</Button>
                    </Box>
                  </Box>
                </Container>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: -4,
                  }}
                >
                  <Box sx={{ marginRight: 1 }}>
                    <img width={260} height={360} src={character?.image} alt={character?.name} />
                  </Box>
                  <Box>
                    <iframe
                      width="700"
                      height="360"
                      src={character?.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </Box>
                  <Grid sx={{ marginLeft: 1 }}>
                    <Card
                      sx={{
                        width: 175,
                        height: 175,
                        marginBottom: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <VideoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                      <h5 style={{ margin: 0 }}>Video</h5>
                    </Card>
                    <Card
                      sx={{
                        width: 175,
                        height: 175,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhotoLibraryIcon sx={{ fontSize: 48, marginBottom: 1 }} />
                      <h5 style={{ margin: 0 }}>Photo</h5>
                    </Card>
                  </Grid>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 1,
                    marginTop: -2,
                  }}
                >
                  <Box sx={{ marginRight: 5 }}>{character?.des}</Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", marginTop: 0}}
                  > 
                    <h4>Born {character?.born}</h4>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ width: 350, height: 50, marginTop: -2 }}
                      onClick={() => console.log("Button clicked")}
                    >
                      Add to list
                    </Button>
                  </Box>
                </CardContent>
                <Divider sx={{ width: "67%", marginLeft: 3 }} />
              </Card>
            </Box>
          </>
        );
      } else {
        return (
          <>
            <h1>Don't have Movie </h1>
          </>
        );
      }
}
export default Character_info_page;