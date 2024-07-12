import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function primerPost() {
    return (
        <Layout title="Primer post">
            <h1>Primer post</h1>
            <Image
                src="/img/1.jpg"
                width={600}
                height={600}
                alt="Imagen"
            ></Image>
            <Link href="/">Volver a inicio</Link>
        </Layout>
    );
}
