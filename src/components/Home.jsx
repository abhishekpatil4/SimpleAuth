import useMediaQuery from './useMediaQuery';

const Home = ({ user }) => {
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
                <h3>User email: {user.email}</h3>
            </div>
        }
    </div>
}

export default Home;