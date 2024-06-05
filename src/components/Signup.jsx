import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import { useSnackbar } from "notistack";
import { FcGoogle } from "react-icons/fc";
import { addUserData } from "../config/Firebase";

const Signup = () => {
    const navigate = useNavigate();
    const [signingUp, setSigningUp] = useState(false);
    const [googleSigningUp, setGoogleSigningUp] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const handleGoogleSignin = async () => {
        setGoogleSigningUp(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            enqueueSnackbar("Account Created", {
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
        setSigningUp(true);
        event.preventDefault();
        const data = new FormData(event.target);
        const payload = Object.fromEntries(data);
        if (payload.password !== payload.password2) {
            enqueueSnackbar("Password doesn't match!", {
                variant: 'warning', anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                }
            })
            setSigningUp(false);
        } else {
            try {
                const newUser = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
                enqueueSnackbar("Account Created", {
                    variant: 'success', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    }
                })
                addUserData(newUser.user.uid, payload.firstName, payload.lastName, payload.email);
                navigate('/');
            } catch (error) {
                enqueueSnackbar(error.message, {
                    variant: 'error', anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center'
                    }
                })
            }
            setSigningUp(false);
        }
    }
    return <div style={{ maxWidth: '25rem', margin: 'auto' }}>
        <h3>Create New Account</h3>
        <form onSubmit={handleSignin} style={{ gap: 10, display: 'flex', justifyContent: "center", flexDirection: 'column' }}>
            <input required name="firstName" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="First Name" />
            <input required name="lastName" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Last Name" />
            <input required name="email" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="text" placeholder="Email" />
            <input required name="password" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Password" />
            <input required name="password2" style={{ minHeight: '2.8rem', paddingLeft: '0.8rem', borderRadius: '8px', border: '0px' }} type="password" placeholder="Confirm Password" />
            <button type="submit" style={{ margin: '1rem 0rem 0rem 0rem' }}>
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
            <span style={{ fontSize: '15px' }}>Already have an account? <span style={{ textDecoration: '1px underline', textUnderlineOffset: '0.25em', cursor: 'pointer' }} onClick={() => navigate('/signin')}>Sign in here</span></span>
        </form>
    </div>
}

export default Signup;