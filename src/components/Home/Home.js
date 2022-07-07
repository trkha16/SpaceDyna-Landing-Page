import { Grid, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
    useEffect(() => {
        Aos.init({
            disable: "mobile",
        });
    }, []);

    return (
        <div id="home" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid
                        item
                        md={6}
                        className={styles.title}
                        data-aos="slide-right"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                    >
                        <h6>welcome to space dynamic</h6>
                        <h2>
                            we make <em>digital ideas</em> {"& "}
                            <span>seo</span> marketing
                        </h2>
                        <p>
                            Space Dynamic is a professional looking HTML
                            template using a Bootstrap 5 (beta 2). This CSS
                            template is free for you provided by{" "}
                            <Link to="#" className={styles.titleLink}>
                                TemplateMo
                            </Link>
                            .
                        </p>
                        <Grid container className={styles.formContainer}>
                            <Grid item md={8}>
                                <TextField
                                    id="standard-basic"
                                    fullWidth
                                    placeholder="Your website URL..."
                                    InputProps={{
                                        disableUnderline: true,
                                        className: styles.input,
                                    }}
                                />
                            </Grid>
                            <Grid item md={4} className={styles.btn}>
                                <p>Analyze Site</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        className={styles.imgContainer}
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-delay="0"
                    >
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/banner-right-image.png"
                            alt="img"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
