import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import useMediaQuery from './useMediaQuery';
import { useState, useEffect } from 'react';
import { getUserData } from '../config/Firebase';

const Home = ({ user }) => {
    const [signedUpUsers, setSignedUpUsers] = useState([]);
    useEffect(() => {
        const setData = async () => {
            const data = await getUserData();
            setSignedUpUsers(data);
        }
        setData();
    }, []);
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    return <div style={{ margin: isSmallScreen ? '50% 0%' : '10% 0%' }}>
        <h1 style={{ lineHeight: '4rem' }}>Simple React app that uses <br />
            <span style={{
                background: 'linear-gradient(to right, #FFC402, #DD2C01)', WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text'
            }}>
                Firebase
            </span> for <span style={{
                background: 'linear-gradient(to right, #FFC402, #DD2C01)', WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text'
            }}>
                Authentiation
            </span></h1>
        {
            user !== null && <div>
                {
                    user.displayName && <h3>User name: {user.displayName}</h3>
                }
                <h3>User email: {user.email}</h3>
            </div>
        }
        {signedUpUsers.length > 0 &&
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '30rem', margin: '0 auto' }}>
                <h3>List of Signed Up Users</h3>
                <table>
                    <tr>
                        <th style={{ border: '1px solid gray' }}>First Name</th>
                        <th style={{ border: '1px solid gray' }}>Second Name</th>
                    </tr>
                    {signedUpUsers.map((user, idx) => {
                        if (idx === signedUpUsers.length) {
                            return <tr key={idx}>
                                <td style={{ borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>{user.firstName}</td>
                                <td style={{ borderLeft: '1px solid gray', borderRight: '1px solid gray' }}>{user.lastName}</td>
                            </tr>
                        } else {
                            return <tr key={idx}>
                                <td style={{ borderLeft: '1px solid gray', borderRight: '1px solid gray', borderBottom: '1px solid gray' }}>{user.firstName}</td>
                                <td style={{ borderLeft: '1px solid gray', borderRight: '1px solid gray', borderBottom: '1px solid gray' }}>{user.lastName}</td>
                            </tr>
                        }
                    })}
                </table>
            </div>
        }
    </div>
}

export default Home;