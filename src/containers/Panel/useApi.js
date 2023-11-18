import { useState, useEffect } from 'react';

import api from '../../api';
import usePanelStore from '../../store';

const API_URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";
const HEADERS = {
    "Accept": "image/png",
    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
    "Content-Type": "application/json"
}

const useApi = (inputText, panelNumber) => {
    // const [data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    const { setPanels } = usePanelStore(state => ({ setPanels: state.addPanel }));

    useEffect(() => {
        if (inputText) {
            setPanels({ [`panel-${panelNumber}`]: { isLoading: true, data: null, isError: false } })
            api.post(API_URL, JSON.stringify({
                inputs: inputText
            }), {
                headers: HEADERS,
                responseType: 'blob'
            }).then((res) => {
                setPanels({ [`panel-${panelNumber}`]: { isLoading: false, data: res.data, isError: false } });
                // setData(res.data)
            })
                .catch((err) => {
                    // setIsError(true);
                    setPanels({ [`panel-${panelNumber}`]: { isLoading: false, data: null, isError: true } })
                    console.error('error occured on fetching', err)
                })
        }
    }, [inputText])

    // return { isError, data, isLoading };
}

export default useApi;