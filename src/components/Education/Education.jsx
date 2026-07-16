import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

import useEditableForm from "../../hooks/useEditableForm";

import "./Education.css";

function Education() {
  const {
    values: educationInfo,
    isEditing,
    handleChange,
    toggleEditing,
  } = useEditableForm({
    schoolName: "",
    titleOfStudy: "",
    studyDate: "",
  });

  return (
    <Card title="Education" className="education">
      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="schoolName">School Name</label>

        {isEditing ? (
          <Input
            id="schoolName"
            name="schoolName"
            type="text"
            placeholder="КНУ імені Тараса Шевченка"
            value={educationInfo.schoolName}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{educationInfo.schoolName}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="titleOfStudy">Title of Study</label>

        {isEditing ? (
          <Input
            id="titleOfStudy"
            name="titleOfStudy"
            type="text"
            placeholder="Інженерія програмного забезпечення"
            value={educationInfo.titleOfStudy}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{educationInfo.titleOfStudy}</p>
        )}
      </div>

      <div className={`field ${!isEditing ? "field--readonly" : ""}`}>
        <label htmlFor="studyDate">Date of Study</label>

        {isEditing ? (
          <Input
            id="studyDate"
            name="studyDate"
            type="text"
            placeholder="Вересень 2022"
            value={educationInfo.studyDate}
            onChange={handleChange}
          />
        ) : (
          <p className="field-value">{educationInfo.studyDate}</p>
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

export default Education;