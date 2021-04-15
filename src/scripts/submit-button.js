export default {
  methods: {
    SubmitForm(e) {
      e.preventDefault();
      alert("wait to submit form... ");
      let validations = [];
      for (let i = 0; i < this.validationInput.length; i++) {
        validations.push(this.validationInput[i].state);

        //  if (this.validationInput.state) {
        //    alert("el campo  correcto");
        //  }
      }
      alert(validations);
    },
  },
  props: ["type", "id", "value", "sendForm", "validationInput"],
};
