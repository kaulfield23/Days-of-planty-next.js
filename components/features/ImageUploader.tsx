'use client';

import { Button, Box } from '@mui/material';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const ImageUploader = () => {
  // 1. add reference to input element
  const ref = useRef<HTMLInputElement>(null);
  const [filename, setFilename] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 2. get reference to the input element
    const input = ref.current!;

    // 3. build form data
    const formData = new FormData();
    for (const file of Array.from(input.files ?? [])) {
      formData.append(file.name, file);
    }
    console.log(formData, ' data?');

    fetch(`/api/image`, {
      method: 'POST',
      body: formData,
    });

    // await fetch('/api/image', {
    //   method: 'POST',

    //   body: JSON.stringify({
    //     data: 'hello',
    //   }),
    // });
    // 4. use axios to send the FormData
    // await axios.post('/api/image', formData);
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    console.log(file);
    const { name } = file;
    setFilename(name);
  };
  return (
    <Box display="flex">
      <form onSubmit={handleSubmit}>
        <Button
          component="label"
          variant="contained"
          startIcon={<AddPhotoAlternateOutlinedIcon />}
          sx={{ marginRight: '1rem' }}
        >
          Upload image
          <input
            type="file"
            accept="image/png, image/jpeg"
            hidden
            ref={ref}
            onChange={handleUploadImage}
          />
        </Button>
        <h2>{filename}</h2>
        <Button type="submit">Upload</Button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <input type="file" name="files" ref={ref} multiple />
        <button
          type="submit"
          className="px-2 py-1 rounded-md bg-violet-50 text-violet-500"
        >
          Upload
        </button>
      </form> */}
    </Box>
  );
};

export default ImageUploader;
