import React from 'react';

const VideoListItems=({video, onVideoSelect}) => {
	const ImgURL = video.snippet.thumbnails.default.url;
	return (
		<li onClick={()=> onVideoSelect(video)} className= "list-group-item">
			<div className= "list-list media">
			<div className= "media-left">
			<img className= "media-object" src={ImgURL} alt="videos"/>
				
			</div>
			<div className= "media-body">
			<div className= "media-heading">{video.snippet.title}</div>
			</div>
			</div>
		</li>
		)
}

export default VideoListItems;