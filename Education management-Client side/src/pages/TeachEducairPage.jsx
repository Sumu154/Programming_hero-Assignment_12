import React, { useContext, useEffect, useState } from 'react';
import TeachBanner from '../components/headers/TeachBanner';
import TeachEducairForm from '../components/others/TeachEducairForm';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../contexts/AuthProvider';
import { getUserRole } from '../apis/userApi';
import AlreadyTeacher from '../components/others/AlreadyTeacher';

const TeachEducairPage = () => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const [ user_role, setUser_role ] = useState('');

  const fetchUserRole = async () => {
    const data = await getUserRole(user_email);
    setUser_role(data); //data = admin/taecher/student
  }

  useEffect(() => {
    fetchUserRole();
  })

  

  return (
    <div className='mb-8'>
      <Helmet>
        <title> Teach on Educair </title>
      </Helmet>

      <TeachBanner></TeachBanner>
      { user_role==='teacher' ? <AlreadyTeacher></AlreadyTeacher> 
        : <TeachEducairForm></TeachEducairForm>}
    </div>
  );
};

export default TeachEducairPage;