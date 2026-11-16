import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/components/Layout/RootLayout'
import { SimulationFormPage } from '@/Pages/SimulationFormPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
           <SimulationFormPage/>
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
