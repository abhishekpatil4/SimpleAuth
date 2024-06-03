import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'


const Signup = () => {
    const navigate = useNavigate();
    const [signingUp, setSigningUp] = useState(false);
    const handleSignin = async (event) => {
        setSigningUp(true);
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        if (payload.password !== payload.password2) {
            alert("passwords don't match!");
            setSigningUp(false);
        } else {
            try {
                await createUserWithEmailAndPassword(auth, payload.email, payload.password);
                console.log("user created!");
            } catch (error) {
                console.log(error);
            }
            setSigningUp(false);
        }
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Create New Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <input required name="password2" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Confirm Password" />
            <button style={{ margin: '1rem 0rem' }}>
                {signingUp ?
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
                    "Sign up"
                }
            </button>
            <span style={{ fontSize: '15px' }}>Already have an account? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signin')}>Sign in here</span></span>
        </form>
    </div>
}

export default Signup;