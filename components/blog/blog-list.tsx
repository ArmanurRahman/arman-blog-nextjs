import BlogItem from "./blog-item";

const dummyData = [
    {
        slug: "nextjs-details-course",
        imegeURI: "/image/blog/nextjs.png",
        imageAlt: "nextjs course photo",
        title: "Getting started with next js",
        startDate: "2023-06-01",
        description:
            "Nextjs is a fullstact react framework ready for production level application. nextjs ships with file base routing, server side rendering capabolity",
    },
    {
        slug: "nextjs-details-course",
        imegeURI: "/image/blog/nextjs.png",
        imageAlt: "nextjs course photo",
        title: "Getting started with next js",
        startDate: "2023-06-01",
        description:
            "Nextjs is a fullstact react framework ready for production level application. nextjs ships with file base routing, server side rendering capabolity",
    },
];
const BlogList = () => {
    return <BlogItem items={dummyData} />;
};

export default BlogList;
