export type blogItem = {
    slug: string;
    imegeURI: string;
    imageAlt?: string;
    title: string;
    startDate: string;
    description: string;
    content?: string;
    isFeatured?: boolean;
};

export type contact = {
    email: string;
    name: string;
    message: string;
};
