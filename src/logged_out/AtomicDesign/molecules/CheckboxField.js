/*
  <div class="m-checkbox-field">
    <ad-input :id="id" :name="name" type="checkbox"></ad-input>
    <ad-text tag="label" :for="id" :content="label"></ad-text>
  </div>
*/

import AdText from "../atoms/Text";
import AdInput from "../atoms/Input";

export default {
  name: "CheckboxField",
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
  },
};
