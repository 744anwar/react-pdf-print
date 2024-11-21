
import pdfFile from '../assets/file-sample.pdf';

const DisplayPDF = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <object
        data={pdfFile}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          It appears you do not have a PDF plugin for this browser. You can
          <a href={pdfFile} download>
            download the PDF here.
          </a>
        </p>
      </object>
    </div>
  );
};

export default DisplayPDF;
