import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const JugadoresPagina = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error</p>;

  const handleChange = (e) => {
    let filter = e.target.value;

    setSearchParams({ filter: filter });
    console.log("change");
  };

  return (
    <>
      <h1>Jugadores Pagina</h1>
      <input
        type="text"
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default JugadoresPagina;
