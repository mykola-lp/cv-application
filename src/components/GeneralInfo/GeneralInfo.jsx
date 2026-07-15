import { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

import "./GeneralInfo.css";

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Card title="General Information" className="general-info">
      <div className="field">
        <label htmlFor="name">Name</label>

        {isEditing ? (
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Іван Петренко"
            value={generalInfo.name}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{generalInfo.name}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>

        {isEditing ? (
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ivan.petrenko@gmail.com"
            value={generalInfo.email}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{generalInfo.email}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>

        {isEditing ? (
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+38 (099) 123-4567"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{generalInfo.phone}</p>
        )}
      </div>

      <Button
        type="button"
        onClick={handleButtonClick}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Card>
  );
}

export default GeneralInfo;