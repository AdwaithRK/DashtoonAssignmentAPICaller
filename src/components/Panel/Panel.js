import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

import styles from './Panel.module.css';

const Panel = ({ handleClick, isError, isDisabled }) => {
    const [value, setValue] = useState('');
    return (
        <Box className={styles.container}>
            <Grid container spacing={2} direction="row" className={styles.gridContainer}>
                <Grid item xs={8}>
                    <TextField fullWidth value={value} onChange={(e) => setValue(e.target.value)} variant='outlined' className={styles.txtField} />
                </Grid>
                <Grid item xs={4} className={styles.btn}>
                    <Button variant="contained" color={isError ? "error" : "primary"} onClick={() => handleClick(value)} disabled={isDisabled}>{isError ? "Try Again" : "Submit"}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Panel;