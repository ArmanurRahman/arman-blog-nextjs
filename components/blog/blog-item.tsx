import Image from "next/image";
import classes from "./blog-item.module.css";
import React from "react";
import { useRouter } from "next/router";
import { blogItem } from "@/type/post";

const BlogItem = (props: { items: Array<blogItem> }) => {
    const { items } = props;

    const router = useRouter();
    const detailBlogNavigationHandler = (slug: string) => {
        router.push(`/posts/${slug}`);
    };
    return (
        <section className={classes.blog_section}>
            {items.map((item) => (
                <div
                    className={classes.blog_card}
                    key={item.imegeURI}
                    onClick={() => detailBlogNavigationHandler(item.slug)}
                >
                    <div className={classes.blog_card__image}>
                        <Image
                            src={`/image/blog/${item.imegeURI}`}
                            alt={item.slug}
                            width={360}
                            height={200}
                        />
                    </div>

                    <div className={classes.blog_card__detail}>
                        <p className={classes.blog_card__title}>{item.title}</p>
                        <p className={classes.blog_card_date}>
                            {item.startDate}
                        </p>
                        <p className={classes.blog_card__description}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default BlogItem;
