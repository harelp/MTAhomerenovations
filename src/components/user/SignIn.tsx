// import React, { useEffect } from 'react';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, Bounce } from 'react-toastify';

// Custom Imports
import { UserContext } from '../context/UserContext';
import { signInHandler } from './login.helper';
import { isLoading, loaded } from './toast.helper';

interface IInput {
  email: string;
  password: string;
}

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState<IInput>({} as IInput);
  const navigate = useNavigate();

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    isLoading('Logging In');
    const User: string | any = await signInHandler(input);
    if (User?.null) {
      loaded(User.errorCode, 'error');
    } else {
      setUser(User);
      loaded('Success', 'success');
      navigate('/portal');
    }
  };

  const handleChange = (evt: any) => {
    setInput({ ...input, [evt.target.id]: evt.target.value });
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <form className="login" onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-container">
            <input id="email" type="text" placeholder="Email" required onChange={handleChange} />

            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button className="btn_submit log" type="submit">
              GO <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" transition={Bounce} />
    </div>
  );
};

export default SignIn;
