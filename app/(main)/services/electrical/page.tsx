import ContactUs from "@app/(main)/_component/Home/contactUs/ContactUs";
import ImgCarousel from "@app/(main)/_component/Home/imgCarousel/ImgCarousel";
import { MotionDiv } from "@components/motion/MotionDiv";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { ReactNode } from "react";
import { LuDot } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";

const AnimUp = ({ children }: { children: ReactNode }) => {
	return (
		<MotionDiv
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 1.3 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
		>
			{children}
		</MotionDiv>
	);
};
const page = () => {
	const itemData1 = [
		{ title: "AUTOMATION DESIGN AND INSTALLATION", path: "/asset/img/home/carousel1/carousel_1.png" },
		{ title: "SOLAR SYSTEM", path: "/asset/img/home/carousel1/carousel_2.jpg" },
		{ title: "HVAC DESIGN AND INSTALLATION", path: "/asset/img/home/carousel1/carousel_3.jpg" },
		{ title: "ELV DESIGN AND INSTALLATION", path: "/asset/img/home/carousel1/carousel_4.jpg" },
		{ title: "ELECTRICAL SERVICE", path: "/asset/img/home/carousel1/carousel_5.png" },
		{ title: "ELECTRICAL DESIGN AND INSTALLATION", path: "/asset/img/home/carousel1/carousel_6.jpg" },
	];

	return (
		<>
			<Box display="flex" alignItems="center">
				<Box display="flex" className="border-b-2 md:ms-16 my-2">
					<MdChevronRight size="2rem" className="me-2" color="gray" />
					<Typography variant="overline" className="text-gray-300 me-2 text-lg">
						HOME PAGE
					</Typography>
					<MdChevronRight size="2rem" className="me-2" color="gray" />
					<Typography variant="overline" className="text-gray-300 me-2 text-lg">
						SERVICE
					</Typography>
					<MdChevronRight size="2rem" className="me-2" color="black" />
					<Typography variant="overline" className="text-black me-2 text-lg">
						ELECTRICAL SERVICES{" "}
					</Typography>
				</Box>
			</Box>
			<Box
				display="flex"
				alignItems="flex-end"
				sx={{
					height: { xs: "400px", sm: "700px" },
					backgroundImage: `url(${"/asset/img/service/electrical/hero.png"})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: { xs: "100% 100%", sm: "100% auto" },
				}}
			>
				<AnimUp>
					<Typography variant="h4" className="font-bold text-white md:ms-16">
						ELECTRICAL SERVICES{" "}
					</Typography>
				</AnimUp>
			</Box>
			<Container className="my-4">
				<AnimUp>
					<Box
						className="mt-10 p-8"
						sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: "cover" }}
					>
						<Typography variant="h5" className="font-bold trilong italic mb-4">
							Electrical Study Report
						</Typography>
						<Grid container spacing={5}>
							<Grid md={6}>
								<Box className="flex items-start justify-start mb-2">
									<Image
										className="me-2 my-[2px]"
										src="/asset/svg/icon.svg"
										alt="alt"
										width={15}
										height={15}
									/>
									<Typography className="text-sm font-bold">
										The purpose of this program are:
									</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Load flow study</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Stability and dynamic study</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Short circuit study</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Arc flash hazard analysis</Typography>
								</Box>
							</Grid>
							<Grid md={6}>
								<Box className="flex justify-start mb-2">
									<Image
										className="me-2"
										src="/asset/svg/icon.svg"
										alt="alt"
										width={15}
										height={15}
									/>
									<Typography className="text-sm font-bold">
										Worked and Reported by MTELEC
									</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Electrical Data Collection</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">
										Upload Data on Easypower Sofware
									</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Arc Flash Study and Report</Typography>
								</Box>
								<Box className="flex items-center justify-start mb-2 ps-6">
									<LuDot />
									<Typography className="text-sm">Labelling onsite</Typography>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</AnimUp>
				<AnimUp>
					<Box className="mt-10 p-8">
						<Grid container>
							<Grid md={6}>
								<Image
									className="me-2"
									src="/asset/img/service/electrical/img_1.png"
									alt="alt"
									width={700}
									height={700}
								/>
							</Grid>
							<Grid md={6}>
								<Box className="flex items-center justify-center mb-4">
									<Card className="shadow-lg" sx={{ width: 190, height: 150 }}>
										<CardContent className="p-2">
											<Image
												className=""
												src="/asset/img/service/electrical/img_2.png"
												alt="alt"
												width={170}
												height={170}
											/>
										</CardContent>
									</Card>
									<Card className="shadow-lg mx-auto" sx={{ width: 190, height: 150 }}>
										<CardContent className="p-2">
											<Image
												className=""
												src="/asset/img/service/electrical/img_3.png"
												alt="alt"
												width={170}
												height={170}
											/>
										</CardContent>
									</Card>
								</Box>
								<Box className="flex items-center justify-center">
									<Card className="shadow-lg" sx={{ width: 300, height: 250 }}>
										<CardContent className="p-2">
											<Image
												className=""
												src="/asset/img/service/electrical/img_4.png"
												alt="alt"
												width={300}
												height={200}
											/>
										</CardContent>
									</Card>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</AnimUp>
				<AnimUp>
					<Box
						className="mt-10 p-8"
						sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: "cover" }}
					>
						<Typography variant="h5" className="font-bold trilong italic mb-4">
							Thermal Camera
						</Typography>
						<Box className="flex items-start justify-start mb-2">
							<Image
								className="me-2 my-[2px]"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Equipments :</Typography>
							<Typography className="text-sm">
								&nbsp;Contactor, CBs , Connection , Relays.
							</Typography>
						</Box>
						<Box className="flex items-start justify-start mb-2">
							<Image
								className="me-2 my-[2px]"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Measuring Device :</Typography>
							<Typography className="text-sm">
								&nbsp;Fluke TiS75+ Infrared Thermal Imaging Camera (Origin: USA)
							</Typography>
						</Box>
						<Box className="flex items-start justify-start mb-2">
							<Image
								className="me-2 my-[2px]"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Calibrated :</Typography>
							<Typography className="text-sm">&nbsp;Techmaster Electronics J.S.C</Typography>
						</Box>
						<Box className="flex items-start justify-start mb-2">
							<Image
								className="me-2 my-[2px]"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Inspector :</Typography>
							<Typography className="text-sm">&nbsp;MTELEC Team</Typography>
						</Box>
					</Box>
				</AnimUp>
				<AnimUp>
					<Box className="mt-10 p-8">
						<Grid container>
							<Grid md={5}>
								<Box
									display="flex"
									alignItems="center"
									justifyContent="center"
									sx={{ height: "100%" }}
								>
									<Image
										className="me-2"
										src="/asset/img/service/electrical/img_5.png"
										alt="alt"
										width={340}
										height={340}
									/>
								</Box>
							</Grid>
							<Grid md={7}>
								<Box
									display="flex"
									alignItems="center"
									justifyContent="center"
									sx={{ height: "100%" }}
								>
									<Image
										className="me-2"
										src="/asset/img/service/electrical/img_7.png"
										alt="alt"
										width={900}
										height={900}
									/>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</AnimUp>
				<AnimUp>
					<Box
						className="mt-10 p-8"
						sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: "cover" }}
					>
						<Typography variant="h5" className="font-bold trilong italic mb-4">
							Electrical Supervisor and Consultancy for Local and Oversea
						</Typography>
					</Box>
					<Box>
						<Image
							className="me-2 w-full h-full"
							src="/asset/img/service/electrical/img_6.png"
							alt="alt"
							quality={100}
							width={1920}
							height={1800}
						/>
					</Box>
					<Box
						className="mt-10 p-8"
						sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: "cover" }}
					>
						<Typography variant="h5" className="font-bold trilong italic mb-4">
							M&E Maintenaince Service
						</Typography>
						<Box className="flex justify-start mb-2">
							<Image
								className="me-2"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Electrical Panels</Typography>
						</Box>
						<Box className="flex justify-start mb-2">
							<Image
								className="me-2"
								src="/asset/svg/icon.svg"
								alt="alt"
								width={15}
								height={15}
							/>
							<Typography className="text-sm font-bold">Fire Alarm System</Typography>
						</Box>
					</Box>
				</AnimUp>
				{/* PROJECTS */}
				<AnimUp>
					<Box className="my-20">
						<Container>
							<Typography className="trilong italic font-bold mb-2" variant="h3">
								Other Services
							</Typography>
							<ImgCarousel mode={itemData1} />
							<Button
								className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2"
								fullWidth
								variant="text"
							>
								All Services
							</Button>
						</Container>
					</Box>
				</AnimUp>
				<AnimUp>
					<ContactUs />
				</AnimUp>
			</Container>
		</>
	);
};

export default page;
