import React from 'react';
import { Helmet } from 'react-helmet';
import DetailsBanner from '../components/headers/DetailsBanner';
import DetailsClassSection from '../components/allClassComponents/DetailsClassSection';

const DetailsClass = () => {
  const classData = {
    id: 1,
    title: "Full Stack web development",
    name: "John Doe",
    email: "johndoe@example.com",
    instructor_name: "Fatima Noor",
    instructor_email: "fatima@gmail.com",
    price: 50,
    description: "An introductory course on web development covering HTML, CSS, and JavaScript.",
    image: "https://i.ibb.co.com/CpC4X10P/blog-visuals-12.webp",
    enrollment: "1670",
    status: "pending"
    };
  const { title, name, email, instructor_email, price, description, enrollment, image } = classData;

  return (
    <div>
      <Helmet>
        <title> Class details </title>
      </Helmet>

      <DetailsBanner title={title} description={description} ></DetailsBanner>
      <DetailsClassSection instructor_email={instructor_email} price={price} enrollment={enrollment} image={image} ></DetailsClassSection>
    </div>
  );
};

export default DetailsClass;