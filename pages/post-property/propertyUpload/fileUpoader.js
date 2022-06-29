import React, { useEffect, useRef } from "react";

const FileUploader = ({ onUpload, count, formats, children }) => {
  const drop = useRef(null);
  // function handleChange(e) {
  //   if (e.target?.files.length !== 0) {
  //     setImgName(e.target.files[0].name);
  //     console.log(imgName);
  //     setUploaded(true);
  //   } else {
  //     setUploaded(false);
  //   }
  // }

  // const onUpload = (files) => {
  //   setUploaded(true);
  //   setFile(files[0]);
  //   setImgName(files[0].name);
  //   formik.setFieldValue("image", files[0]);
  // };
  useEffect(() => {
    drop.current?.addEventListener("dragover", handleDragOver);
    drop.current?.addEventListener("drop", handleDrop);
    return () => {
      drop?.current?.removeEventListener("dragover", handleDragOver);
      drop?.current?.removeEventListener("drop", handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
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

  return <div ref={drop}>{children}</div>;
};

export default FileUploader;
