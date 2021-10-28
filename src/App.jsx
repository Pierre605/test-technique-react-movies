import React from 'react';
import './App.css';
import MovieCards from './Gallery';
import Grid from '@material-ui/core/Grid';
import movies from './movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    }
  }

  render() {

  return (
    <div className="App">
        <Grid container spacing={3} marginTop="2em" display="flex" justifyContent="space-evenly">
    {this.state.movies.map((mov, i) => {
      return (
        <MovieCards id={mov.id} title={mov.title} category={mov.category} likes={mov.likes} dislikes={mov.dislikes}/>
    )
  })}
      </Grid>
    </div>
  );
}
}

export default App;
