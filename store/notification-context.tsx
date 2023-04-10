import { NotificationContextType, NotificationDataType } from "@/type/post";
import { createContext, useState } from "react";

const NotificationContext = createContext<NotificationContextType>({
    notification: null,
    showNotification: () => {},
    hideNotification: () => {},
});

export const NotificationContextProvider = (props: any) => {
    const [activeNotification, setActiveNotification] =
        useState<NotificationDataType | null>(null);

    const showNotificationHandler = (
        notificationData: NotificationDataType
    ) => {
        setActiveNotification(notificationData);
    };
    const hideNotificationHandler = () => {
        setActiveNotification(null);
    };
    const context: NotificationContextType = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };
    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;
