import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <div id="contact" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid item md={6} className={styles.content}>
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
                    <Grid item md={6}></Grid>
                </Grid>
            </div>
        </div>
    );
}
