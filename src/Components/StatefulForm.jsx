import { useState } from "react";

const StatefulForm = () => {
    const [error, setError]=useState(null)
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
      e.preventDefault();
      if (password.length < 3) {
          setError('Please provide min 4 digit')
      }
      else {
          setError('');
      }
    console.log(name, email, password);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          className="border rounded-lg py-2 px-4"
          placeholder="name"
          type="text"
          name="name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="border rounded-lg py-2 px-4 mt-2"
          placeholder="email"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="border rounded-lg py-2 px-4 mt-2"
          placeholder="password"
          type="password"
          name="password"
                  id="" required
        />
        <br />
        <input
          className="border rounded-lg py-2 px-4 mt-2"
          type="submit"
          value="Submit"
              />
              <p>{error}</p>
      </form>
    </div>
  );
};

export default StatefulForm;
