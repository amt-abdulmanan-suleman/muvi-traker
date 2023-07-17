import { summarizeText } from "@/constants"
import Image from "next/image"

const MovieCard = ({movie}) => {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const overview = summarizeText(movie.overview,25);
  return (
    <div className="card overflow-hidden">
        <div className="poster relative overflow-hidden">
          <Image
              className="img"
              src={imagePath + movie.poster_path}
              width={270}
              height={400}
              alt={movie.title}
          />
        </div>
        <div className="details">
          <h1 className="mb-2">{movie.title}</h1>
          <h3>Directed by Charles Mccarthy</h3>
          <p className="my-2">Popularity: {movie.popularity}</p>
          <div className="tags mt-2">
            <span>Sci-Fi</span>
            <span>Action</span>
          </div>
          <div className="mb-5"></div>
          <div className="info">
            <p>{overview}</p>
          </div>
        </div>
    </div>
    
  )
}

export default MovieCard