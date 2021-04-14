import elementFormulari from "../components/elementFormulari.vue";
import submitButton from "../components/submitButton.vue";

export default {
  name: "Form-body",
  data() {
    return {
      validationInput: [],
      validationForm: true,
    };
  },
  components: {
    elementFormulari,
    submitButton,
  },
  methods: {
    GetValidationMethod(value) {
      this.validationInput.push(value);
    },
  },
};
