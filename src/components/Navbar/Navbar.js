import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <div id="navbar" className={styles.root}>
            <div className={styles.container}>
                <Grid container className={styles.nav}>
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
                                className={styles.navItemContainer}
                            >
                                <Link to={item.url} className={styles.navItem}>
                                    {item.title}
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={2} className={styles.contact}>
                        <Link to="#" className={styles.contactBtn}>
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
        url: "#home",
        title: "Home",
    },
    {
        id: 2,
        url: "#about",
        title: "About Us",
    },
    {
        id: 3,
        url: "#services",
        title: "Services",
    },
    {
        id: 4,
        url: "#portfolio",
        title: "Portfolio",
    },
    {
        id: 5,
        url: "#blog",
        title: "Blog",
    },
    {
        id: 6,
        url: "#contact",
        title: "Message Us",
    },
];
