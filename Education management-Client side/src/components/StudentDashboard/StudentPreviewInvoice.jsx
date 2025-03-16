import React, { useState, useEffect } from "react";
import { pdfjs,  Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const StudentPreviewInvoice = ({ pdfUrl }) => {
  console.log(pdfUrl, 'in preview')
  const [numPages, setNumPages] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <div className="bg-ash p-4 mt-6 ">
      <p> Page {pageNumber} of {numPages} </p>

      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        { Array.apply(null, Array(numPages)).map((x, i) => i+1).map((page, index) => {
          return (
            <Page key={index} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
          )
        }) }
      </Document>

      
    </div>
  );
};

export default StudentPreviewInvoice;
