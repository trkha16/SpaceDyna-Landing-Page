import { Grid } from "@material-ui/core";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div id="about" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-left-image.png"
                            alt="Icon1"
                        />
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        md={8}
                        className={styles.contentContainer}
                    >
                        {datas.map((item) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                key={item.id}
                                data-aos="fade-right"
                                data-aos-duration="700"
                                data-aos-delay={item.id * 150}
                                data-aos-once="true"
                                className={styles.content}
                            >
                                <Grid
                                    container
                                    className={styles.itemContainer}
                                >
                                    <Grid item xs={3} md={3}>
                                        <img src={item.icon} alt="Img" />
                                    </Grid>
                                    <Grid item xs={9} md={9}>
                                        <h5>{item.job}</h5>
                                        <p>{item.detail}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const datas = [
    {
        id: 1,
        icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-01.png",
        job: "Data Analysis",
        detail: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
        id: 2,
        icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-02.png",
        job: "Data Reporting",
        detail: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
        id: 3,
        icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-03.png",
        job: "Web Analytics",
        detail: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
    {
        id: 4,
        icon: "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/service-icon-04.png",
        job: "SEO Suggestions",
        detail: "Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter",
    },
];
