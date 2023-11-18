import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

import Box from '@mui/material/Box'
import { Panel as PanelComp, Loader } from "../../components";

import usePanelStore from '../../store';
import useApi from './useApi';

import styles from './Panel.module.css';

const Panel = ({ panelNumber }) => {
    const { panels } = usePanelStore((state) => ({ panels: state.panels }))
    const [inputText, setInputText] = useState("");
    const inputRef = useRef(null);
    const { data, isLoading, isError } = panels[`panel-${panelNumber}`] || {};

    useApi(inputText, panelNumber);

    useEffect(() => {
        if (data) {
            inputRef.current.src = URL.createObjectURL(data);
        }
    }, [data])

    const image = useMemo(() => <img alt="try" ref={inputRef} className={styles.img} />, []);
    const loading = useMemo(() => <Loader />);

    const getComp = useCallback(() => {
        if (isLoading) {
            return loading;
        } else if (data) {
            return image;
        }
        return <PanelComp handleClick={(value) => setInputText(value)} isError={isError} isDisabled={isLoading || !!inputText} />;
    }, [isLoading, isError, data])

    return (
        <Box className={styles.container}>
            {getComp()}
        </Box>
    )
}

export default Panel;