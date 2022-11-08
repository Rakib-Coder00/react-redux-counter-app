import React from 'react'
import { authActions } from '../redux/store'
import { useDispatch } from 'react-redux';

const Auth = () => {
    const dispatch = useDispatch()
    const submitHandler = () => {
        dispatch(authActions.login())
    }
    return (
        <main className='auth'>
            <section>
                <form onSubmit={submitHandler}>
                    <div className='control'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>
                    <div className='control'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    )
}

export default Auth
