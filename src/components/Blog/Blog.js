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
                    <Grid item md={6} className={styles.mainArticle}>
                        <div className={styles.banner}>
                            <img
                                src="https://templatemo.com/templates/templatemo_562_space_dynamic/assets/images/big-blog-thumb.jpg"
                                alt="banner"
                            />
                        </div>
                        <div className={styles.content}>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    24 Mar 2021
                                </li>
                                <li>
                                    <i class="fa-solid fa-users"></i>
                                    TemplateMo
                                </li>
                                <li>
                                    <i class="fa-solid fa-folder"></i>
                                    Branding
                                </li>
                            </ul>
                            <h4>SEO Agency {"&"} Digital Marketing</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur and sed
                                doer ket eismod tempor incididunt ut labore et
                                dolore magna...
                            </p>
                        </div>
                        <div className={styles.articleBtn}>
                            <p>discover more</p>
                        </div>
                    </Grid>
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
                                    <h2>{item.title}</h2>
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