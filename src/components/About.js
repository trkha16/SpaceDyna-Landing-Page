import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        background:
            "url(https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "10% 0px",
        marginTop: "10%",
    },
    container: {
        padding: "0px 7%",
    },
    contentContainer: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        color: "#fff",
        "& h5": {
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "0px",
            marginBottom: "2%",
        },
        "& p": {
            fontSize: "15px",
            lineHeight: "30px",
            margin: "0px",
        },
    },
    itemContainer: {
        marginBottom: "8%",
    },
});

export default function About() {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root}>
            <div className={classes.container}>
                <Grid container>
                    <Grid item md={4}>
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/about-left-image.png"
                            alt="Icon1"
                        />
                    </Grid>
                    <Grid container md={8} className={classes.contentContainer}>
                        {datas.map((item) => (
                            <Grid item md={6} key={item.id}>
                                <Grid
                                    container
                                    className={classes.itemContainer}
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
