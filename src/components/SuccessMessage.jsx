function SuccessMsg({ email, onDismiss }) {
  return (
    <main className="success-message">
      <img src="/images/icon-success.svg" alt="Success Icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="dismiss-button" onClick={onDismiss}>
        Dismiss message
      </button>
    </main>
  );
}

export default SuccessMsg;
