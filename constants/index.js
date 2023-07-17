export const fetch_data = async(route) => {
    const data = await fetch(`https://api.themoviedb.org/3/${route}?api_key=${process.env.THE_MOVIE_API_KEY}`)
    const {results} = await data.json()
    return results;
}

export function summarizeText(text, summaryLength) {
    const words = text.split(" ");
    let summary = words.slice(0, summaryLength).join(" ");
  
    if (words.length > summaryLength) {
      summary += " ...";
    }
  
    return summary;
  }