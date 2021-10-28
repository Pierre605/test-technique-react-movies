import React from 'react';
import './Gauge.css'


export default function Gauge(props) {

    let total = props.likes + props.dislikes
    let part_likes = props.likes/total
    let part_dislikes = props.dislikes/total
    console.log("total: ", total)

    const jauge_length = 300
    let likes_part = parseInt(part_likes * jauge_length)
    let dislikes_part = parseInt(part_dislikes * jauge_length)

    let movie = document.getElementById(props.id);
    let dislikes = document.getElementsByClassName("jauge-dislikes");
    console.log(likes_part)
    console.log(dislikes_part)
    movie.firstChild.setAttribute("style", `width: ${likes_part}px`)
    movie.lastChild.setAttribute("style", `width: ${dislikes_part}px`)
    



    return (
        <>
        <div className="contain" id={props.id}>
            <div className="jauge-likes"></div>
            <div className="jauge-dislikes"></div>
        </div>
        </>
    )
}