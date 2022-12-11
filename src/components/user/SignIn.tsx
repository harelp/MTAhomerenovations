// import React, { useEffect } from 'react';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Custom Imports
import { UserContext } from '../context/UserContext';
import { signInHandler } from './login.helper';

interface IInput {
  email: string;
  password: string;
}

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState<IInput>({} as IInput);
  const navigate = useNavigate();

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    const User: string | any = await signInHandler(input);
    setUser(User);
    navigate('/portal');
    console.log(User);
    if (user) {
      console.log('asd');
    }
  };

  // useEffect(() => {
  //   return () => {
  //     alert('logged out');
  //   };
  // }, []);

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
    </div>
  );
};

export default SignIn;
