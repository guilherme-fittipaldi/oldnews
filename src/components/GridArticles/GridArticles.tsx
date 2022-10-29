import React from "react";

import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2";

const GridArticles = () => {
	const news = [
		{
			image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
			title: "Lizard",
			description: "test",
		},
		{
			image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
			title: "Lizard",
			description: "test",
		}
	]

	return (
		<Grid2
			container
			display="flex"
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<Grid2 width="84vw">
				<Typography variant="h3" component="h1">
					Latests
				</Typography>
			</Grid2>
			<Grid2
				container
				width="84vw"
				spacing={2}
			>
				{
					news.map(item => {
						return (
							<Grid2 xs={6}>
								<Card>
									<CardActionArea>
										<CardMedia
											component="img"
											height="200"
											image={item.image}
											alt={item.title}
											/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{ item.title }
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{ item.description }
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid2>
						)
					})
				}
			</Grid2>
		</Grid2>
	)
}

export default GridArticles;