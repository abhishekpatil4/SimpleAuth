import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const handleSignin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        console.log("payload: ", payload);
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Sign into Your Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <button style={{ margin: '1rem 0rem' }}>Sign in</button>
            <span style={{ fontSize: '15px' }}>New? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up here</span></span>
        </form>
    </div>
}

export default Signin;