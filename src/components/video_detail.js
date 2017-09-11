import React from 'react';

const VideoDetail = ({video})=>{
	if(!video){
		return(
			<div>Loading.....</div >
		)
	}
	const VideoId= video.id.videoId;
	const url=`https://youtube.com/embed/${VideoId}`;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} title="Video title"></iframe>
			</div>
			<div className="details">
				<div className="alert alert-success">{video.snippet.title}</div>
				<div><h3>Description</h3></div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail;