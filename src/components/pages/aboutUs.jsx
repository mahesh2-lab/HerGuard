import React from "react";
import FloatingNavBar from "../FloatingNavBar";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const data = [
  {
    name: "Ms. Vijaya Tarmale",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/003/337/634/large_2x/profile-placeholder-default-avatar-vector.jpg",
  },
  {
    name: "Ms. Gayatri Bhise",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/003/337/634/large_2x/profile-placeholder-default-avatar-vector.jpg",
  },
  {
    name: "Ms. Shreya Vaishnav",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/003/337/634/large_2x/profile-placeholder-default-avatar-vector.jpg",
  },
  {
    name: "Ms. Mayuri Deshmukh ",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/003/337/634/large_2x/profile-placeholder-default-avatar-vector.jpg",
  },
  {
    name: "Ms. Pallavi Ubarhande",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/003/337/634/large_2x/profile-placeholder-default-avatar-vector.jpg",
  },
  {
    name: "Mr. Ritesh Deokar",
    role: "Not defined",
    image: "https://static.vecteezy.com/system/resources/previews/004/511/281/large_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg",
  },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>HearGuard AboutUs</title>
      </Helmet>
      <FloatingNavBar />
      <div className=" w-4/6 bg-[#fefff9] mx-auto gap-y-10 grid grid-cols-6 mt-40 mb-40">
        <div className=" shadow-md rounded-3xl py-32 px-24 col-span-6 bg-[#f3f8e2] text-center">
          <h1
            className="text-8xl font-black leading-tight text-inherit text-pretty "
            style={{ fontFamily: "Reservation Wide,sans-serif" }}
          >
            Empowering Safety for All
          </h1>
          <p className="text-2xl font-medium leading-8 m-0 text-inherit mt-4">
            HerGuard is dedicated to{" "}
            <b className=" text-[0.85em]">
              creating safer environments by providing real-time insights{" "}
            </b>
          </p>
        </div>
        <div className="col-span-6 shadow-md bg-amber-200 rounded-3xl p-10 h-[500px] flex gap-x-12">
          <img
            src="https://plit.ac.in/wp-content/uploads/2024/05/jsir.jpg"
            className="rounded-3xl w-96 object-cover h-full"
            alt=""
          />
          <div className="flex flex-col gap-4 ">
            <h1
              className="text-5xl text-center font-black leading-tight text-inherit text-pretty "
              style={{ fontFamily: "Reservation Wide,sans-serif" }}
            >
              Our Mentor
            </h1>
            <h3 className="text-left text-2xl font-bold">
              Dr. Pradip M Jawandhiya,
              <p className="text-lg font-medium"> Principal, PLITMS</p>
            </h3>
            <p className="text-xl font-medium leading-8 m-0 text-inherit mt-4">
              Dr. Pradip M Jawandhiya is a distinguished academic leader and
              mentor with extensive qualifications and experience. With a
              Bachelor of Engineering (BE), Master of Engineering (ME), a
              Doctorate (PhD), and a Master of Business Administration (MBA)
              specializing in Human Resource Management (HRM), Dr. Jawandhiya
              has cultivated a deep understanding of both technical and
              managerial aspects of education. As a Principal, he has guided
              numerous students and professionals, fostering innovation,
              leadership, and excellence. His mentorship is instrumental in
              shaping the success of our project, providing valuable insights
              and support.
            </p>
          </div>
        </div>
        <div className="col-span-6" id="team">
          <h1 className="text-center text-6xl font-bold text-gray-800">
            Our Team
          </h1>
        </div>
        <div className="col-span-6 grid grid-cols-6 gap-10">
          {data.map((item, index) => (
            <Card className="col-span-2 " key={index}>
              <CardHeader floated={false} className="h-96">
                <img src={item.image} className="h-full w-full" alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {item.role}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

//  creating safer environments by providing real-time insights and empowering communities.
