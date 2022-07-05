import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer" className={styles.root}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>
                        © Copyright 2021 Space Dynamic Co. All Rights Reserved.
                        <br />
                        Design: <Link to="#">TemplateMo</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
