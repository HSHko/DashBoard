/*
  <component :is="tag" :for="getForProp" class="a-text">
    {{content}}
  </component>
*/

const _tagTypes = ["h1", "h2", "h3", "p", "span", "label"];

export default {
  name: "AdText",
  props: {
    tag: {
      type: String,
      required: true,
      default: "span",
      validator: value => _tagTypes.includes(value),
    },
    content: {
      type: String,
      required: true,
    },
    for: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    // Rendered only if the tag is a label
    getForProp() {
      return ["label"].includes(this.tag) ? this.for : null;
    },
  },
};
