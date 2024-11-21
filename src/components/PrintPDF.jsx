import PDFfile from "../assets/file-sample.pdf";
import '../App.css';

const PrintPDF = () => {
  const handlePrint = () => {
    const pdfWindow = window.open(PDFfile, "_blank");
    pdfWindow.addEventListener("load", () => {
      pdfWindow.print();
    });
  };
  return (
    <>
      <div>
        <button onClick={handlePrint}>Print PDF</button>
      </div>
    </>
  );
};

export default PrintPDF;
