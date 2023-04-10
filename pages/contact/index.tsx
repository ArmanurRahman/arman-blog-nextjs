import React, { Fragment, useContext, useRef } from "react";
import classes from "../../styles/contact.module.css";
import Header from "@/components/header/header";
import NotificationContext from "@/store/notification-context";

const ContactPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const notificationCtx = useContext(NotificationContext);

    const postHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const message = messageRef.current?.value;

        notificationCtx.showNotification({
            title: "Posting",
            status: "pending",
            message: "posting Comment",
        });
        if (
            String(email?.trim) === "" ||
            String(name?.trim) === "" ||
            String(message?.trim) === ""
        ) {
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ email: email, name, message }),
            });
            const data = await response.json();
            if (response.ok) {
                notificationCtx.showNotification({
                    title: "Posted",
                    status: "success",
                    message: "posted successfully",
                });
            } else {
                throw new Error(data.message || "Something went wrong");
            }

            console.log({ response, data });
        } catch (error) {
            notificationCtx.showNotification({
                title: "Fail",
                status: "error",
                message: "posted failed",
            });
        }
    };
    return (
        <Fragment>
            <Header />

            <form className={classes.contact_form} onSubmit={postHandler}>
                <div className={classes.contact_inputs}>
                    <input
                        type='email'
                        className={classes.contact_input}
                        placeholder='Email'
                        ref={emailRef}
                    />
                    <input
                        type='text'
                        className={classes.contact_input}
                        placeholder='Name'
                        ref={nameRef}
                    />
                </div>
                <div className={classes.contact_message}>
                    <textarea
                        placeholder='Message'
                        className={classes.contact_input__message}
                        rows={5}
                        ref={messageRef}
                    ></textarea>
                </div>
                <button className={classes.contact_button}>POST</button>
            </form>
        </Fragment>
    );
};

export default ContactPage;
