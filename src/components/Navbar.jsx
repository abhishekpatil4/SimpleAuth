import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import useMediaQuery from './useMediaQuery';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <h2>SimpleAuth</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: 10, alignItems: 'center' }}>
            <button style={{ minWidth: isSmallScreen ? '4rem' : '8rem' }}>
                {
                    isSmallScreen ?
                        <IoIosLogIn fontSize={"1.4rem"} />
                        :
                        "Sign In"
                }
            </button>
        </div>
    </div>
}

export default Navbar;