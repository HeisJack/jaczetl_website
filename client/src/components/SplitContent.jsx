import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function SplitContent(props){
    var background = "transparent";
    function getBackground(){
        if (props.background === "transparent"){
            let background = "transparent";
        }
        return background;
    }
    
    return(
        <Grid container sx={{ width: '100%', background: background}}>
            <Grid item xs={6} sx={{ background: background }}>
                {/* Content of the first half */}
                <div style={{ height: '100px' }}>First Half</div>
            </Grid>
            <Grid item xs={6} sx={{ background: background }}>
                {/* Content of the second half */}
                <div style={{ height: '100px' }}>Second Half</div>
            </Grid>
        </Grid>
    );
}

export default SplitContent;