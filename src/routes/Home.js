import React from "react";
import axios from "axios";
import './Home.css';
import Movie from "../components/Movie";


class Home extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };
    
    getMovies = async () => {
        const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        
        //console.log(movies);
        this.setState({movies:movies, isLoading:false});
        // 하나는 state의 movies고 뒤는 axios의 movies임!
        // 풀버전은 this.setState({movies:movies});
        // 줄여쓰면 this.setState({movies});
    };

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;

        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movieArea">
                        {movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image}
                            genres = {movie.genres}
                        />
                      ))}
                    </div>                    
                    )}
            </section>
        );
    }
}

export default Home;
