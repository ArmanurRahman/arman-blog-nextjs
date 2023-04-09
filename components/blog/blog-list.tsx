import BlogItem from "./blog-item";
import { blogItem } from "@/type/post";

const BlogList = (props: { posts: Array<blogItem> }) => {
    return <BlogItem items={props.posts} />;
};

export default BlogList;
