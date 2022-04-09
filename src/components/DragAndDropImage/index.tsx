import { Icon } from "../Icon";
import { Box, ButtonBox, Container, Image, Info, Preview } from "./styled";
import plusIcon from "../../assets/icons/plus.svg";
import imageBgIcon from "../../assets/icons/image-bg.svg";
import Dropzone, { useDropzone } from "react-dropzone";
import { useState } from "react";
import { Button } from "../Button";

export function DropzoneImage() {
  const [files, setFiles] = useState<any>([]);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map((file: any) => (<Image src={file.preview} />))

  let horizontalSize = window.innerWidth >= 768;

  console.log(acceptedFiles);
  console.log(thumbs);
  
  return (
    <Container>
      <Box 
        className={`${isDragReject ? 'rejected' : ''} ${isDragAccept ? 'accepted' : ''}`} 
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Icon icon={horizontalSize ? imageBgIcon : plusIcon} />
        <Info>Adicionar uma imagem para o produto</Info>  
        {files.length ? <Preview>{thumbs}</Preview> : null}
      </Box>
      Ou
      <ButtonBox>
        <Button>Procure no seu tablet</Button>
      </ButtonBox>
    </Container>
  );
}