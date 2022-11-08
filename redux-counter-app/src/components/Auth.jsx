import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/features/authSlice';

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
