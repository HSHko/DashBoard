/*
  <div class="m-input-field">
    <ad-text tag="label" :for="id" :content="label"></ad-text>
    <ad-input 
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="inputType"></ad-input>
  </div>
*/

import AdText from "../atoms/Text";
import AdInput from "../atoms/Input";

const _inputTypes = ["text", "email", "password"];

export default {
  name: "InputField",
  components: {
    AdText,
    AdInput,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    inputType: {
      type: String,
      required: false,
      default: "text",
      validator: value => _inputTypes.includes(value),
    },
  },
};
