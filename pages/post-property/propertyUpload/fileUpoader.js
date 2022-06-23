

import React, { useEffect, useRef } from 'react'

const FileUploader = ({onUpload,count, formats,children,}) => {
  const drop = useRef(null);

useEffect(() => {
    drop.current?.addEventListener('dragover', handleDragOver);
    drop.current?.addEventListener('drop', handleDrop);
    return () => {
      drop?.current?.removeEventListener('dragover', handleDragOver);
      drop?.current?.removeEventListener('drop', handleDrop);
    };
  }, []);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

  // const {files} = e.dataTransfer;

  const files = [...e.dataTransfer.files];
 

  if (files && files.length) {
    onUpload(files);
    console.log(files);

  }
};

  return (
    <div
    ref={drop} >


    {children}

  </div>
  )
}

export default FileUploader