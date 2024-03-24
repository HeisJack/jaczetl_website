import React from 'react';
import ImageCarousel from '../components/ImageCarousel.jsx';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SplitContent from '../components/SplitContent.jsx';

function Home(props){
    const carousel_image1 = process.env.PUBLIC_URL + '/images/carousel_images/stock_1.jpg';
    const carousel_image2 = process.env.PUBLIC_URL + '/images/carousel_images/stock_2.jpg';
    const carousel_image3 = process.env.PUBLIC_URL + '/images/carousel_images/stock_3.jpg';

    const items = [
        { imageUrl: carousel_image1, name: 'Image 1' },
        { imageUrl: carousel_image2, name: 'Image 2' },
        { imageUrl: carousel_image3, name: 'Image 3' },
    ];

    return(
        <div>
            <ImageCarousel items={items} screenSize={props.screenSize} />
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%'}}>
                <SplitContent background="transparent"/>
            </Box>
        </div>
    );
}

export default Home;