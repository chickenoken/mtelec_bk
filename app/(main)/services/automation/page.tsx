"use client"
import ContactUs from "@app/(main)/_component/Home/contactUs/ContactUs";
import ImgCarousel from "@app/(main)/_component/Home/imgCarousel/ImgCarousel";
import RenderWorkingField from "@app/(main)/_component/services/renderWorkingField";
import { IProduct } from "@app/(main)/products/page";
import { getPAutomation, getPAutomationWorkingField } from "@app/user/pages/automation/_server/FormAutomationAction";
import { MotionDiv } from "@components/motion/MotionDiv";
import { Box, Button, Container, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { MdChevronRight } from "react-icons/md";
import ImageLinks from "../_component/ImageLinks";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export interface IWorkingField {
	title: string;
	descriptions: { sub: string; column: number }[];
}

interface IAutomation {
	image1: string;
	image2: string;
	name3: string;
	image3: string;
	name4: string;
	image4: string;
	name5: string;
	image5: string;
	name6: string;
	image6: string;
	name7: string;
	image7: string;
	name8: string;
	image8: string;
}

const page = () => {
	const [workingField, setWorkingField] = React.useState<IWorkingField[]>([]);
	const [data, setData] = React.useState<IAutomation>();

  const getData = async () => {
    let rs = await getPAutomationWorkingField();
    setWorkingField(rs);
    rs = await getPAutomation();
		setData(rs);
  }

  useEffect(() => {
    getData();
  }, []);

	const itemData1: IProduct[] = [
		{
			_id: "1",
			company: "",
			title: "AUTOMATION DESIGN AND INSTALLATION",
			path: "/asset/img/home/carousel1/carousel_1.png",
		},
		{ _id: "2", company: "", title: "SOLAR SYSTEM", path: "/asset/img/home/carousel1/carousel_2.jpg" },
		{
			_id: "3",
			company: "",
			title: "HVAC DESIGN AND INSTALLATION",
			path: "/asset/img/home/carousel1/carousel_3.jpg",
		},
		{
			_id: "4",
			company: "",
			title: "ELV DESIGN AND INSTALLATION",
			path: "/asset/img/home/carousel1/carousel_4.jpg",
		},
		{
			_id: "5",
			company: "",
			title: "ELECTRICAL SERVICE",
			path: "/asset/img/home/carousel1/carousel_5.png",
		},
		{
			_id: "6",
			company: "",
			title: "ELECTRICAL DESIGN AND INSTALLATION",
			path: "/asset/img/home/carousel1/carousel_6.jpg",
		},
	];

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
						ELECTRICAL DESIGN AND INSTALLATION{" "}
					</Typography>
				</Box>
			</Box>
			<Box
				display="flex"
				alignItems="flex-end"
				sx={{
					height: { xs: "400px", sm: "700px" },
					backgroundImage: `url(${"/asset/img/service/automation/hero.png"})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: { xs: "100% 100%", sm: "100% auto" },
				}}
			>
				<AnimUp>
					<Typography variant="h4" className="font-bold text-white md:ms-16">
						AUTOMATION DESIGN AND INSTALLATION
					</Typography>
					<Typography variant="h4" className="font-bold text-white md:ms-16">
						FOR PROCESS FACTORY (FEEDMIL, AQUA...)
					</Typography>
				</AnimUp>
			</Box>

			<Container>
				{!!workingField.length && (
					<AnimUp>
						<Box
							className="mt-10 p-8"
							sx={{
								backgroundImage: `url('/asset/img/about/bg_1.png')`,
								backgroundSize: "cover",
							}}
						>
							<Typography variant="h5" className="font-bold trilong italic mb-4">
								Working Fields
							</Typography>
							{/* here */}

							<RenderWorkingField workingField={workingField} />
						</Box>
					</AnimUp>
				)}
				{data && ( <>
					<AnimUp>
						<Box display="flex" justifyContent="center" className="mt-10 p-8">
							<Image
								className="mb-4"
								src={data?.image1 ?? ""}
								alt="alt"
								width={15000}
								height={15000}
							/>
						</Box>
						<Box display="flex" justifyContent="center" className="mt-10 p-8">
							<Image
								className="mb-4"
								src={data?.image2 ?? ""}
								alt="alt"
								width={1000}
								height={1000}
							/>
						</Box>
					</AnimUp>
					<AnimUp>
						<Box className="mt-10">
							<ImageLinks data={data} grid={3} start={3} num={4}/>
						</Box>
					</AnimUp>
					<AnimUp>
						<Box className="my-2">
							<ImageLinks data={data} grid={6} start={7} num={2} />
						</Box>
						<Box>
							<Button
								className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2"
								fullWidth
								variant="text"
							>
								Other Services
							</Button>
						</Box>
					</AnimUp>
				</>)}

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
