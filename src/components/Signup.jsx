import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const handleSignin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        console.log("payload: ", payload);
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Create New Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <input required name="password2" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Confirm Password" />
            <button style={{ margin: '1rem 0rem' }}>Sign up</button>
            <span style={{ fontSize: '15px' }}>Already have an account? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signin')}>Sign in here</span></span>
        </form>
    </div>
}

export default Signup;