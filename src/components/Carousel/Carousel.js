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
                {!isFirstSlide && <Button variant='outlined' onClick={prevCallback}>Prev</Button>}
                <div className={isFirstSlide || isLastSlide ? styles.initial : styles.text}>{`${selectedIndex + 1} / ${finalLimit + 1}`}</div>
                {!isLastSlide && <Button variant='outlined' className={styles.nxt} onClick={nextCallback}>Next</Button>}
            </Box>
        </Box>
    );
}

export default Carousel;