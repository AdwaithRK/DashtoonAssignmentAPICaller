import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

import styles from './Panel.module.css';

const INSTRUCTIONS = ['Input Your Prompt: Write a detailed description of the image you want in the text box.', 'Generate: Click \'Generate\' to submit your prompt.', 'View Your Image: Wait for the image to be created (as the API is slow).', 'You can move to the next panel to generate the next image while waiting for the response.']

const Panel = ({ handleClick, isError, isDisabled }) => {
    const [value, setValue] = useState('');
    return (
        <Box className={styles.container}>
            <div className={styles.instructions}>
                <ul>
                    {INSTRUCTIONS.map((inst) => (<><li>{inst}</li><br /></>))}
                </ul>
            </div>
            <Grid container spacing={2} direction="row" className={styles.gridContainer}>
                <Grid item xs={6}>
                    <TextField fullWidth value={value} onChange={(e) => setValue(e.target.value)} variant='outlined' className={styles.txtField} placeholder="Enter your prompt" />
                </Grid>
                <Grid item xs={1} className={styles.btn}>
                    <Button variant="contained" color={isError ? "error" : "primary"} onClick={() => handleClick(value)} disabled={isDisabled}>{isError ? "Try Again" : "Generate"}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Panel;