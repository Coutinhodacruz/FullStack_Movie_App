import {useSelector} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import themeConfig from "./configs/theme.config";
import {ToastContainer} from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/layout/MainLayout";
import PageWrapper from "./component/common/PageWrapper";
import routes from "./routes/routes";


const App = () => {
    const  themeMode  = useSelector((state) => state.themeMode);
    console.log("themeMode --> ", themeMode)
  return (
    <ThemeProvider theme={themeConfig.custom({ mode: themeMode })}>
       {/* config toastify */}
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
        />
        {/* mui reset css */}
        <CssBaseline />

        {/* mui reset css */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {routes.map((route, index) => (
                      route.index ? (
                        <Route 
                        index
                        key={index}
                        element={route.state ? (
                          <PageWrapper state={route.state}>{route.element}</PageWrapper>
                        ) : route.element}
                        />
                      ) : (
                        <Route 
                        path={route.path}
                        key={index}
                        element={route.state ? (
                          <PageWrapper state={route.state}>{route.element}</PageWrapper>
                        ) : route.element}
                        />
                      )
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
