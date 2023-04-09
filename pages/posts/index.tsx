import BlogList from "@/components/blog/blog-list";
import Header from "@/components/header/header";
import { getAllPost } from "@/lib/post-util";
import { blogItem } from "@/type/post";
import { Fragment } from "react";

const PostsPage = (props: { posts: Array<blogItem> }) => {
    return (
        <Fragment>
            <Header />
            {/* <p> All Posts</p> */}
            <BlogList posts={props.posts} />
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const allPosts = getAllPost();
    return {
        props: {
            posts: allPosts,
        },
    };
};
export default PostsPage;
