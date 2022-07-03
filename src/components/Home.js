import { makeStyles } from "@material-ui/styles";
import { Grid, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        paddingTop: "15%",
        paddingBottom: "7%",
    },
    container: {
        padding: "0px 7%",
    },
    imgContainer: {
        display: "flex",
        justifyContent: "right",
    },
    title: {
        paddingRight: "5%",
        alignSelf: "center",
        "& h6": {
            textTransform: "uppercase",
            fontSize: "18px",
            color: "#fe3f40",
            fontWeight: 500,
            lineHeight: 1.2,
            marginTop: "0px",
            marginBottom: "3%",
        },
        "& h2": {
            textTransform: "capitalize",
            fontSize: "50px",
            fontWeight: "700",
            color: "#2a2a2a",
            lineHeight: "72px",
            margin: "0px",
            "& em": {
                color: "#03a4ed",
                fontStyle: "normal",
            },
            "& span": {
                color: "#fe3f40",
                textTransform: "uppercase   ",
            },
        },
        "& p": {
            color: "#2a2a2a",
            fontSize: "15px",
            lineHeight: "30px",
            fontWeight: 400,
            marginTop: "5%",
        },
    },
    titleLink: {
        textDecoration: "none",
        color: "#0d6efd",
        "&:hover": {
            color: "#0a58ca",
        },
    },
    formContainer: {
        background: "#03a4ed",
        opacity: 0.8,
        width: "80%",
        padding: "0px",
        marginTop: "5%",
        borderRadius: "50px",
    },
    input: {
        color: "#fff",
        padding: "0px 30px",
        paddingTop: "7%",
        "&::placeholder": {
            color: "fff",
        },
    },
    btn: {
        margin: "0px",
        padding: "2% 2%",
        "& p": {
            borderRadius: "25px",
            padding: "5% 0px",
            margin: "0px",
            color: "#fe3f40",
            background: "#fff",
            textAlign: "center",
            fontSize: "15px",
            fontWeight: 500,
        },
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <div id="home" className={classes.root}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item md={6} className={classes.title}>
                        <h6>welcome to space dynamic</h6>
                        <h2>
                            we make <em>digital ideas</em> {"& "}
                            <span>seo</span> marketing
                        </h2>
                        <p>
                            Space Dynamic is a professional looking HTML
                            template using a Bootstrap 5 (beta 2). This CSS
                            template is free for you provided by{" "}
                            <Link to="#" className={classes.titleLink}>
                                TemplateMo
                            </Link>
                            .
                        </p>
                        <Grid container className={classes.formContainer}>
                            <Grid item md={8}>
                                <TextField
                                    id="standard-basic"
                                    fullWidth
                                    placeholder="Your website URL..."
                                    InputProps={{
                                        disableUnderline: true,
                                        classes: { input: classes.input },
                                    }}
                                />
                            </Grid>
                            <Grid item md={4} className={classes.btn}>
                                <p>Analyze Site</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} className={classes.imgContainer}>
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
