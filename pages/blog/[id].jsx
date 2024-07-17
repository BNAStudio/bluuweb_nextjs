import Layout from "../../components/Layout";

export default function primerPost({ data }) {
    return (
        <Layout title="Primer post">
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
        </Layout>
    );
}

/*
    1. la funcion getStaticProps se ejecuta en el servidor
    2. recupera los datos necesarios para las rutas (es decir el map) que seran pre-renderizadas
    3. retorna un objeto dinamico (paths y fallback)
    4. los paths se utilizaran para generar las paginas estaticas en funcion de los datos recuperados
    5. en caso que la solicitud falle el fallback hara retornar la pagina 404
*/
export async function getStaticPaths() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log(error);
    }
}

/*
    1. se ejecuta POR CADA ruta generada por getStaticPaths
    2. recupera los datos para cada pagina especifica
    3. retorna objeto props el cual contiene los datos que se pasaran al componente de la pagina
*/
export async function getStaticProps({ params }) {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data = await res.json();
        return { props: { data } };
    } catch (error) {
        console.log(error);
    }
}

/*=========== FLUJO ===========*/
/*
1. Generación de rutas dinámicas (getStaticPaths):

    - getStaticPaths hace una solicitud a https://jsonplaceholder.typicode.com/posts.
    - Convierte la respuesta en JSON y crea un array de paths, donde cada path es un objeto con la propiedad params que incluye el id del post.
    - paths se devuelve y Next.js usa esta información para generar las páginas estáticas correspondientes.

2. Recuperación de datos para cada ruta (getStaticProps):

    - getStaticProps se ejecuta para cada ruta especificada en paths.
    - Utiliza el id de los parámetros (params.id) para hacer una solicitud a https://jsonplaceholder.typicode.com/posts/${params.id} y obtener los datos específicos de ese post.
    - Los datos recuperados se devuelven en un objeto con la propiedad props.

3. Inyección de datos en el componente:

    - Next.js pasa automáticamente los datos de props al componente de la página.
    - En el componente primerPost, se accede a estos datos a través de props y se renderizan.
    - Este flujo permite que cada página estática se genere con los datos específicos que necesita, y estos datos se inyectan automáticamente en los componentes de la página durante la construcción del sitio.
*/