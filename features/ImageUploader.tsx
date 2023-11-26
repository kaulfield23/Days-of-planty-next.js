'use client';

import { Button, Box, Typography } from '@mui/material';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Image from 'next/image';

const ImageUploader = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<Blob | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = ref.current!;

    const formData = new FormData();
    for (const file of Array.from(input.files ?? [])) {
      formData.append('image', file);
    }

    const res = await fetch(`/api/image`, {
      method: 'POST',
      body: formData,
    });

    if (res.status === 200) {
    }
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
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
