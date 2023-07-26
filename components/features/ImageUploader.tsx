'use client';

import { Button, Box, Typography } from '@mui/material';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Image from 'next/image';

const ImageUploader = () => {
  // 1. add reference to input element
  const ref = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<Blob | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 2. get reference to the input element
    const input = ref.current!;

    // 3. build form data
    const formData = new FormData();
    for (const file of Array.from(input.files ?? [])) {
      formData.append('image', file);
    }

    fetch(`/api/image`, {
      method: 'POST',
      body: formData,
    });
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const { name } = file;
    setImgFile(file);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection={'column'} sx={{ width: 300 }}>
        <Box
          sx={{
            border: '5px grey dashed',
            p: 2,
          }}
        >
          {!imgFile && (
            <Box
              sx={{
                width: 200,
                height: 200,
                backgroundColor: 'lightgrey',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" color={'grey'}>
                Preview
              </Typography>
            </Box>
          )}
          {imgFile && (
            <Image
              src={URL.createObjectURL(imgFile as Blob)}
              alt="Thumb"
              width={0}
              height={0}
              style={{ width: '200px', height: 'auto' }}
            />
          )}
          <Button
            component="label"
            variant="text"
            startIcon={<AddPhotoAlternateOutlinedIcon />}
            sx={{ marginRight: '1rem', mt: 1 }}
          >
            Add image
            <input
              type="file"
              accept="image/png, image/jpeg"
              hidden
              ref={ref}
              onChange={handleUploadImage}
            />
          </Button>
        </Box>
        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          OK
        </Button>
      </Box>
    </form>
  );
};

export default ImageUploader;
