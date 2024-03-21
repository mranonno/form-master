const SimpleForm = () => {
    return (
        <div>
            <form>
                <input className="border rounded-lg py-2 px-4" placeholder="Input" type="text" />
                <br />
                <input className="border rounded-lg py-2 px-4 mt-2" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;