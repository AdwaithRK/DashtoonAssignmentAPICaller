import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { PanelGroup } from './containers';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#252525'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PanelGroup />
    </ThemeProvider>
  );
}

export default App;
