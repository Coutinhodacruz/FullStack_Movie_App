import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";
import TopBar from "../common/TopBar";

const MainLayout = () => {
  return (
    <>
      {/*global loading */}
      <GlobalLoading />
      {/*global loading */}

      {/*login modal */}
      {/*login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        <TopBar />
        {/* header */}

        {/* main */}
        <Box
        component="main"
        flexGrow={1}
        overflow="hidden"
        minHeight="100vh"
        >
            <Outlet/>
        </Box>
        {/* main */}
      </Box>

       {/* footer */}
       <Footer />
       {/* footer */}
    </>
  );
};

export default MainLayout;
