import { Button, Container, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import DirectoryInput from './DirectoryInput';

const StyledContainer = styled(Container)({
  marginTop: '2rem',
  textAlign: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '1rem',
  marginTop: '1rem',
});

const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileCount, setFileCount] = useState(0);
  const [folderCount, setFolderCount] = useState(0);
  const [duplicates, setDuplicates] = useState<{ original: string; duplicate: string }[]>([]);
  const [hasClickedFindDuplicates, setHasClickedFindDuplicates] = useState(false);

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
      setHasClickedFindDuplicates(false);
    }
  };

  const calculateHash = async (arrayBuffer: ArrayBuffer) => {
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const findDuplicates = async () => {
    const fileHashes: { [key: string]: string } = {};
    const duplicates: { original: string; duplicate: string }[] = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const fileHash = await calculateHash(arrayBuffer);

      if (fileHashes[fileHash]) {
        duplicates.push({ original: fileHashes[fileHash], duplicate: file.name });
      } else {
        fileHashes[fileHash] = file.name;
      }
    }

    setDuplicates(duplicates);
    setHasClickedFindDuplicates(true);
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
      {hasClickedFindDuplicates && (
        <StyledPaper>
          {duplicates.length > 0 ? (
            <div>
              <Typography variant="h6" gutterBottom>
                Duplicates Found:
              </Typography>
              <List>
                {duplicates.map((dup, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${dup.duplicate} is a duplicate of ${dup.original}`} />
                  </ListItem>
                ))}
              </List>
            </div>
          ) : (
            <Typography variant="body1">No duplicates found.</Typography>
          )}
        </StyledPaper>
      )}
    </StyledContainer>
  )
}

export default App;
