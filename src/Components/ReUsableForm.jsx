const ReUsableForm = ({ formTitle, submitBtnText = "Submit", children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {children}
        <h3>{formTitle}</h3>
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
          value={submitBtnText}
        />
      </form>
    </div>
  );
};

export default ReUsableForm;
