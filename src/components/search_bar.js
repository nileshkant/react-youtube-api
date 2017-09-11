import React , {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state={ term: '' };
	}

	render() {
		const urlLogo= 'http://diylogodesigns.com/blog/wp-content/uploads/2016/05/youtube-high-resolution-logo-download.png'
		return (
			<div className="search-bar" >
			<div><img src={urlLogo} alt="boohoo" className="img-responsive col-md-3"/></div>
			<div>
			<input onChange={event => this.onInputChange(event.target.value) }/>
			</div>
			</div>
			);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
}

export default SearchBar;