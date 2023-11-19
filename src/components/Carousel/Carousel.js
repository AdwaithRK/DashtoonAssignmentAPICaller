import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './Carousel.module.css';

const Carousel = ({ children, selectedIndex, initialLimit, finalLimit, prevCallback, nextCallback }) => {
    const isFirstSlide = initialLimit === selectedIndex;
    const isLastSlide = finalLimit === selectedIndex
    return (
        <Box>
            {children[selectedIndex]}
            <Box className={styles.btnGrp}>
                <Button variant='outlined' onClick={prevCallback} disabled={isFirstSlide}>Prev</Button>
                <div className={styles.text}>{`${selectedIndex + 1} / ${finalLimit + 1}`}</div>
                <Button variant='outlined' className={styles.nxt} onClick={nextCallback} disabled={isLastSlide}>Next</Button>
            </Box>
        </Box>
    );
}

export default Carousel;