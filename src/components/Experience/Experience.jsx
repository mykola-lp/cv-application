import { useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

import "./Experience.css";

function Experience() {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    fromDate: "",
    untilDate: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setExperienceInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Card title="Practical Experience" className="experience">
      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="companyName">Company Name</label>

        {isEditing ? (
          <Input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="ТОВ «ТехСофт»"
            value={experienceInfo.companyName}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{experienceInfo.companyName}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="positionTitle">Position Title</label>

        {isEditing ? (
          <Input
            id="positionTitle"
            name="positionTitle"
            type="text"
            placeholder="Frontend розробник"
            value={experienceInfo.positionTitle}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{experienceInfo.positionTitle}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="responsibilities">Main Responsibilities</label>

        {isEditing ? (
          <Input
            id="responsibilities"
            name="responsibilities"
            type="text"
            placeholder="Розробка інтерфейсів користувача та підтримка вебзастосунків"
            value={experienceInfo.responsibilities}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{experienceInfo.responsibilities}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="fromDate">From</label>

        {isEditing ? (
          <Input
            id="fromDate"
            name="fromDate"
            type="text"
            placeholder="Січень 2023"
            value={experienceInfo.fromDate}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{experienceInfo.fromDate}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="untilDate">Until</label>

        {isEditing ? (
          <Input
            id="untilDate"
            name="untilDate"
            type="text"
            placeholder="Теперішній час"
            value={experienceInfo.untilDate}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{experienceInfo.untilDate}</p>
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

export default Experience;