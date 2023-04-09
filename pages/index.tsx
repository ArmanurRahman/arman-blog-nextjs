import Hero from "@/components/home/hero";
import { getFeaturedPost } from "@/lib/post-util";
import { blogItem } from "@/type/post";

export default function HomePage(props: { posts: Array<blogItem> }) {
    return <Hero posts={props.posts} />;
}
export const getStaticProps = async () => {
    const featuredPost = getFeaturedPost();
    return {
        props: {
            posts: featuredPost,
        },
    };
};
