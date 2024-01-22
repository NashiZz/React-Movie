import Grid from '@mui/material/Grid';
import { Box, Container } from "@mui/system";
import data from '../../JSON/Movie.json';
import stars from "../../JSON/Stars.json";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from '@mui/material';

function Home_page() {
    return (
        <>
            <Container maxWidth="xl" >

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                >
                    <a href="" style={{ color: 'white', textDecoration: 'none', width: "137vh" }}> <h1>Top 10 on IMDb this week</h1></a>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Grid display={'flex'} justifyContent={'center'} container spacing={2}>
                            {data.map((movie) => (
                                <Card sx={{ color: 'white', maxWidth: 180, margin: 2 ,backgroundColor: "#262626"}}>
                                    <Link to={`/movie/${movie.name}`}>
                                        <img width={180} height={250} src={movie.img} alt={movie.name} />
                                    </Link>
                                    <CardContent >
                                        <Typography variant="subtitle1" component="div">
                                            {movie.Rating}
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            {movie.name}
                                        </Typography>
                                        <Button variant="outlined" color="primary" sx={{ marginTop: 2 }} onClick={() => navigator}>
                                            + Watchlist
                                        </Button>
                                    </CardContent>
                                    <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <IconButton sx={{color: 'white', fontSize: 16 }}
                                            component={Link} to={`/movie/${movie.name}`} color="primary">
                                            <ArrowRightIcon /> Trailer
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            ))}
                        </Grid>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <a href="" style={{ color: 'white', textDecoration: 'none', width: "137vh" }}> <h1>Born today</h1></a>
                    <h4 style={{ color: 'white', textDecoration: 'none', width: "137vh", marginTop: -18 }}>People born on January</h4>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {stars.map((character) => (
                            <Link to={"/character/" + character.name} style={{ textDecoration: 'none', color: 'white' }}>
                                <Box
                                    sx={{
                                        width: "10vw",
                                        height: "17vw",
                                        marginRight: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",

                                        // backgroundColor: "#262626",
                                    }}
                                >
                                    <img
                                        style={{ width: "100%", height: "60%", objectFit: "cover", borderRadius: 100 }}
                                        src={character.image}
                                    />
                                    <h4>{character.name}</h4>
                                    <h4 style={{ marginTop: -20 }}>{character.age}</h4>
                                </Box>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );

}

export default Home_page;
