import Header from "@/components/header/header";
import Image from "next/image";
import { Fragment } from "react";
import classes from "../../styles/DetailPost.module.css";
import { getPostData, getPostsFiles } from "@/lib/post-util";
import { blogItem } from "@/type/post";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostDetailPage = (props: { post: blogItem }) => {
    const { post } = props;

    const customRenderer = {
        p(paragraph: any) {
            const { node } = paragraph;
            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/image/blog/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
    };
    return (
        <Fragment>
            <Header />
            <section className={classes.section}>
                <div className={classes.header}>
                    <p className={classes.title}>Mastering Nextjs</p>
                    <Image
                        src={`/image/blog/${post.imegeURI}`}
                        alt={post.slug}
                        width={200}
                        height={120}
                        className={classes.image}
                    />
                </div>
                <div className={classes.devider}></div>

                {post.content && (
                    <ReactMarkdown
                        className={classes.font_black}
                        components={customRenderer}
                    >
                        {post.content}
                    </ReactMarkdown>
                )}
            </section>
        </Fragment>
    );
};

export const getStaticProps = async (context: any) => {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug + ".md");
    return {
        props: {
            post: postData,
        },
        revalidate: 1800,
    };
};

export const getStaticPaths = async () => {
    const postFiles = getPostsFiles();
    const slugs = postFiles.map((fileName) => fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
};
export default PostDetailPage;
