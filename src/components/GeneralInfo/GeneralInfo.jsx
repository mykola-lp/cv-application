import Input from "../Input/Input";
import Button from "../Button/Button";

import "./GeneralInfo.css";

function GeneralInfo() {
  return (
    <section className="general-info">
      <h2>General Information</h2>

      <Input
        id="name"
        label="Name"
        type="text"
      />

      <Input
        id="email"
        label="Email"
        type="email"
      />

      <Input
        id="phone"
        label="Phone"
        type="tel"
      />

      <Button type="button">
        Save
      </Button>
    </section>
  );
}

export default GeneralInfo;