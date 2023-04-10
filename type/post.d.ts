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
type notificationStatus = "success" | "error" | "pending";
interface NotificationDataType {
    message: string;
    title: string;
    status: notificationStatus;
}

interface NotificationContextType {
    notification: NotificationDataType | null;
    showNotification: (a: any) => void;
    hideNotification: () => void;
}
