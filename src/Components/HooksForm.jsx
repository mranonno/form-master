import useInputState from "../hooks/useInputState";

const HooksForm = () => {
    const nameState=useInputState('Das')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameState.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nameState}
          className="border rounded-lg py-2 px-4"
          placeholder="name"
          type="text"
          name="name"
        />
        <br />
        <input
          className="border rounded-lg py-2 px-4 mt-2"
          placeholder="email"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
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

export default HooksForm;
