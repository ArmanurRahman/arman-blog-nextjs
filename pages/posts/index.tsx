import { getAllPost } from "@/lib/post-util";

const PostsPage = () => {
    return <div>Posts Page</div>;
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
