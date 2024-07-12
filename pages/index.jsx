import Layout from "../components/Layout";
import utilsStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout title="Home" description="Descripcion del home" home>
            <section className={utilsStyles.headingMd}>
                <p>[Your Self introduction]</p>
                <p>(This is a sample website - You&apos;ll be building a site like this on {" "})
                  <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                </p>
            </section>
        </Layout>
    );
}
