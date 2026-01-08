function SignUpForm(props) {
  const { email, setEmail, onSubmit, error } = props;

  return (
    <form action="#" onSubmit={onSubmit} id="email-form" noValidate>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="email@company.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}

      <div className="subscribe-btn">
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </form>
  );
}

export default SignUpForm;
