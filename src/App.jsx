import React from 'react';
import './App.css';
import MovieCards from './Gallery';
import Grid from '@material-ui/core/Grid';
import movies from './movies';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      selected_cats: [],
      moviesByCat: movies,
    }
  }


  setFilter = (cats) => {
    let movies = this.state.movies
    let L = []
    if (cats.length > 0) {
      this.setState({selected_cats: cats})
      for (let i=0; i < movies.length; i++) {
        if (cats.includes(movies[i].category)) {
          L.push(movies[i])
        }
      this.setState({moviesByCat: L})
      }
  }
  }

  resetFilter = () => {
    let movies = this.state.movies
    this.setState({moviesByCat: movies})
  }


  render() {

      return (
        <div className="App">
            <Filter movies={this.state.movies} filter={this.setFilter} resetfilter={this.resetFilter}/>
            <Grid container spacing={3} marginTop="2em" display="flex" wrap="wrap">
        {this.state.moviesByCat.map((mov, i) => {
          return (
            <div className="div-contain" id={mov.title}>
            <MovieCards movie={mov}/>
            </div>
        )
      })}
          </Grid>
        </div>
      ); 
}
}

export default App;
