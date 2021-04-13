<template>
    <div class="form-control">
        <label>{{label}}</label>
        <input  :type="type" 
                :placeholder="placeholder" 
                :id="id" 
                @blur="CheckInput"
                v-model="valueInput" >
        <p class="errorMessage" v-if="requireInput">Required</p> 
        <p class="errorMessage" v-else-if="alphaInput">You can only use letters</p>
        <p class="errorMessage" v-else-if="numberInput">You can only use numbers</p>
        <p class="errorMessage" v-else-if="emailInput">You should put a real email adress</p>
        <p class="errorMessage" v-else-if="passwordInput">The password sholud have between 6 and 13 letters, including capital letters and lower cases</p>
    </div>
</template>
<!--
<script>

export default {

    data(){
        return {
            valueInput:"",
            requireInput:false,
            alphaInput:false,
            numberInput:false,
            emailInput:false,
            passwordInput:false,
            matchingPasswords:false,
            correctPassword:"",
            validateOk:{
                name: this.valueInput,
                state:false,
                msm:''
            }
        }
    },
   props:[
       'label',
       'type',
       'placeholder',
       'id',
       'autofocus',
       'require',
       'alpha',
       'numbers',
       'emails',
       'passwords',
       'confirmPassword'
],
  methods:{
      CheckInput () {
       //required
        if (this.require) {
            if(this.valueInput === "") {
                this.requireInput = true;
            }else{
                this.requireInput = false;
            }
        // only letters
            if(this.alpha) {
                var letters = /^[A-Za-z]+$/;
            if(!this.valueInput.match(letters)) {
                this.alphaInput = true;
                this.validateOk.state = true;
                this.validateOk.msm = 'You can only use letters'
            }else{
                this.alphaInput = false;
                this.validateOk.state = false;
                this.validateOk.msm = '';
            }
        }  
        // only numbers 
          if (this.numbers) {
                var digits = /^[0-9]*$/;
            if (!this.valueInput.match(digits)) {
                this.numberInput = true;
                 this.validateOk.state = true;
                this.validateOk.msm = 'You can only use numbers'
            }else {
                this.numberInput = false;
                this.validateOk.state = false;
                this.validateOk.msm = '';
            }
        } 
        //email 
          if (this.emails) {
                var emails = /([a-zñ\d.-]+)@([a-zñ\d.-]+).([a-z]{2,})/gi;
            if (!this.valueInput.match(emails)) {
                this.emailInput = true;
                this.validateOk.state = true;
                this.validateOk.msm = 'You should put a real email adress'
            }else {
                this.emailInput = false;
                this.validateOk.msm = '';
            }
        } 
        //password 
         if (this.passwords) {
                var passwords = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,13})$/;
            if (!this.valueInput.match(passwords)) {
                this.passwordInput = true;
                this.validateOk.state = true;
                this.validateOk.msm = 'The password sholud have between 6 and 13 letters, including capital letters and lower cases'
                
            }else {
                this.passwordInput = false;
                let correctPassword = this.valueInput;
                console.log(correctPassword);
                this.validateOk.msm = '';
            }
        } 
        //password 2 
           if (this.confirmPassword) {
            if (!this.valueInput===this.correctPassword) {
                this.matchingPasswords = true;
                this.validateOk.state = true;
                this.validateOk.msm = 'The passwords should match'
               
            } else {
                this.matchingPasswords = false;
                 console.log(this.valueInput);
                 this.validateOk.msm = '';
            }
        }   
        } 
         this.$emit('GetValidation',this.validateOk);
      }
  }
}
</script>
<style scoped>
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
.form-control {
    margin-bottom: 10px;
    padding-bottom: 15px;
    position: relative;
    opacity: 0.7;
}
.form-control label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 20px;
}
.form-control input {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    padding: 10px;
    width: 60%;
    font-family: monospace;
    font-size: 15px;
    color: rgb(76, 192, 173);
}
.errorMessage{
    color: red;
    font-size: 12px;
    padding: -30px;
}

</style>
-->
<script src="../scripts/element-formulari.js"></script>
<style src="../styles/element-formulari.css" scoped></style>