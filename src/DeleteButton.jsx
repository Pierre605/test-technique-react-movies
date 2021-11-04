import React from 'react';

export default class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
          }
    }
    
    handleDelete = (id) => {
        console.log("id: ", id)
        const movies = document.getElementsByClassName("div-contain");
        console.log(movies)
        let index = id - 1
        movies[index].setAttribute('style', 'display: none' )
    }

    render() {

    return (
        <button onClick={() => this.handleDelete(this.state.id)}>X</button>
    )
    }
}