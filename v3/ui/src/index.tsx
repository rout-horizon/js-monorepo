import { createRoot } from 'react-dom/client';
import { Synthetix } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts, theme } from '@synthetixio/v3-theme';
import { BrowserRouter } from 'react-router-dom';
import { DEFAULT_QUERY_REFRESH_INTERVAL, DEFAULT_QUERY_STALE_TIME } from '@snx-v3/Constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './i18n';

import { GasSpeedProvider } from '@snx-v3/useGasSpeed';
import { BlockchainProvider } from '@snx-v3/useBlockchain';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: DEFAULT_QUERY_REFRESH_INTERVAL,
      staleTime: DEFAULT_QUERY_STALE_TIME,
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.querySelector('#app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <BlockchainProvider>
          <GasSpeedProvider>
            <Synthetix />
          </GasSpeedProvider>
          <ReactQueryDevtools />
        </BlockchainProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
