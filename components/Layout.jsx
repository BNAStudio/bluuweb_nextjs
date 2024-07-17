import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const defaultTitle = "Next.js | sitio web";
const defaultDescription = "Descripcion del sitio web";
const defaultName = "Default name";

export default function Layout({ 
    children, 
    title = defaultTitle, 
    description = defaultDescription, 
    home = defaultName, 
    name = defaultName }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/img/1.jpg"
                            className={utilsStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        ></Image>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <div>
                                <Image
                                    priority
                                    src="/img/1.jpg"
                                    className={utilsStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                ></Image>
                            </div>
                        </Link>
                        <h2 className={utilsStyles.headingLg}>
                            <Link href="/">
                                <div className={utilsStyles.colorInherit}>
                                    {name}
                                </div>
                            </Link>
                        </h2>
                    </>
                )}
                <nav>
                    <Link href="/">
                        <p>Inicio | </p>
                    </Link>
                    <Link href="/blog">
                        <p>Blog | </p>
                    </Link>
                    <Link href="/contact">
                        <p>Contacto</p>
                    </Link>
                    <Link href="/about">
                        <p>About</p>
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={utilsStyles.backToHome}>
                    <Link href="/">
                        <p>← Back to home</p>
                    </Link>
                </div>
            )}
        </div>
    );
}
