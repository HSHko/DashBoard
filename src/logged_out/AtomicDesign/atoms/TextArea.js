/*
  <textarea
    v-model="value"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    class="a-textarea">
  </textarea>
*/

export default {
  name: "AdTextarea",
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
  },
};
