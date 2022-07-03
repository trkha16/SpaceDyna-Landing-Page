import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        padding: "0px 7%",
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <div id="home" className={classes.root}>
            <div className={classes.container}></div>
        </div>
    );
}
