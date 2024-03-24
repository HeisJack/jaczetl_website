import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';

function ImageCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenDigraph, setScreenDigraph] = useState('');
  const [viewportHeight, setViewportHeight] = useState('60vh'); //default value assumes lg/xl screen size

  const containerStyle = {
    width: '100%',
    height: 'auto',
    margin: 'auto',
    paddingTop: '3px',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageContainerStyle = {
    position: 'relative',
    height: viewportHeight,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  function setHeightConfig(size){
    console.log("This is the size: ", size);
    if(size === 'xl'){
        setViewportHeight('60vh');
    }else if(size == 'lg'){
        setViewportHeight('60vh');
    }else if(size == 'md'){
        setViewportHeight('40vh');
    }else if(size === 'sm'){
        setViewportHeight('20vh');
    }else if(size == 'xs'){
        setViewportHeight('20vh');
    }else{
        setViewportHeight('60vh');
    }
  }

  // useEffect to run the function on mount and every time screenSize changes
  useEffect(() => {
    setScreenDigraph(props.screenSize);
    //handleScreenSizeChange();
    console.log("Screen Size: ", props.screenSize);
    setHeightConfig(props.screenSize);
  }, [props.screenSize]);

  return (
    <Box sx={containerStyle}>
      <Carousel
        index={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        navButtonsAlwaysVisible
      >
        {props.items.map((item, index) => (
          <Paper key={index}>
            <Box sx={imageContainerStyle}>
              <img src={item.imageUrl} alt={item.name} style={imageStyle} />
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
