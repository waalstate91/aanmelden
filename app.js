import React, { useState } from 'react';
import cn from 'classnames';

function App() {
  const [switched, setSwitched] = useState(false);

  const handleSwitch = () => {
    setSwitched(!switched);
  };

  return (
    <div className="local-container">
      <div className={cn('demo', { 's--switched': switched })}>
        <div className="demo__inner">
          <div className="demo__forms">
            <div className="demo__form">
              <div className="demo__form-content">
                {switched ? (
                  <SecretBunniesSignInForm />
                ) : (
                  <SecretBunniesSignUpForm />
                )}
              </div>
            </div>
          </div>
          <div className="demo__switcher">
            <div className="demo__switcher-inner">
              <div className="demo__switcher-content">
                <div className="demo__switcher-text">
                  <div>
                    <h3>New here?</h3>
                    <p>
                      Sign up and discover great amount of new opportunities!
                    </p>
                  </div>
                  <div>
                    <h3>One of us?</h3>
                    <p>
                      If you already have an account, just sign in. We've
                      missed you!
                    </p>
                  </div>
                </div>
                <button
                  className="demo__switcher-btn"
                  onClick={handleSwitch}
                >
                  <span className="animated-border" />
                  <span className="demo__switcher-btn-inner">
                    <span>Sign Up</span>
                    <span>Sign In</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecretBunniesSignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Voeg hier code toe om de aanmeldingsgegevens naar de server te sturen
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__heading">Time to feel like home</div>
      <label className="form__field">
        <span className="form__field-label">Name</span>
        <input className="form__field-input" type="text" />
      </label>
      <label className="form__field">
        <span className="form__field-label">Email</span>
        <input className="form__field-input" type="email" />
      </label>
      <label className="form__field">
        <span className="form__field-label">Password</span>
        <input className="form__field-input" type="password" />
      </label>
      <button type="submit" className="form__submit">
        Sign Up
      </button>
    </form>
  );
}

function SecretBunniesSignInForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Voeg hier code toe om de aanmeldingsgegevens naar de server te sturen
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__heading">Welcome back</div>
      <label className="form__field">
        <span className="form__field-label">Email</span>
        <input className="form__field-input" type="email" />
      </label>
      <label className="form__field">
        <span className="form__field-label">Password</span>
        <input className="form__field-input" type="password" />
      </label>
      <button type="submit" className="form__submit">
        Sign In
      </button>
    </form>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector('#main'));
