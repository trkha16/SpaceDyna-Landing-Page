import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        paddingTop: "8%",
    },
    container: {
        padding: "0px 7%",
    },
    content: {
        "& h4": {
            color: "2a2a2a",
            fontSize: "30px",
            textTransform: "capitalize",
            fontWeight: 700,
            lineHeight: "44px",
            letterSpacing: "0.25px",
            margin: "0px",
            "& em": {
                fontStyle: "normal",
                color: "#03a4ed",
            },
            "& span": {
                color: "#fe3f40",
            },
        },
        "& p": {
            fontSize: "15.3px",
            color: "#2a2a2a",
            lineHeight: "30px",
            marginTop: "3%",
            marginBottom: "5%",
        },
    },
    skillbarContainer: {
        position: "relative",
        marginBottom: "3%",
        "& h5": {
            fontSize: "18px",
            fontWeight: 700,
            color: "#2a2a2a",
            marginTop: "0px",
            marginBottom: "2%",
        },
        "& span": {
            position: "absolute",
            top: 0,
            left: "90%",
            fontSize: "18px",
            fontWeight: 600,
            color: "#03a4ed",
            margin: "0px",
        },
    },
});

export default function Services() {
    const classes = useStyles();

    return (
        <div id="services" className={classes.root}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item md={6}>
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/services-left-image.png"
                            alt="img"
                        />
                    </Grid>
                    <Grid item md={6} className={classes.content}>
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
                                    className={classes.skillbarContainer}
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
