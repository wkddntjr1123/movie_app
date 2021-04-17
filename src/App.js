import React from "react"
import axios from "axios"
import Movies from "./Movies"

class App extends React.Component {
 
  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies , isLoading : false})
  }
  componentDidMount(){
    this.getMovies()
  }
  render(){
    let {isLoading, movies} = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <h3 className="loader_text">Loading...</h3>
           </div>
        ) : (
          <div className="movies">
          {movies.map((movie,index) => {
            return (
                    <Movies 
                      key={index } 
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}/>
            )
          })}
          </div>
        )
        }
      </section>
    )
  }
}
export default App;
