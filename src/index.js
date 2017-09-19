import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY= 'Put your API KEY here';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			SelectedVideo: null
		};
		this.videoSearch('Comedy King');
}	

videoSearch(term){
	YTSearch({ key: API_KEY, term: term}, (videos) => {
	this.setState({
		videos: videos,
		SelectedVideo: videos[0]
	}); 
});
}

render() {
	const videoSearch= _.debounce((term)=>{this.videoSearch(term)}, 400);
	return(
	<div>
	<SearchBar onSearchTermChange={videoSearch}/> 
	<VideoDetail video={this.state.SelectedVideo}/>
	<VideoList 
	onVideoSelect={SelectedVideo => this.setState({SelectedVideo}) }
	videos={this.state.videos} />
	</div>
	);
}
}

ReactDOM.render(<App />, document.getElementById("root"));
