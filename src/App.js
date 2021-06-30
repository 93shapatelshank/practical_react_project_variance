import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <HelmetProvider>
      <Routes />
      <Toaster />
    </HelmetProvider>
  );
};

export default App;
