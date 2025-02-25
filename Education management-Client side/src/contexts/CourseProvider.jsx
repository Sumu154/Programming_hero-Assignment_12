import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { createContext } from 'react';


export const CourseContext = createContext();

const CourseProvider = ( {children} ) => {

  const [ courses, setCourses ] = useState([]);

  return (
    <CourseContext.Provider value={ {courses, setCourses} }>
      { children }
    </CourseContext.Provider>
  );
};


CourseProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CourseProvider;