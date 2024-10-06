import React from "react";
import jsPDF from "jspdf";

const ExportButton = ({ books }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    books.forEach((book, index) => {
      doc.text(`${index + 1}. ${book.bookName}`, 10, 10 + index * 10);
    });
    doc.save("uploaded_books.pdf");
  };

  return (
    <div className="export-button">
      <button onClick={exportToPDF}>Export Books as PDF</button>
    </div>
  );
};

export default ExportButton;
