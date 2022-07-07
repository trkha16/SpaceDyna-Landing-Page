import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <div id="contact" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid
                        item
                        md={6}
                        className={styles.content}
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-delay={100}
                        data-aos-once="true"
                    >
                        <h2>
                            Feel Free To Send Us A Message About Your Website
                            Needs
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed doer ket eismod tempor incididunt ut
                            labore et dolores
                        </p>
                        <div className={styles.phone}>
                            <h4>
                                For any enquiry, Call Us:
                                <span>
                                    <i class="fa fa-phone"></i>
                                    <Link to="#" className={styles.phoneNumber}>
                                        010-020-0340
                                    </Link>
                                </span>
                            </h4>
                        </div>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        className={styles.contactPadding}
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay={100}
                        data-aos-once="true"
                    >
                        <div className={styles.contactFormContainer}>
                            <Grid
                                container
                                component="form"
                                className={styles.contactForm}
                            >
                                <Grid item xs={12} md={6}>
                                    <input type="text" placeholder="Name" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input
                                        type="surname"
                                        placeholder="Surname"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <textarea
                                        type="text"
                                        placeholder="Message"
                                    />
                                </Grid>
                            </Grid>
                            <div className={styles.contactBtnContainer}>
                                <Link to="#" className={styles.contactBtn}>
                                    Send Message
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
