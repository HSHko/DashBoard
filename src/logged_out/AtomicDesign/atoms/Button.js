/*
  <button class="a-button" :type="type">
    {{label}}
  </button>
*/

const _buttonTypes = ["submit", "button"];

export default {
  name: "AdButton",
  props: {
    type: {
      type: String,
      required: true,
      default: "button",
      validator: value => _buttonTypes.includes(value),
    },
    label: {
      type: String,
      required: true,
    },
  },
};
