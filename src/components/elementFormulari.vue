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

<script>
//import { required, minLength, between, maxLength, email, alpha, sameAs } from 'vuelidate/lib/validators';

export default {

    data(){
        return {
            valueInput:"",
            requireInput:false,
            alphaInput:false,
            numberInput:false,
            emailInput:false,
            passwordInput:false,
            matchingPasswords:false
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
       'passwords'
  ],
    /* validations: {
    nameModel: {
        required,
        //minLength: minLength(this.minLength),
        //maxLength: maxLength(this.maxLength),
        alpha
    },
    phoneModel: {
        required
    },
     postModel: {
        required,
        between: between(20, 30)
    },
     emailModel: {
        required,
        email
    },
     passwordModel: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(13)
    },
     passwordModel2: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(13),
        sameAsPassword:sameAs('passwordModel')
    }
  }, */
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
            }else{
                this.alphaInput = false;
            }
        }  
        // only numbers 
          if (this.numbers) {
                var digits = /^[0-9]*$/;
            if (!this.valueInput.match(digits)) {
                this.numberInput = true;
            }else {
                this.numberInput = false;
            }
        } 
        //email 
          if (this.emails) {
                var emails = /([a-zñ\d.-]+)@([a-zñ\d.-]+).([a-z]{2,})/gi;
            if (!this.valueInput.match(emails)) {
                this.emailInput = true;
            }else {
                this.emailInput = false;
            }
        } 
        //password 
         if (this.passwords) {
                var passwords = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,13})$/;
            if (!this.valueInput.match(passwords)) {
                this.passwordInput = true;
            }else {
                this.passwordInput = false;
            }
        } 
        //password 2  ??????????
         /*  if(this.confirmPassword && this.password){
            if(!this.valueInput!=) {
                this.matchingPasswords = true;
            }else{
                this.matchingPasswords = false;
            }
        }  */
        }  
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