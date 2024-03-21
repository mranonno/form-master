const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
      const nameField=e.target.name.value;
      const emailField = e.target.email.value;
      console.log(nameField,emailField);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
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
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
