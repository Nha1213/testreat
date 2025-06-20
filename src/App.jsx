import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterAll from './LayOut/RouterAll';
import Onlypage from './page/component/Onlypage';
import { Home, About, Login, Services } from './page/mydata'; // or from './page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterAll />,
    children: [
      {
        index: true,
        // path: 'home',
        element: <Home />
      },
      {
        path: ':id',
        element: <Onlypage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'services',
        element: <Services />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
