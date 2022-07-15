import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import './App.css';
import OptionsTab from 'components/OptionsTab';

function App() {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}>
                <Box>
                    <Header />
                    <OptionsTab />
                </Box>
            </Box>
        </>
    );
}

export default App;
