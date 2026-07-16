import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

import useEditableForm from "../../hooks/useEditableForm";

import "./GeneralInfo.css";

function GeneralInfo() {
  const {
    values: generalInfo,
    isEditing,
    handleChange,
    toggleEditing,
  } = useEditableForm({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <Card title="General Information" className="general-info">
      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
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

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
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

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
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
        onClick={toggleEditing}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Card>
  );
}

export default GeneralInfo;