import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

const Signin = () => {
    const navigate = useNavigate();
    const [signingIn, setSigningIn] = useState(false);
    const handleSignin = async (event) => {
        setSigningIn(true);
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        try {
            await signInWithEmailAndPassword(auth, payload.email, payload.password);
            console.log("logged in!");
            setSigningIn(false);
        } catch (error) {
            console.log(error.message);
            setSigningIn(false);
        }
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Sign into Your Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <button style={{ margin: '1rem 0rem' }}>
                {
                    signingIn ?
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Audio
                                height="15"
                                width="15"
                                radius="9"
                                color="white"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                        :
                        "Sign in"
                }
            </button>
            <span style={{ fontSize: '15px' }}>New? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up here</span></span>
        </form>
    </div>
}

export default Signin;