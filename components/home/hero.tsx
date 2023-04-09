import Image from "next/image";
import classes from "./hero.module.css";
import Header from "../header/header";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <Header />
            <div className={classes.hero_image__container}>
                <Image
                    src='/image/site/mubeen.jpeg'
                    alt='photo of author'
                    width={300}
                    height={300}
                    className={classes.hero_image}
                />
            </div>
            <div className={classes.intro}>
                <h2>Hi, I am Arman</h2>
                <p>
                    I blog about web development microservices, database, devops
                    and data science
                </p>
            </div>
        </section>
    );
};

export default Hero;
