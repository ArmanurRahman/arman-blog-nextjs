import Link from "next/link";
import classes from "./header.module.css";

const Header = () => {
    return (
        <nav className={classes.navigation}>
            <Link href='/' className={classes.home_link}>
                ARMAN&apos;S Blog
            </Link>
            <ul>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
                <li>
                    <Link href='/contact'>Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
