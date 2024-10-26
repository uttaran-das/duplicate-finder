import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import DirectoryInput from './DirectoryInput';

const StyledContainer = styled(Container)({
  marginTop: '2rem',
  textAlign: 'center',
});

const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileCount, setFileCount] = useState(0);
  const [folderCount, setFolderCount] = useState(0);

  const handleFolderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      const filesArray: File[] = [];
      const directories = new Set<string>();

      fileList.forEach(file => {
        filesArray.push(file);
        const filePath = file.webkitRelativePath;
        const fileDir = filePath.split('/').slice(0, -1).join('/');
        directories.add(fileDir);
      });

      setFiles(filesArray);
      setFileCount(filesArray.length);
      setFolderCount(directories.size);
    }
  };

  const findDuplicates = () => {
    // TODO: Find duplicates
  }

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Find Duplicates in Folder
      </Typography>
      <DirectoryInput type="file" id="folderInput" onChange={handleFolderChange} />
      <Button variant="contained" color="primary" onClick={findDuplicates} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
        Find Duplicates
      </Button>
      <Typography variant="body1" style={{ marginTop: '1rem' }}>
        {fileCount} files in {folderCount} folders uploaded.
      </Typography>
    </StyledContainer>
  )
}

export default App;