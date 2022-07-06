import { Grid } from "@material-ui/core";
import styles from "./About.module.scss";

export default function About() {
    return (
        <div id="about" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid item md={4}>
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-left-image.png"
                            alt="Icon1"
                        />
                    </Grid>
                    <Grid container md={8} className={styles.contentContainer}>
                        {datas.map((item) => (
                            <Grid item xs={12} md={6} key={item.id}>
                                <Grid
                                    container
                                    className={styles.itemContainer}
                                >
                                    <Grid item md={3}>
                                        <img src={item.icon} alt="Img" />
                                    </Grid>
                                    <Grid item md={9}>
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
