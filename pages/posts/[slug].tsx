import Header from "@/components/header/header";
import Image from "next/image";
import { Fragment } from "react";
import classes from "../../styles/DetailPost.module.css";

const PostDetailPage = () => {
    return (
        <Fragment>
            <Header />
            <section className={classes.section}>
                <div className={classes.header}>
                    <p className={classes.title}>Mastering Nextjs</p>
                    <Image
                        src='/image/blog/nextjs.png'
                        alt='nextjs photo'
                        width={200}
                        height={120}
                        className={classes.image}
                    />
                </div>
                <div className={classes.devider}></div>
                <p className={classes.details}>
                    nextjs is fullstact framework. To understand nextjs need to
                    know reactjs and javascript
                </p>
            </section>
        </Fragment>
    );
};

export default PostDetailPage;
