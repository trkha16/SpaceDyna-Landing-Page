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
    title: {
        width: "37%",
        paddingBottom: "11%",
        textAlign: "center",
        margin: "0px auto",
        "& h4": {
            color: "2a2a2a",
            fontSize: "30px",
            textTransform: "capitalize",
            fontWeight: 800,
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
    },
    show: {
        borderRadius: "20px",
        boxShadow: "0px 0px 10px rgb(0 0 0 / 10%)",
        background: "#fff",
        textAlign: "center",
        padding: "11%",
    },
    hide: {
        position: "relative",
        borderRadius: "20px",
        textAlign: "center",
        padding: "11%",
        background:
            "linear-gradient(105deg, rgba(255,77,30,1) 0%, rgba(255,44,109,1) 100%)",
        color: "#fff",
        zIndex: "2",
        "& h4": {
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "0px",
        },
        "& p": {
            fontSize: "15px",
            lineHeight: "30px",
            margin: "0px",
        },
        "&::after": {
            width: "20px",
            height: "20px",
            content: '""',
            transform: "rotate(45deg)",
            background:
                "linear-gradient(105deg, rgba(255,52,69,1) 0%, rgba(255,51,78,1) 100%)",
            position: "absolute",
            bottom: "-5%",
            zIndex: "1",
        },
    },
});

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div id="portfolio" className={classes.root}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h4>
                        See What Our Agency <em>offers</em> {"&"} What We
                        <span> provide</span>
                    </h4>
                </div>
                <Grid container spacing={2}>
                    {contents.map((item) => (
                        <Grid item md={3} key={item.id}>
                            <div className={classes.hide}>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                            {/* <div className={classes.show}>
                                <img src={item.showImg} alt="img" />
                            </div> */}
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
