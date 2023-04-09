import Image from "next/image";
import classes from "./hero.module.css";
import Header from "../header/header";
import BlogList from "../blog/blog-list";
import { Fragment } from "react";
import { blogItem } from "@/type/post";

const Hero = (props: { posts: Array<blogItem> }) => {
    return (
        <Fragment>
            <section className={classes.hero}>
                <Header />
                <div className={classes.hero_image__container}>
                    <Image
                        src='/image/site/mubeen.jpeg'
                        alt='photo of author'
                        width={300}
                        height={300}
                        className={classes.hero_image}
                    />
                </div>
                <div className={classes.intro}>
                    <h2>Hi, I am Arman</h2>
                    <p>
                        I blog about web development microservices, database,
                        devops and data science
                    </p>
                </div>
            </section>
            <BlogList posts={props.posts} />
        </Fragment>
    );
};

export default Hero;
