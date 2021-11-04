import React from 'react';
import './Filter.css'


export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            expanded: false,
            categories: [],
            selected_cats: [],
        }
    }

    componentDidMount() {
        this.getCategories()
    }


    getCategories = () => {
        let movies = this.state.movies
        console.log("movies: ", movies)
        let L = []
        for (let i=0; i < movies.length; i++) {
            if (L.includes(movies[i].category) !== true) {
            L.push(movies[i].category)
        }
    }
        this.setState({categories: L})
    }

    showCheckboxes = () => {
        let expanded = this.state.expanded
        var checkboxes = document.getElementById("checkboxes");
        console.log(checkboxes)
        console.log(expanded)
        if (!expanded) {
            checkboxes.style.display = "block";
            this.setState({expanded: true});
        } else {
            checkboxes.style.display = "none";
            this.setState({expanded: false});
        }
        }
    

    handleFilter = (event) => {
        this.props.filter(this.state.selected_cats)
    }

    handleResetFilter = (event) => {
        this.props.resetfilter()
    }

    getSelectedCategories = (event) => {
        let check = document.getElementById(event.target.value)
        if (check.checked === true) {
                this.AddCat(event.target.value)
            }

            else {
                this.RemoveCat(event.target.value)
            }
    }

    AddCat = (data) => {
        let cats = this.state.selected_cats
        cats.push(data)
        this.setState({selected_cats: cats})
    }

    RemoveCat = (data) => {
        let cats = this.state.selected_cats
        if (cats.includes(data)) {
            let filter = cats.filter(cat => cat !== data)
            this.setState({selected_cats: filter})
        }
    }



    render() {

    return (
        <>
            <form>
                <div className="multiselect">
                    <div className="selectBox" onClick={() => this.showCheckboxes()}>
                    <select>
                        <option>Filtrer par catégorie</option>
                    </select>
                    <div className="overSelect"></div>
                    </div>
                    <div id="checkboxes">
                    {this.state.categories.map((cat) => {
                        return (
                        <label for=""><input type="checkbox" id={cat} value={cat} onChange={this.getSelectedCategories}/>{cat}</label>
                    )})}
                    <button type="button" onClick={() => this.handleFilter()}>Filtrer</button>
                    <button type="button" onClick={() => this.handleResetFilter()}>Annuler filtres</button>
                    </div>
                </div>
            </form>
        </>
    )
}
}