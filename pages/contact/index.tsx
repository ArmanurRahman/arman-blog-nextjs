import React, { Fragment, useRef } from "react";
import classes from "../../styles/contact.module.css";
import Header from "@/components/header/header";

const ContactPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const postHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const message = messageRef.current?.value;

        if (
            String(email?.trim) === "" ||
            String(name?.trim) === "" ||
            String(message?.trim) === ""
        ) {
            return;
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ email: email, name, message }),
        });

        const data = await response.json();
        console.log({ data });
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
