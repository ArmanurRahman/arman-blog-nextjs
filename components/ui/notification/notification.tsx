import { useContext, useEffect } from "react";
import classes from "./notification.module.css";
import { NotificationDataType } from "@/type/post";
import NotificationContext from "@/store/notification-context";

const Notification = (props: NotificationDataType) => {
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => {
                notificationCtx.hideNotification();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status, notificationCtx]);

    const statusClasses =
        status === "success"
            ? classes.success
            : status === "error"
            ? classes.error
            : classes.pending;
    const activeClasses = `${classes.notification} ${statusClasses}`;
    return (
        <div
            onClick={notificationCtx.hideNotification}
            className={activeClasses}
        >
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
