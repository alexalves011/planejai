import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
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
