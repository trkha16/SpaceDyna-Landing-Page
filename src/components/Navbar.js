import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        background: "#fafafa",
        boxShadow: "0px 1px 1px #eee",
        zIndex: 100,
    },
    container: {
        padding: "0px 7%",
    },
    nav: {
        cursor: "pointer",
        "& h4": {
            fontSize: "24px",
            color: "#03a4ed",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            "& span": {
                color: "#fe3f40",
            },
        },
    },
    contact: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
    },
    contactBtn: {
        textAlign: "center",
        lineHeight: "40px",
        background: "#fe3f40",
        padding: "0px 10%",
        color: "#fff",
        fontSize: "15px",
        fontWeight: 400,
        letterSpacing: "1px",
        textDecoration: "none",
        borderRadius: "25px",
        transition: "all 0.5s",
        "&:hover": {
            background: "#03a4ed",
        },
    },
    navItem: {
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "15px",
        color: "#2a2a2a",
        lineHeight: "40px",
        letterSpacing: "1px",
        "&:hover": {
            color: "#fe3f40",
        },
    },
    navItemContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

function Navbar() {
    const classes = useStyles();

    return (
        <div id="navbar" className={classes.root}>
            <div className={classes.container}>
                <Grid container className={classes.nav}>
                    <Grid item md={4}>
                        <h4>
                            spac
                            <span>dyna</span>
                        </h4>
                    </Grid>
                    <Grid container md={6}>
                        {menu.map((item) => (
                            <Grid
                                item
                                key={item.id}
                                md={2}
                                className={classes.navItemContainer}
                            >
                                <Link to="#" className={classes.navItem}>
                                    {item.title}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={2} className={classes.contact}>
                        <Link to="#" className={classes.contactBtn}>
                            Contact Now
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Navbar;

const menu = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "About Us",
    },
    {
        id: 3,
        title: "Services",
    },
    {
        id: 4,
        title: "Portfolio",
    },
    {
        id: 5,
        title: "Blog",
    },
    {
        id: 6,
        title: "Message Us",
    },
];
