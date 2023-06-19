import {useParams, Link} from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch';

const BlogDetails = () => {
    const params = useParams();

    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error</p>;
    return (
        <>
        <h1>BlogDetails</h1>
        <h2>{data.id}  - {data.title}</h2>
        <p>{data.body}</p>
        <Link to="/jugadores">Volver</Link>
        </>
    );
};

export default BlogDetails;