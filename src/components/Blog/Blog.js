import Grid from "@material-ui/core/Grid";

import styles from "./Blog.module.scss";

export default function Blog() {
    return (
        <div id="blog" className={styles.root}>
            <div className={styles.container}>
                <Grid container>
                    <Grid item md={6} className={styles.title}>
                        <h4>
                            Check Out What Is <em>trending</em> In Our Latest
                            <span> news</span>
                        </h4>
                    </Grid>
                    <Grid item md={6} className={styles.titleImg}>
                        <img
                            src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/blog-dec.png"
                            alt="img"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={6}></Grid>
                    <Grid item md={6} className={styles.listArticlesContainer}>
                        {articles.map((item) => (
                            <Grid container className={styles.listArticles}>
                                <Grid
                                    item
                                    md={7}
                                    className={styles.articleItemContainer}
                                >
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <span>{item.date}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                </Grid>
                                <Grid
                                    item
                                    md={5}
                                    className={styles.articleItemImages}
                                >
                                    <img
                                        src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/blog-thumb-01.jpg"
                                        alt="thumbnail"
                                    />
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const articles = [
    {
        id: 1,
        date: "18 Mar 2021",
        title: "New Websites & Backlinks",
        content:
            "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
    {
        id: 2,
        date: "18 Mar 2021",
        title: "SEO Analysis & Content Ideas",
        content:
            "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
    {
        id: 3,
        date: "18 Mar 2021",
        title: "SEO Tips & Digital Marketing",
        content:
            "Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...",
    },
];
