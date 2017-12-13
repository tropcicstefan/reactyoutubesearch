import React from 'react';

const VideoDetail = ({video})=>{
	if(!video){
		return <div>Loading...</div>;
	}//app jednostavno hoce renderat a nije loadao api i onda proslijedi undefined dok se ceka pise loading

	const videoId = video.id.videoId;
	const url=`https://www.youtube.com/embed/${videoId}`;//string interpolation es6

	return(
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);


};

export default VideoDetail;