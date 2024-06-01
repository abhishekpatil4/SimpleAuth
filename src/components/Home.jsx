import useMediaQuery from './useMediaQuery';

const Home = () => {
    const isSmallScreen = useMediaQuery('(max-width: 400px)');
    return <div style={{margin: isSmallScreen ? '50% 0%' : '10% 0%'}}>
        <h1 style={{lineHeight:'4rem'}}>Simple React app that uses <br /> <span style={{color:'#FFC402'}}>Firebase</span> for <span style={{color:'#DD2C01'}}>Authentiation</span></h1>
    </div>
}

export default Home;