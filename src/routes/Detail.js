import { useParams} from "react-router-dom";
import { useEffect,useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie,setMovie] = useState([])
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie)
    console.log(json)
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
        <h1>Detail</h1>
        <img src={movie.medium_cover_image}></img>
        <h2>제목 : {movie.title}</h2>
        <p>상영시간 :{movie.runtime}분</p>
        <p>평점 : {movie.rating}</p>
    </div>
  )
}

export default Detail;
