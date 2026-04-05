import {
	CalendarMonthOutlined,
	LocationCityOutlined,
	LocationOn,
} from "@mui/icons-material";
import { Box, Typography, Slide, Fade, Button } from "@mui/material";

export default function LandingSection({ image, eventData, recapData }) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100vw",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundImage: `${image}`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				position: "relative",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background:
						"linear-gradient(to bottom, rgb(0, 0, 0, 0.50), rgba(0,0,0,0.90))",
					zIndex: 1,
				},
			}}
		>
			<Fade
				in={true}
				mountOnEnter
				unmountOnExit
				timeout={{ enter: 900, exit: 300 }}
				className="hidden md:block"
			>
				<Box
					sx={{
						display: "flex",
						width: "55vw",
						color: "white",
						height: "45vh",
						p: "2em",
						justifyContent: "center",
						alignItems: "center",
						backgroundImage: "url(/images/bsidesLogo.png)",
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						position: "absolute",
						top: eventData
							? { xs: "3vh", sm: "5vh", md: "10vh" }
							: "45%",
						left: "50%",
						transform: eventData
							? "translateX(-50%)"
							: "translate(-50%, -50%)",
						zIndex: 1,
					}}
				/>
			</Fade>
			{eventData && (
				<Fade
					in={true}
					timeout={{ enter: 800 }}
					style={{ transitionDelay: 500 }}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "100vw",
							justifyContent: "center",
							alignContent: "start",
							alignItems: "start",
							position: "absolute",
							bottom: "4vh",
							zIndex: 2,
							px: "2em",
						}}
					>
						<Typography
							variant="h3"
							fontWeight={"light"}
							textAlign={"center"}
							sx={{ color: "#fff", zIndex: 2, fontSize: "1.5em" }}
						>
							{eventData.main}
						</Typography>
						<Box sx={{ height: "1em" }} />
						<Typography
							variant="h4"
							fontWeight={"bold"}
							textAlign={"start"}
							sx={{
								color: "#fff",
								zIndex: 2,
								fontSize: "2.5em",
								my: "0.1em",
								maxWidth: {
									xs: "100vw",
									md: "80vw",
									xl: "60vw",
								},
							}}
						>
							{eventData.secondary.title}
						</Typography>{" "}
						{eventData.secondary.description && (
							<Box
								sx={{
									display: { xs: "none", sm: "block" },
									py: "1em",
								}}
							>
								<Typography
									variant="h4"
									fontWeight={"light"}
									textAlign={"start"}
									sx={{
										color: "white",
										zIndex: 2,
										fontSize: "1.1em",
										maxWidth: {
											xs: "100vw",
											md: "80vw",
											xl: "60vw",
										},
										minHeight: "5em",
									}}
								>
									{eventData.secondary.description}
								</Typography>
							</Box>
						)}
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								width: "90vw",
								mt: "1em",
								flexWrap: "wrap",
							}}
						>
							<Typography
								variant="body1"
								fontWeight={"normal"}
								textAlign={"center"}
								sx={{
									color: "#fff",
									zIndex: 2,
									fontSize: "1.2em",
									my: "0.5em",
								}}
							>
								<CalendarMonthOutlined />{" "}
								{eventData.secondary.date}
							</Typography>{" "}
							<Box
								sx={{
									height: "3em",
									bgcolor: "gray",
									width: "0.5em",
									mx: "1em",
								}}
							/>
							<Typography
								variant="body1"
								fontWeight={"normal"}
								textAlign={"center"}
								sx={{
									color: "#fff",
									zIndex: 2,
									fontSize: "1.2em",
									my: "0.5em",
								}}
							>
								<LocationOn />{" "}
								{eventData.secondary.location.trim()
									? eventData.secondary.location
									: "To Be Communicated"}
							</Typography>
							<Box
								sx={{
									height: "3em",
									bgcolor: "gray",
									width: "0.5em",
									mx: "1em",
								}}
							/>
							<Button
								href="https://convena.io/events/bsides-nairobi-2025/cfp"
								target="_blank"
								sx={{
									color: "white",
									bgcolor: "#cc2320",
									":hover": { bgcolor: "#7f1515" },
									my: "0.5em",
								}}
							>
								Speak At the Conference
							</Button>
						</Box>
						<Typography
							variant="h4"
							fontWeight={"light"}
							textAlign={"center"}
							sx={{
								color: "#a3a3a3",
								zIndex: 2,
								fontSize: "2em",
							}}
						>
							{eventData.tertiary}
						</Typography>
					</Box>
				</Fade>
			)}

			{recapData && (
				<Fade
					in={true}
					timeout={{ enter: 800 }}
					style={{ transitionDelay: 500 }}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "100vw",
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							position: "absolute",
							bottom: { xs: "15vh", sm: "5vh", md: "3vh" },
							zIndex: 2,
						}}
					>
						<img
							src={recapData.img}
							width={650}
							height={500}
							alt="Recap Image"
						/>
					</Box>
				</Fade>
			)}
		</Box>
	);
}
