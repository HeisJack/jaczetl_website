import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function SocialMediaPallet(props){
    const youtubeLink = "https://www.youtube.com/@Pilatesmode";
    const instagramLink = "https://www.instagram.com/pilates_mode_/";
    const xs_size = "1rem";
    const sm_size = "1rem";
    const md_size = "1.5rem";
    const lg_size = "1.5rem";
    const xl_size = "2rem";
    return(
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', p: '0px', m: '0px'}}>
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                    sx={{ 
                    color: theme => theme.palette.primary.main,
                    padding: 0.5,
                    margin: 0
                    }}
                >
                    <YouTubeIcon
                        sx={{
                                color: theme => theme.palette.primary.fifth,
                                fontSize: {
                                xs: xs_size,   // Extra-small devices
                                sm: sm_size, // Small devices
                                md: md_size,   // Medium devices
                                lg: lg_size, // Large devices
                                xl: xl_size    // Extra-large devices
                                },
                                padding: 0,
                                margin: 0
                        }}
                    />
                </IconButton>
            </a>
            <IconButton
                href={instagramLink}
                sx={{ 
                color: theme => theme.palette.primary.main,
                padding: 0.5,
                margin: 0
                }}
            >
                <InstagramIcon
                    sx={{
                        color: theme => theme.palette.primary.fifth,
                        fontSize: {
                        xs: xs_size,   // Extra-small devices
                        sm: sm_size, // Small devices
                        md: md_size,   // Medium devices
                        lg: lg_size, // Large devices
                        xl: xl_size    // Extra-large devices
                        },
                        padding: 0,
                        margin: 0
                    }}
                />
            </IconButton>
        </Box>
    );
}

export default SocialMediaPallet;