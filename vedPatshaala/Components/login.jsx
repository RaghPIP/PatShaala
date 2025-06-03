import React from 'react';
import './login.css';
import GaneshaImage from './Ganesha_and_vyasa.webp';
import VedaLogo from './veda-patshala-logo.png'; // Add your logo file here

function Login() {
    return (
        <div className="wrapper">
            {/* Logo Header */}
            <div className="logo-header">
                <img src={VedaLogo} alt="The Veda Patshala" className="main-logo" />
            </div>
            
            <div className="container">
                <div className="left-side">
                    <img src={GaneshaImage} alt="Lord Ganesha" />
                    <div className="shloka">
                        śuklāṁ baradharaṁ viṣṇuṁ śaśi varṇaṁ caturbhujam <br />
                        prasanna vadanam dhyāyet sarva vighnopa śāntaye ||<br /><br />
                        yasya dviradha vaktrādyāḥ pāriṣadhya paraśatam <br />
                        vighnam nighnanti satataṁ viśvaksena tamāśraye ||
                    </div>
                </div>
                <div className="right-side">
                    <div className="login-box">
                        <h2>Login</h2>
                        <form>
                            <label>Email</label>
                            <input type="email" placeholder="Enter email" required />

                            <label>Password</label>
                            <input type="password" placeholder="Enter password" required />

                            <label>
                                <input type="checkbox" /> Show Password
                            </label>

                            <button type="submit">SIGN IN</button>

                            <div className="links">
                                <p><a href="login.jsx">Forgot Username / Password?</a></p>
                                <p>Don't have an account? <a href="login.jsx">Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;