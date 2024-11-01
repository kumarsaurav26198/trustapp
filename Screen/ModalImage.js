import React from 'react';
import { Image, Box } from 'native-base';

const ModalImage = ({ image, onClose }) => {
  return (
    <Box justifyContent="center" alignItems="center" height={"90%"} marginY={"auto"} >
      <Image resizeMode="contain" source={image} maxHeight={"100%"} width="100%" />
    </Box>
  );
};

export default ModalImage;
