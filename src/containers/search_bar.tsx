import * as React from 'react';
import {Component} from 'react';


interface SearchBarProps {};
interface SearchBarState {term:string};

export default class SearchBar extends Component<SearchBarProps,SearchBarState> {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
    }

render(){
    return(
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input
                placeholder="Get a five-day forecast in your favourite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
            />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>    
    );
}

}