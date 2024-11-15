import React, { useReducer, memo } from "react";

// Define the type for the form data
type RegistrationFormData = {
  name: string;
  email: string;
  stageName: string;
  phoneNumber: string;
  peopleCount: number;
};

// Define actions for the reducer
type FormAction =
  | {
      type: "SET_FIELD";
      field: keyof RegistrationFormData;
      value: string | number;
    }
  | { type: "RESET_FORM" };

// Reducer function to manage form state
const formReducer = (
  state: RegistrationFormData,
  action: FormAction
): RegistrationFormData => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialFormData;
    default:
      return state;
  }
};

// Initial form state
const initialFormData: RegistrationFormData = {
  name: "",
  email: "",
  stageName: "",
  phoneNumber: "",
  peopleCount: "" as unknown as number, // Set to an empty string initially
};

// Optimized input component to prevent unnecessary re-renders
const InputField = memo(
  ({
    id,
    label,
    type,
    value,
    onChange,
  }: {
    id: string;
    label: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
);

const RegistrationForm = () => {
  // Use useReducer to manage form state
  const [formData, dispatch] = useReducer(formReducer, initialFormData);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    dispatch({
      type: "SET_FIELD",
      field: name as keyof RegistrationFormData,
      value:
        name === "peopleCount" && value === ""
          ? ""
          : type === "number"
            ? Number(value)
            : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      peopleCount: formData.peopleCount || 0, // Ensure peopleCount is 0 if empty
    };

    console.log("Form Submitted", formattedData);
    dispatch({ type: "RESET_FORM" }); // Reset form after submission
  };

  return (
    <div>in RegistrationForm
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Create an Account</h1>

        {/* Input fields */}
        <InputField
          id="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          id="stageName"
          label="Stage Name"
          type="text"
          value={formData.stageName}
          onChange={handleChange}
        />
        <InputField
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          id="peopleCount"
          label="People Count"
          type="number"
          value={formData.peopleCount}
          onChange={handleChange}
        />

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
