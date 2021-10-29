import React from "react";
import { InputContainer, TextAreaComponent } from "./FooterElements";
import { useForm, Form } from "./useForm";
import Controls from "../Controls/Controls";

const initialValues = {
  fullName: "",
  emailAddress: "",
  message: "",
};

function ContactForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <InputContainer>
        <Controls.Input
          name="fullName"
          label="Full Name*"
          value={values.fullName}
          type="text"
          onChange={handleInputChange}
        />

        <Controls.Input
          name="emailAddress"
          label="Email Address*"
          value={values.emailAddress}
          type="email"
          onChange={handleInputChange}
        />
      </InputContainer>
      <TextAreaComponent>
        <Controls.TextArea />
        <Controls.Button
          size="large"
          color="primary"
          text="Send Message"
          variant="contained"
        />
      </TextAreaComponent>
    </Form>
  );
}

export default ContactForm;
