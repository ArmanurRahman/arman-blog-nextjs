import { blogItem } from "@/type/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
};

export const getPostData = (fileName: string): blogItem => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);
    const slug = fileName.replace(/\.md$/, "");

    const postData = {
        slug,
        imegeURI: data.imegeURI,
        title: data.title,
        startDate: data.startDate,
        description: data.description,
        isFeatured: data?.isFeatured,
        content,
    };
    return postData;
};

export const getAllPost = () => {
    const postFiles = fs.readdirSync(postsDirectory);
    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.startDate > postB.startDate ? -1 : 1
    );
    console.log(sortedPosts);
    return sortedPosts;
};

export const getFeaturedPost = () => {
    const allPosts = getAllPost();
    const featuredPost = allPosts.filter((post) => post.isFeatured);
    return featuredPost;
};
