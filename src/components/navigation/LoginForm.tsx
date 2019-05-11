import * as React from "react"

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-form-container">
                <div className="app-name-and-logo-container">
                    <img
                        src="/moviehunt-logo-icon-only.png"
                        alt="MovieHunt logo"
                        className="moviehunt-logo"
                    />
                    <span className="app-name">MovieHunt</span>
                </div>
                <div className="username-input-container">
                    <input
                        type="text"
                        className="username-input"
                        placeholder="Username"
                    />
                </div>
                <div className="password-input-container">
                    <input
                        type="text"
                        className="password-input"
                        placeholder="Password"
                    />
                </div>
                <div className="attempt-login-btn-container">
                    <div className="attempt-login-btn">
                        <span className="attempt-login-te">Login</span>
                    </div>
                </div>
                <div className="other-account-actions-container">
                    <div className="sign-up-option">
                        <span className="sign-up-persuasion-text">Don't have an account?</span>
                        <span className="sign-up-link">&nbsp;Sign up</span>
                    </div>
                    <div className="password-recovery-option">
                        <span className="recover-password-link">Recover password</span>
                    </div>
                </div>
            </div>
        )
    }
}
