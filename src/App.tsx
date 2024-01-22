import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home_page from './Components/pages/Home_page';
import Movie_page from './Components/pages/Movie_page';
import Root_page from './Components/pages/Root_page';
import Character_info_page from './Components/pages/Character_info_page';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root_page />,
    children: [
      {
        path: "/",
        element: <Home_page />
      },
      {
        path: "/movie/:name",
        element: <Movie_page />
      },
      {
        path: "/character/:name",
        element: <Character_info_page />
      }
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App;
