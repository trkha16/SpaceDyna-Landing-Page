import { Grid } from "@material-ui/core";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <div id="services" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid
                        item
                        md={6}
                        data-aos="slide-right"
                        data-aos-duration="1000"
                        data-aos-delay={0}
                        data-aos-once="true"
                    >
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/services-left-image.png"
                            alt="img"
                        />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        className={styles.content}
                        data-aos="slide-left"
                        data-aos-duration="1000"
                        data-aos-delay={0}
                        data-aos-once="true"
                    >
                        <h4>
                            Grow Your Website With Our <em>SEO</em> Service{" "}
                            {"&"} <span>Project</span> Ideas
                        </h4>
                        <p>
                            Space Dynamic HTML5 template is free to use for your
                            website projects. However, you are not permitted to
                            redistribute the template ZIP file on any CSS
                            template collection websites. Please contact us for
                            more information. Thank you for your kind
                            cooperation.
                        </p>
                        <Grid container>
                            {skillbars.map((item) => (
                                <Grid
                                    item
                                    xs={12}
                                    key={item.id}
                                    className={styles.skillbarContainer}
                                >
                                    <h5>{item.skill}</h5>
                                    <span>{item.percent}%</span>
                                    <div
                                        style={{
                                            width: `${item.percent - 10}%`,
                                            background:
                                                "linear-gradient(105deg, rgba(255,77,30,1) 0%, rgba(255,44,109,1) 100%)",
                                            height: "6px",
                                            borderRadius: "3px",
                                            position: "relative",
                                            zIndex: "2",
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "6px",
                                            borderRadius: "3px",
                                            background: "#f7eff1",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    ></div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const skillbars = [
    {
        id: 1,
        skill: "Website Analysis",
        percent: 84,
    },
    {
        id: 2,
        skill: "SEO Reports",
        percent: 88,
    },
    {
        id: 3,
        skill: "Page Optimizations",
        percent: 94,
    },
];
