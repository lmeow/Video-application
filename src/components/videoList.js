import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
	const listOfVideos = videos.map((video, id) => (
		<VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
	));
	return (
		<Grid container spacing={10}>
			{listOfVideos}
		</Grid>
	);
};

export default VideoList;
