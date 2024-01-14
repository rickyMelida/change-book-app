import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import canvg from 'canvg';

const ImageToSvgConverter = () => {
  const [svgCode, setSvgCode] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const imageDataUrl = e.target.result;

        // Convierte la imagen a SVG
        const svgString = await convertImageToSvg(imageDataUrl);

        setSvgCode(svgString);
      };

      reader.readAsDataURL(file);
    }
  };

  const convertImageToSvg = async (imageDataUrl) => {
    const canvas = await html2canvas(document.body.appendChild(document.createElement('div')), {
      logging: false,
      width: 300, // Ancho del SVG resultante
      height: 200, // Alto del SVG resultante
    });

    const svgString = await new Promise((resolve) => {
      canvg(canvas, imageDataUrl, { renderCallback: () => resolve(canvas.toDataURL()) });
    });

    return svgString;
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {svgCode && (
        <div>
          <h2>SVG Resultante:</h2>
          <pre>{svgCode}</pre>
          <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        </div>
      )}
    </div>
  );
};

export default ImageToSvgConverter;
