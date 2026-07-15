import "./GeneralInfo.css";

function GeneralInfo() {
  return (
    <section className="general-info">
      <h2>General Information</h2>

      <label>
        Name
        <input type="text" />
      </label>

      <label>
        Email
        <input type="email" />
      </label>

      <label>
        Phone
        <input type="tel" />
      </label>

      <button>Save</button>
    </section>
  );
}

export default GeneralInfo;