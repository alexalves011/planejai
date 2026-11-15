import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/components/Layout/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <h1>Formulario de simulção</h1>
          </>
        ),
      },
      {
        path: '/resultado',
        element: (
          <>
            <h1>Resultado da Simulção </h1>
          </>
        ),
      },
      {
        path: '/historico',
        element: <h1>Historico de Simulação</h1>,
      },
    ],
  },
])
