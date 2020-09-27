/*
  <form method="POST" class="o-signup-form" autocomplete="off">
    <ad-text tag="h1" content="Sign up!"></ad-text>

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
      id="username"
      name="username"
      label="Insert your username"
      placeholder="Username"></ad-input-field>

    <ad-input-field
      id="email"
      name="email"
      label="Email"
      input-type="email"
      placeholder="Insert your e-mail"></ad-input-field>

    <ad-input-field
      id="password"
      name="password"
      label="Password"
      input-type="password"
      placeholder="Insert your password here"></ad-input-field>

    <ad-input-field
      id="confirm-password"
      name="confirm-password"
      label="Confirm password"
      input-type="password"
      placeholder="Confirm your password"></ad-input-field>

    <ad-checkbox-field
      id="amazing-checkbox"
      name="amazing_checkbox"
      label="Privacy policy"></ad-checkbox-field>

    <ad-button type="submit" label="Join us!"></ad-button>
  </form>
*/

import AdText from "../atoms/Text";
import AdButton from "../atoms/Button";
import AdInputField from "../molecules/InputField";
import AdCheckboxField from "../molecules/CheckboxField";
import AdTextareaField from "../molecules/TextareaField";

export default {
  name: "AdSignupForm",
  components: {
    AdText,
    AdButton,
    AdInputField,
    AdCheckboxField,
    AdTextareaField,
  },
};
