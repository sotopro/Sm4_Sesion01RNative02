import React from 'react'

const Login = (props) => {
    const { hasAccount, setHasAccount } = props
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={} onChange={e => e.target.value} />
                <p className="errorMsg">mensaje de error</p>
                <label>Password</label>
                <input type="text" required value={} onChange={e => e.target.value} />
                <p className="errorMsg">mensaje de error password</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={}>Sign in</button>
                            <p>don't have an account ? <span onClick={() => setHasAccount(hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={}>Sign up</button>
                        <p>have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;