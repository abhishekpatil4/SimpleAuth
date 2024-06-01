import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import useMediaQuery from './useMediaQuery';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
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