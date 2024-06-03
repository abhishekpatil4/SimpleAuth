import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import useMediaQuery from './useMediaQuery';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";

const Navbar = ({ user }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isSmallScreen = useMediaQuery('(max-width: 400px)');

    const handleSignout = async () => {
        try {
            signOut(auth);
            console.log("signed out!");
        } catch (error) {
            console.log(error);
        }
    }

    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <h2>SimpleAuth</h2>
        </div>
        {
            location.pathname === "/" &&
            (user === null ?
                <button onClick={() => navigate('/signin')} style={{ minWidth: isSmallScreen ? '4rem' : '8rem' }}>
                    {
                        isSmallScreen ?
                            <IoIosLogIn fontSize={"1.4rem"} />
                            :
                            "Sign In"
                    }
                </button>
                :
                <button onClick={handleSignout} style={{ minWidth: isSmallScreen ? '4rem' : '8rem' }}>
                    {
                        isSmallScreen ?
                            <IoIosLogOut fontSize={"1.4rem"} />
                            :
                            "Sign Out"
                    }
                </button>
            )
        }
    </div>
}

export default Navbar;