const MoviesContainer = ({results}) => {
  return (
    <div>
        {
            results.map((movie)=>(
                <div key={movie.id}>{movie.title}</div>
            ))
        }
    </div>
    
  )
}

export default MoviesContainer