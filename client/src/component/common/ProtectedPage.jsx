import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalOpen} from "../../redux/features/authModalSlice";


const ProtectedPage = ({ children }) => {
    const disPatch = useDispatch();

    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        disPatch(setAuthModalOpen(!user));
    }, [user, disPatch])

  return (
    user ? children : null
  );
};

export default ProtectedPage