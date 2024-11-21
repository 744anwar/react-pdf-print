import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const GeneratePdf = () => {
  const pdfRef = useRef();

  const handleGeneratePdf = async () => {
    const canvas = await html2canvas(pdfRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Download.pdf");
  };

  return (
    <div>
      <div ref={pdfRef} style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
        <h1>PDF Content</h1>
        <p>This content will be converted to PDF.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          distinctio possimus eveniet accusamus? Ipsa dicta dolore consequuntur
          sit fuga excepturi nisi facere debitis, atque ullam ea eligendi ad
          iste impedit laborum molestiae, natus qui. <br /> Quas sed sapiente 
          temporibus consequatur neque unde tempora modi maxime, odio nihil
          praesentium assumenda sit suscipit qui, adipisci, totam ab velit quis
          nam voluptatem? Expedita, saepe. Distinctio incidunt asperiores
          pariatur adipisci dolorum, quam fugit vel laborum ab labore odit
          necessitatibus sunt vero at doloribus, eos eum, tempore assumenda
          ullam aspernatur? Nihil veritatis iure totam, unde nulla in ea qui ab
          necessitatibus, velit, quia delectus quasi inventore.
        </p>
      </div>
      <button onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
};

export default GeneratePdf;
