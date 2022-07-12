import { Grid } from "@material-ui/core";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
    return (
        <div id="portfolio" className={styles.root}>
            <div className={styles.container}>
                <div
                    className={styles.title}
                    data-aos="zoom-in-up"
                    data-aos-duration="500"
                    data-aos-delay={300}
                    data-aos-once="true"
                >
                    <h4>
                        See What Our Agency <em>offers</em> {"&"} What We
                        <span> provide</span>
                    </h4>
                </div>
                <Grid container className={styles.hover}>
                    {contents.map((item) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={item.id}
                            className={styles.hoverContainer}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={item.id * 150}
                            data-aos-once="true"
                        >
                            <div className={styles.hide}>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                            <div className={styles.show}>
                                <img src={item.showImg} alt="img" />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

const contents = [
    {
        id: 1,
        showImg:
            "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/portfolio-image.png",
        title: "SEO Analysis",
        content: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
        id: 2,
        showImg:
            "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/portfolio-image.png",
        title: "Website Reporting",
        content: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
        id: 3,
        showImg:
            "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/portfolio-image.png",
        title: "Performance Tests",
        content: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
        id: 4,
        showImg:
            "https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/portfolio-image.png",
        title: "Data Analysis",
        content: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
];
