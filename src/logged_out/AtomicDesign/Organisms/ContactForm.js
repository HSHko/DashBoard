/*
  <form method="POST" class="o-contact-form" autocomplete="off">
    <ad-text tag="h1" content="Contact us!"></ad-text>

    <ad-input-field
      id="name"
      name="name"
      label="Insert your name"
      placeholder="Name"></ad-input-field>

    <ad-input-field
      id="surname"
      name="surname"
      label="Insert your surname"
      placeholder="Surname"></ad-input-field>

    <ad-input-field
      id="email"
      name="email"
      label="Email"
      input-type="email"
      placeholder="Insert your e-mail"></ad-input-field>

    <ad-textarea-field
      id="textarea"
      name="textarea"
      label="Leave a message"
      placeholder="This post is amazing!"></ad-textarea-field>

    <ad-checkbox-field
      id="checkbox"
      name="checkbox"
      label="Privacy policy"></ad-checkbox-field>

    <ad-button type="submit" label="Submit your request"></ad-button>
  </form>
*/

import AdText from "../atoms/Text";
import AdButton from "../atoms/Button";
import AdInputField from "../molecules/InputField";
import AdCheckboxField from "../molecules/CheckboxField";
import AdTextareaField from "../molecules/TextareaField";

export default {
  name: "AdContactForm",
  components: {
    AdText,
    AdButton,
    AdInputField,
    AdCheckboxField,
    AdTextareaField,
  },
};
