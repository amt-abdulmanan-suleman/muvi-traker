import MovieCard from "./MovieCard"

const MoviesContainer = ({results}) => {
  return (
    <div className="grid gap-16 grid-cols-fluid">
        {
            results.map((movie)=>(
                <MovieCard movie={movie}/>
            ))
        }
    </div>
    
  )
}

export default MoviesContainer