const mongoose = require("mongoose");

// Middleware function to delete related enrollments & assignments
const cascadeDelete = async (next) => {
  const query = this;
  const courseId = query.getQuery()._id;

  try{
    await Promise.all([
      mongoose.model("Enrollment").deleteMany({ courseId }),
      mongoose.model("Assignment").deleteMany({ courseId }),
    ]);
    next();
  } 
  catch(e){
    next(e); // Pass error to Express error handler
  }
};

module.exports = cascadeDelete;
