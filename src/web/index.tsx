import React from 'react';
import ReactDom from 'react-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import App from './pages/App';
import { PageErrorFallback } from '@components/ErrorPageFallback';

ReactDom.render(<ErrorBoundary fallbackRender={PageErrorFallback}><App /></ErrorBoundary>, document.getElementById('root'))