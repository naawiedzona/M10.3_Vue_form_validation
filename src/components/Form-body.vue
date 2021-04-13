<template>
<div>
    <form action="" id="form" @submit.prevent="submit">
        <elementFormulari
            :label="'Name:'"
            :type="'text'"
            :placeholder="'name'"
            :id="'username'"
            :require=true
            :alpha=true>
        </elementFormulari>

         <elementFormulari
            :label="'Phone:'"
            :type="'text'"
            :placeholder="'phone number'"
            :id="'phonenumber'"
            :require=true
            :numbers=true>
        </elementFormulari>

        <elementFormulari
            :label="'Post code:'"
            :type="'text'"
            :placeholder="'post code'"
            :id="'post'"
           :require=true
           :numbers=true>
        </elementFormulari>

        <elementFormulari
            :label="'E-mail:'"
            :type="'email'"
            :placeholder="'user@domain.com'"
            :id="'email'"
            :require=true
            :emails=true>
        </elementFormulari>

        <elementFormulari
            :label="'Password:'"
            :type="'password'"
            :placeholder="'password'"
            :id="'password'"
            :require=true
            :passwords=true>
        </elementFormulari>

        <elementFormulari
            :label="'Repeat your password:'"
            :type="'password'"
            :placeholder="'repeat your password'"
            :id="'password2'"
            :require=true
            :confirmPassword=true>
        </elementFormulari>

        <!--     SUBMIT BUTTON     -->
        <submitButton 
            :type="'submit'"
            :id="'btn-send'"
            :value="'Register'"
            :sendForm=true
            :validationInput="validationInput">
        </submitButton> 
    </form>
</div>  
</template>
<!--
<script>
import elementFormulari from './elementFormulari.vue';
import submitButton from './submitButton.vue';

export default {
    name:'Form-body',
    data(){
        return{
          validationInput: [],
          validationForm: true
        }
    },
    components:{
        elementFormulari,
        submitButton
    },
    methods:{
        submit () {
            if(!this.validationForm) {
                console.log("submit padre function")
            }
        },
        GetValidation(value) {
            this.validationInput.push(value);
            console.log("get validation function")
        }
    }
}
</script>
<style scoped>
</style>
-->
<script src="../scripts/form-body.js"></script>
<style src="../styles/form-body.css" scoped></style>