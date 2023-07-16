import MoviesContainer from "@/components/MoviesContainer";
import {POPULAR_MOVIE_DATA, TOP_RATED_DATA} from "@/constants/constants"
export default async function Home() {

  return (
    <div className="flex justify-around">
      <MoviesContainer results = {POPULAR_MOVIE_DATA}/>
      <MoviesContainer results= {TOP_RATED_DATA}/>
    </div>
  )
}
