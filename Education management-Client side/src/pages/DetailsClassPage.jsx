import React from 'react';
import { Helmet } from 'react-helmet';
import DetailsBanner from '../components/headers/DetailsBanner';
import DetailsClassSection from '../components/allClassComponents/DetailsClassSection';
import { useLoaderData } from 'react-router-dom';

const DetailsClass = ( ) => {
  const course = useLoaderData();
//  const classData = {
//     id: 1,
//     title: "Full Stack web development",
//     name: "John Doe",
//     email: "johndoe@example.com",
//     instructor_name: "Fatima Noor",
//     instructor_email: "fatima@gmail.com",
//     price: 50,
//     description: "An introductory course on web development covering HTML, CSS, and JavaScript.",
//     image: "https://i.ibb.co.com/CpC4X10P/blog-visuals-12.webp",
//     enrollment: "1670",
//     status:  "pending"
//     };
  const { _id:course_id, course_title, course_image, teacher_name, teacher_email, course_price, course_description, user_enrollment } = course;

  return (
    <div className='mb-20'>
      <Helmet>
        <title> Class details </title>
      </Helmet>

      <DetailsBanner course_title={course_title}  course_description={course_description} ></DetailsBanner>
      <DetailsClassSection teacher_name={teacher_name} teacher_email={teacher_email}  course_price={course_price} user_enrollment={user_enrollment} course_image={course_image} ></DetailsClassSection>
    </div>
  );
};

export default DetailsClass;