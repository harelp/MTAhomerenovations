import React, { useState } from 'react';
const Upload = () => {
  const [img, setimg] = useState<FileList | null>(null);

  const uploadImg = () => {
    if (img === null) return;
    console.log(img);
    // https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event: any) => {
          setimg(event.target.files[0]);
        }}
      />
      <button onClick={uploadImg}> Upload Image</button>
    </div>
  );
};

export default Upload;
