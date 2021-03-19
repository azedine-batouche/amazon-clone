import React, {useState, useEffect} from 'react';
import './LoginPage.css';
import { Link, useHistory } from "react-router-dom";
import Button from '../../components/button/Button';
import { auth } from '../../config/firebase';
import Error from '../../components/error/Error';
import Input from '../../components/input/Input';
import { useFormik } from 'formik';

function LoginPage() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [registerActive, setregisterActive] = useState(false);
    
    const validationForm = dataValidation => {
        const errors = {};
        console.log(registerActive);
        
        if (!dataValidation.email) {
            errors.email = 'Please enter a email address';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataValidation.email)) {
            errors.email = 'Invalid Email address';
        }
        if (!dataValidation.password) {
            errors.password = 'Please enter your password';
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(dataValidation.password)) {
            errors.password = 'Your password must contain: 8 characters, 1 numeric character, 1 lowercase, 1 uppercase, 1special character';
        }
        if (registerActive) {
            if (!dataValidation.confirmPassword) {
                errors.confirmPassword = 'Please enter a confirmation password';
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(dataValidation.confirmPassword)) {
                errors.confirmPassword = 'Your password must contain: 8 characters, 1 numeric character, 1 lowercase, 1 uppercase, 1special character';
            }
            else if (dataValidation.password !== dataValidation.confirmPassword) {
                errors.confirmPassword = "password confirm field don't the password field ";
            }
        }
        return errors;
    }

    const signIn = e => {
        e.preventDefault();
        setregisterActive(false);
        if (formik.isValid) {
            auth.signInWithEmailAndPassword(formik.values.email, formik.values.password)
                .then(auth => {
                    history.push('/')
                })
                .catch(error => setError(error.message));
        }
    };
    const register = e => {
        e.preventDefault();
        setregisterActive(true);
        if (formik.isValid) {
                auth.createUserWithEmailAndPassword(formik.values.email, formik.values.password)
                    .then((auth) => {
                        if (auth) {
                            history.push('/')
                        }
                    })
                    .catch(error => setError(error.message)) 
        }
    };

 

    const formik = useFormik({
        initialValues: registerActive ? { email: '', password: '', confirmPassword: '' } : { email: '', password: '' },
        validate: validationForm,
        onSubmit: registerActive  ? register : signIn,
    });

    let errorComponent = error ? <Error message={error} /> : null;
    let confirmationPasswordInput = registerActive ?
        <Input label="Entrez le mot de passe à nouveau"
            type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        error={ formik.touched.confirmPassword && formik.errors.confirmPassword  ?  formik.errors.confirmPassword  : null} autoFocus="false" /> : null;
    
    let buttonSignIn = registerActive ? <Button content="Create you Amazon account" type="submit" style="100" /> : <Button  content="Sign In" type="submit" click={signIn} style="100" />  
    let buttonRegister = registerActive ?  <Button  content="Sign In" type="submit" click={signIn} />   : <Button content="Create you Amazon account" type="submit" click={register} /> ;

    return (
        <div className="login">
             <Link to="/">
              <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="login_logo" />
            </Link>
        {errorComponent}         
        <div className="login__container">
                <h1>Sigin-in</h1>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        label="E-mail"
                        type="text"
                        autoFocus="true"
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        autoComplete="true"
                        onBlur= {formik.handleBlur('email')}
                        error={ formik.touched.email && formik.errors.email  ?  formik.errors.email  : null}
                    />
                    <Input 
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        error={ formik.touched.password && formik.errors.password  ?  formik.errors.password  : null}
                    />
                    {confirmationPasswordInput}
                    { buttonSignIn }
                </form>
                <p>
                    By signing-in you a free to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy notice, our Cookies Notice and Internest-Based Ads Notice.
                </p>
                { buttonRegister }
            </div>
            <div className="login__divider"> </div>
            </div>
    )
}

export default LoginPage
