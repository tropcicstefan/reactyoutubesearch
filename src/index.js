import _ from 'lodash';//throtlle search
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAr5vJR8ndOa_klF3H0npuxSYgC9jhXdTg';

//create new component, this component should produce some HTML
//this is class

class App extends Component {//this is a class not an instance of a class
	constructor(props){
		super(props);

		this.state= { 
			videos: [],
			selectedVideo:null
		};

		this.videoSearch('surfboard')
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			}); //videos: videos == videos ES6
		});
	}

	render(){
		const videoSearch= _.debounce((term) => {this.videoSearch(term)}, 300);//every 300ms

		return ( 
			<div> 
				<SearchBar 
					onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>  			//this is also jsx
		);	
	}
};


//take this component's generated HTML and put it on the page(in the dom)

//this is instance <App />
ReactDOM.render(<App />, document.querySelector('.container'));//<app />passed instance of class
