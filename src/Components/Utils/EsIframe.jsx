import React from "react";

const EsIframe = ({ src, ...props }) => {
  return (
    <div className="aspect-w-16 aspect-h-10">
      <iframe src={src} className="aspect-auto max-w-full h-full"></iframe>
    </div>
  );
};

export default EsIframe;
