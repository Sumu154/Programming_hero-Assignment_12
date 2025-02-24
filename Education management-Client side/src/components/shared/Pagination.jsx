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
        marginPagesDisplayed={2}  //firste laste kotogula page dekhabe
        pageRangeDisplayed={3}    // majhe kotogula
        onPageChange={onPageChange}  
        containerClassName={"flex space-x-2"}  
        pageClassName={"px-3 py-1 border rounded"}  
        activeClassName={"bg-orchid text-white"}  
        previousClassName={"px-3 py-1 border rounded"}  
        nextClassName={"px-3 py-1 border rounded"}  
      >

      </ReactPaginate>
    </div>
  );
};

export default Pagination;