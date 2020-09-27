/*
  <div class="m-textarea-field">
    <ad-text tag="label" :for="id" :content="label"></ad-text>
    <ad-textarea 
      :id="id"
      :name="name"
      :placeholder="placeholder"
      type="text"></ad-textarea>
  </div>
*/

import AdText from "../atoms/Text";
import AdTextarea from "../atoms/Textarea";

export default {
  name: "TextareaField",
  components: {
    AdText,
    AdTextarea,
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
  },
};
