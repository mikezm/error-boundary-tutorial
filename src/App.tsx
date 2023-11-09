import React from 'react';
import './App.css';

import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Checkout from "./components/Checkout";
import CssBaseline from '@mui/material/CssBaseline';
import ErrorBoundary from "./ErrorBoundary";
function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        // <ErrorBoundary fallback={<h1>The entire page is broken</h1>}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container maxWidth="md">
                    <header className="app-header">
                        <h3>
                            An app designed to learn more about Error Boundaries.
                        </h3>
                    </header>
                    {/*<ErrorBoundary fallback={<h1>The Checkout is broken</h1>}>*/}
                        <Checkout />
                    {/*</ErrorBoundary>*/}
                </Container>
            </ThemeProvider>
        // </ErrorBoundary>
    );
}

export default App;
