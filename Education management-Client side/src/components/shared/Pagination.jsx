import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ( {pageCount, onPageChange} ) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={"←"}   //set icon for prev button
        nextLabel={"→"}
        breakLabel={"..."}  // Adds a separator (...)
        pageCount={pageCount}
        marginPagesDisplayed={1}  //firste laste kotogula page dekhabe
        pageRangeDisplayed={2}    // majhe kotogula
        onPageChange={onPageChange}  
        containerClassName={"flex space-x-2"}  
        pageClassName={"w-8 h-8 flex justify-center items-center border rounded-full cursor-pointer block"}  
        activeClassName={"bg-redd text-white"}  
        previousClassName={"w-10 h-8 flex justify-center items-center border rounded-full cursor-pointer block"}  
        nextClassName={"w-10 h-8 flex justify-center items-center border rounded-full cursor-pointer block"}  
      >

      </ReactPaginate>
    </div>
  );
};

export default Pagination;