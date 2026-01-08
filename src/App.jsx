import { useState } from "react";
import SignUpCard from "./components/SignUpCard";
import SuccessMsg from "./components/SuccessMessage";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Valid email required");
      setIsSubmitted(false);
    } else {
      setError("");
      setIsSubmitted(true);
    }
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <main className="App">
      {isSubmitted ? (
        <SuccessMsg email={email} onDismiss={handleDismiss} />
      ) : (
        <SignUpCard
          emai={email}
          setEmail={setEmail}
          error={error}
          onSubmit={handleSubmit}
        />
      )}
    </main>
  );
}

export default App;
