/*
<input 
  v-model="value"
  :type="type"
  :id="id"
  :name="name"
  :placeholder="placeholder"
  class="a-input"
  >
*/

const _inputTypes = ["text", "email", "password", "checkbox"];

export default {
  name: "AdInput",
  data() {
    return {
      value: "",
    };
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
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: value => _inputTypes.includes(value),
    },
  },
};
