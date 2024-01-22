import { AppBar, Toolbar, Container, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {

    return (
        <AppBar
            position="sticky"
            sx={{ boxShadow: 15, backgroundColor: "#181818" }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                        >
                            <Link to="/">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                                    width={70}
                                />
                            </Link>{" "}
                        </IconButton>

                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;