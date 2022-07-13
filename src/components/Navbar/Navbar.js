import { Grid } from "@material-ui/core";
import styles from "./Navbar.module.scss";

function Navbar() {
    return (
        <div id="navbar" className={styles.root}>
            <div className={styles.container}>
                <Grid container className={styles.nav}>
                    <Grid item xs={5} sm={3} md={4}>
                        <h4>
                            spac
                            <span>dyna</span>
                        </h4>
                    </Grid>
                    <Grid
                        container
                        xs={0}
                        sm={9}
                        md={6}
                        className={styles.navItemContainer}
                    >
                        {menu.map((item) => (
                            <Grid
                                item
                                key={item.id}
                                md={2}
                                className={styles.navItem}
                            >
                                <a href={item.url} className={styles.navLink}>
                                    {item.title}
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={0} sm={0} md={2} className={styles.contact}>
                        <a href="/#" className={styles.contactBtn}>
                            Contact Now
                        </a>
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
