import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { useSnackbar } from "notistack";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
    const navigate = useNavigate();
    const [signingIn, setSigningIn] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [googleSigningUp, setGoogleSigningUp] = useState(false);
    const handleGoogleSignin = async () => {
        setGoogleSigningUp(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            enqueueSnackbar("Signed In", {
                variant: 'success', anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }
            })
            setGoogleSigningUp(false);
            navigate('/');
        } catch (error) {
            enqueueSnackbar(error.message, {
                variant: 'error', anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }
            })
            setGoogleSigningUp(false);
        }
    }
    const handleSignin = async (event) => {
        setSigningIn(true);
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        try {
            await signInWithEmailAndPassword(auth, payload.email, payload.password);
            enqueueSnackbar("Signed In", {
                variant: 'success', anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }
            })
            setSigningIn(false);
            navigate('/');
        } catch (error) {
            enqueueSnackbar(error.message, {
                variant: 'error', anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }
            })
            setSigningIn(false);
        }
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Sign into Your Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <button type="submit" style={{ margin: '1rem 0rem 0rem 0rem' }}>
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
            <button onClick={handleGoogleSignin} type="button">
                {
                    googleSigningUp ?
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
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: 8 }}><FcGoogle /> Google</div>
                }
            </button>
            <span style={{ fontSize: '15px' }}>New? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign up here</span></span>
        </form>
    </div>
}

export default Signin;