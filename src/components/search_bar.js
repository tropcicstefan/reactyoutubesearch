import React, { Component } from 'react';


class SearchBar extends Component { //from react defined with import
	constructor(props){
		super(props);

		this.state = { term: ''};
	}

	render(){
		return (
			<div className='search-bar'>
				<input 
				value={this.state.term} //controlled component
				onChange={event => this.onInputChange(event.target.value)} /> 
			</div> //{event => this.props.onSearchTermChange(event.target.value)}
		);
	}
	
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
} 



export default SearchBar;