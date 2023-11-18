import { useCallback, useState } from 'react';

import { Carousel } from '../../components';
import Panel from '../Panel';

import styles from './PanelGroup.module.css';

const LIMIT = 10;

const PanelGroup = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const prevCallback = useCallback(() => {
        setSelectedIndex(index => index - 1);
    }, [])
    const nextCallback = useCallback(() => {
        setSelectedIndex(index => index + 1)
    })
    return (
        <Carousel initialLimit={0} finalLimit={LIMIT - 1} selectedIndex={selectedIndex} prevCallback={prevCallback} nextCallback={nextCallback}>
            {[...new Array(LIMIT)].map((ele, index) => <Panel key={index} panelNumber={index+1} />)}
        </Carousel>
    )
}

export default PanelGroup;