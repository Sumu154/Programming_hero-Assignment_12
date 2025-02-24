import React from 'react';
import TeacherClassCard from '../allCards/TeacherClassCard';

const TeacherClasses = () => {
  return (
    <div>
      <div className='grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-4'>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        <TeacherClassCard></TeacherClassCard>
        
      </div>
    </div>
  );
};

export default TeacherClasses;