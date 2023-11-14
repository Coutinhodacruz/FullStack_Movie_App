import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAppState} from "../../redux/features/appStateSlice";

const PageWrapper = ({state, children }) => {
    const disPatch = useDispatch()

    useEffect(() =>{
      window.scrollTo(0, 0);
        disPatch(setAppState(state))
    }, [state, disPatch]);

  return (
    children
  );
};

export default PageWrapper;