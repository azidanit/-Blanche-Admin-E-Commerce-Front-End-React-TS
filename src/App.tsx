import { ConfigProvider, Skeleton } from 'antd';
import React, { Suspense } from 'react';
import { router } from './helpers/route/routes';
import { RouterProvider } from 'react-router-dom';
import theme from './helpers/theme';

function App(): JSX.Element {
  return (
    <ConfigProvider theme={theme}>
      <Suspense
        fallback={
          <div style={{ margin: '10rem' }}>
            <Skeleton
              style={{
                margin: '1rem auto',
                width: '100%',
                textAlign: 'center',
              }}
              paragraph={{ rows: 4 }}
            />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
