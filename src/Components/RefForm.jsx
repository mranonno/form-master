import { useEffect, useRef } from "react";

const RefForm = () => {
    useEffect(() => {
        nameRef.current.focus()
    },[])
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="border rounded-lg py-2 px-4"
          placeholder="name"
          type="text"
          name="name"
        />
        <br />
        <input
          ref={emailRef}
          className="border rounded-lg py-2 px-4 mt-2"
          placeholder="email"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          ref={passwordRef}
          className="border rounded-lg py-2 px-4 mt-2"
          placeholder="password"
          type="password"
          name="password"
          id=""
        />

        <br />
        <input
          className="border rounded-lg py-2 px-4 mt-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default RefForm;
