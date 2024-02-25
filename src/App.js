import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Suspense, lazy } from "react";

const WatchPage = lazy(() => import("./components/WatchPage"));
const Shorts = lazy(() => import("./components/Shorts"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "shorts",
        element: (
          <Suspense>
            <Shorts />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
