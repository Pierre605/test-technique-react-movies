import React from 'react';
import './Gauge.css'


export default class Gauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            newID: [],
            likes: this.props.likes,
            dislikes: this.props.dislikes,
        }
    }

    componentDidMount() {
        this.setGauge()
    }


    setGauge = () => {
        let total = this.state.likes + this.state.dislikes
        let part_likes = this.state.likes/total
        let part_dislikes = this.state.dislikes/total
        console.log("total: ", total)

        const jauge_length = 300
        let likes_part = part_likes * jauge_length
        let dislikes_part = part_dislikes * jauge_length

        let movie = document.getElementById(this.state.id);
        console.log(likes_part)
        console.log(dislikes_part)
        console.log(movie)
        movie.firstChild.setAttribute("style", `width: ${likes_part}px`)
        movie.lastChild.setAttribute("style", `width: ${dislikes_part}px`)
}

    

    render() {

    return (
        <>
        <div className="contain" id={this.state.id}>
            <div className="jauge-likes"></div>
            <div className="jauge-dislikes"></div>
        </div>
        </>
    )
}
}