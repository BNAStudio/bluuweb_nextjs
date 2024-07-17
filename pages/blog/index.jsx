import Layout from "../../components/Layout";
import Link from "next/link";

export default function index({ data }) {
    return (
        <Layout>
            <h1>Lista de Blogs</h1>
            {data.map(({ id, title, body }) => (
                <article key={id}>
                    <h3>
                        {title}
                        <Link href={`/blog/${id}`}>
                            <p>
                                {id} - {title}
                            </p>
                        </Link>
                    </h3>
                    <p>{body}</p>
                </article>
            ))}
        </Layout>
    );
}

/*
    getStaticProps solo se ejecuta en el server
    Para que se pueda usar la info obtenida en getStaticProps es necesario retorna un objeto con atributo props, el cual contendra
    la informacion obtenida del endpoing 

    al ejecutarse desde el servidor, getStaticProps obtiene el HTML estatico, al momento de realizar el build.
    1. ejecucion en servidor
    2. generacion del HMTL estatico
    3. nextjs obtiene los datos que retornan en props y los pasa automaticamente al componente de pagina.
    el componente index recibe una props data
*/
export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return { props: { data } };
    } catch (error) {
        console.log(error);
    }
}
