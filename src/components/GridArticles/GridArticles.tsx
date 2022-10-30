import React from "react";

import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2";

const GridArticles = () => {
	const news = [
		{
			image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
			title: "Lizard",
			year: "2020",
		},
		{
			image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
			title: "Lizard",
			year: "2001",
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
			<Grid2
				width="84vw"
				maxWidth="1200px"
			>
				<Grid2>
					<Typography variant="h3" component="h1">
						Latests
					</Typography>
				</Grid2>
				<Grid2
					container
					spacing={2}
				>
					{
						news.map(item => {
							return (
								<Grid2 xs={6}>
									<Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
										<CardActionArea>
											<CardMedia
												component="img"
												height="200"
												image={item.image}
												alt={item.title}
												/>
											<CardContent sx={{ px: 0 }}>
                        <Chip
                          label={item.year}
                          sx={{ backgroundColor: "#fdd32d", fontWeight: "bold" }}
                        />
												<Typography variant="h6" component="div" sx={{ mt: 1 }}>
													{ item.title }
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid2>
							)
						})
					}
				</Grid2>

        <Grid2
          container
          mt={2}
          spacing={2}
        >
          {
            news.map(item => {
              return (
                <Grid2 xs={6}>
                  <Card sx={{ boxShadow: 0, backgroundColor: "transparent" }}>
                    <CardActionArea sx={{ display: 'flex', alignItems: "start" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 150, borderRadius: "6px" }}
                        image={item.image}
                        alt={item.title}
                      />
                        <CardContent sx={{ flex: '1 0 auto', py: 0 }}>
                          <Chip
                            label={item.year}
                            sx={{ backgroundColor: "#fdd32d", fontWeight: "bold" }}
                            />
                          <Typography variant="h6" component="div">
                            { item.title }
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
		</Grid2>
	)
}

export default GridArticles;