import { useState } from "react";

function useEditableForm(initialState) {
  const [values, setValues] = useState(initialState);

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return {
    values,
    isEditing,
    handleChange,
    toggleEditing,
  };
}

export default useEditableForm;