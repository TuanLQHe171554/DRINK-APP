import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import { persistStore } from 'redux-persist';
import { store } from './redux/store';
import { injectStore } from './utils/axiosCustomiz.';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ----------------------------------------------------------------------


let persistor = persistStore(store);

//inject store to use store in non-component files
injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter>
            <Suspense>
              <App />
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
