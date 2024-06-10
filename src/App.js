import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import Home from "./Components/Home";
import WatchPage from "./Components/WatchPage";
import Body from "./Components/Body";
import store from "./Components/utils/Store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/watch",
        element: <WatchPage />,
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
<div className="App">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
    
  );
}

export default App;
