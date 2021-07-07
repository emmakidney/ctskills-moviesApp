import React from "react";  // useState/useEffect redundant 
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import { useQuery } from "react-query";
import Spinner from '../spinner';


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const TemplateMoviePage = ({ movie, children }) => {
    const classes = useStyles();
    const { data , error, isLoading, isError } = useQuery(
      ["images", { id: movie.id }],
      getMovieImages
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const images = data.posters 
    
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList selectFavorite={selectFavorite} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;