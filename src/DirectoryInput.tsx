import React, { useRef, useEffect } from 'react';
import { Button } from '@mui/material';

interface DirectoryInputProps {
  type: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DirectoryInput: React.FC<DirectoryInputProps> = ({ type, id, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('webkitdirectory', '');
    }
  }, []);

  return (
    <>
        <input type={type} id={id} onChange={onChange} multiple ref={inputRef} style={{ display: 'none' }}/>
        <Button
        variant="contained"
        color="primary"
        onClick={() => inputRef.current?.click()}
        style={{ marginTop: '1rem' }}
        >
        Select Folder
        </Button>
    </>
  ); 
};

export default DirectoryInput;
