export default {
  methods: {
    SubmitForm(e) {
      e.preventDefault();
      alert("alert misterioso");
       for (let i = 0; i < this.validationInput.length; i++) {
        if (this.validationInput.state) {
          alert("hola el for funciona");
        } 
      }
    },
  },
  props: ["type", "id", "value", "sendForm", "validationInput"],
};
