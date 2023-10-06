import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Home from "./pages/dashboard/Home";
import Forum from "./pages/dashboard/Forum";
import Settings from "./pages/dashboard/Settings";
import Calendar from "./pages/dashboard/Calendar";

import {ChakraProvider} from "@chakra-ui/react"

function App() {

  const router  = createBrowserRouter(

    createRoutesFromElements(
      <>
        <Route path="/">
          <Route path="dashboard" element={ <DashboardPage /> }>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={ <Home /> } />
            <Route path="forum" element={ <Forum /> } />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={ <Settings /> } />
          </Route>
        </Route>
      </>
    )

  )

  return (
    <ChakraProvider >
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
