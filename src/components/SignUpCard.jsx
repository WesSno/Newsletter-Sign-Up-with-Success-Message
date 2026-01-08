import SignUpForm from "./SignUpForm";

function SignUpCard({ email, setEmail, onSubmit, error }) {
  return (
    <div className="sign-up-card">
      <div className="content">
        <div className="illustration-image">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/illustration-sign-up-desktop.svg"
            />
            <source
              media="(min-width: 600px)"
              srcSet="/images/illustration-sign-up-tablet.svg"
            />
            <img
              src="/images/illustration-sign-up-mobile.svg"
              alt="Sign Up"
              className="responsive image"
            />
          </picture>
        </div>
        <div className="text-section">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className="checked-items">
            <label htmlFor="checkbox" className="checkbox">
              <input type="checkbox" checked="true" />
              Product discovery and building what matters
              <span className="check"></span>
            </label>
            <label htmlFor="checkbox" className="checkbox">
              <input type="checkbox" checked="true" />
              Measuring to ensure updates are a success
              <span className="check"></span>
            </label>
            <label htmlFor="checkbox" className="checkbox">
              <input type="checkbox" checked="true" />
              And much more!
              <span className="check"></span>
            </label>
          </div>

          <SignUpForm
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmit}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;
