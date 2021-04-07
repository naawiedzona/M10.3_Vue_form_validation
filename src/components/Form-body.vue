<template>
<div>
    <form action="" id="form" @submit.prevent="submit">
        <elementFormulari
            :label="'Name:'"
            :type="'text'"
            :placeholder="'name'"
            :id="'username'"
            v-model="nameModel"
            :name="nameModel"
        >
        </elementFormulari>
        <elementFormulari
            :label="'Phone:'"
            :type="'number'"
            :placeholder="'phone number'"
            :id="'phonenumber'"
            vModel="phoneModel"
            :name="phoneModel"
        >
        </elementFormulari>
        <elementFormulari
            :label="'Post code:'"
            :type="'text'"
            :placeholder="'post code'"
            :id="'post'"
            vModel="postModel"
            :name="postModel"
        >
        </elementFormulari>
        <elementFormulari
            :label="'E-mail:'"
            :type="'text'"
            :placeholder="'user@domain.com'"
            :id="'email'"
            vModel="emailModel"
            :name="emailModel"
        >
        </elementFormulari>
        <elementFormulari
            :label="'Password:'"
            :type="'password'"
            :placeholder="'password'"
            :id="'password'"
            vModel="passwordModel"
            :name="passwordModel"
            :class="errorMessage"
            vIf="'!$v.nameModel.required'"
        >
        </elementFormulari>
        <elementFormulari
            :label="'Repeat your password:'"
            :type="'password'"
            :placeholder="'repeat your password'"
            :id="'password2'"
            vModel="passwordModel2"
            :name="passwordModel2"
        >
        </elementFormulari>

    <div>
        <input type="submit" value="Register" class="btn" id="btn-send"> 
    </div>
        








   <!--  <div class="form-control">
        <label>Name:</label>
        <input type="text" placeholder="name" id="username" autofocus v-model="nameModel" @blur="$v.nameModel.$touch()" >
        <p class="errorMessage" v-if="!$v.nameModel.required">Required</p>
        <p class="errorMessage" v-if="!$v.nameModel.alpha">You can't use numbers</p>
        <p class="errorMessage" v-else-if="(!$v.nameModel.minLength  || !$v.nameModel.maxLength)">Name should have between 6 and 13 letters</p>
    
    </div>
    <div class="form-control">
        <label>Phone:</label>
        <input type="text" placeholder="phone number" id="phonenumber"  v-model.number="phoneModel" @blur="$v.phoneModel.$touch()" @keypress="onlyNumber">
        <p class="errorMessage" v-if="!$v.phoneModel.required">Required</p>
    </div>
    <div class="form-control">
        <label>Post code:</label>
        <input type="text" placeholder="post" id="post"  v-model.number="postModel" @blur="$v.postModel.$touch()" @keypress="onlyNumber">
        <p class="errorMessage" v-if="!$v.postModel.required">Required</p>
    </div>
    <div class="form-control">
        <label>E-mail:</label>
        <input type="text" placeholder="user@domain.com" id="email"  v-model="emailModel" @blur="$v.emailModel.$touch()">
        <p class="errorMessage" v-if="!$v.emailModel.required">Required</p>
        <p class="errorMessage" v-else-if="!$v.emailModel.email">Put your email adress</p>
    </div>
    <div class="form-control">
            <label>Password:</label>
            <input type="password" placeholder="password" id="password"  v-model="passwordModel">
            <p class="errorMessage" v-if="!$v.passwordModel.required">Required</p>
            <p class="errorMessage" v-else-if="(!$v.passwordModel.minLength  || !$v.passwordModel.maxLength)">Password should have between 6 and 13 digits</p>
    </div>
    <div class="form-control">
            <label>Repeat your password:</label>
            <input type="password" placeholder="repeat your password" id="password2"  v-model="passwordModel2">
            <p class="errorMessage" v-if="!$v.passwordModel.required">Required</p>
            <p class="errorMessage" v-else-if="!$v.passwordModel2.sameAsPassword">Passwords should match</p>
    </div> 
     <div>
        <input type="submit" value="Register" class="btn" id="btn-send"> 
    </div>  -->
    </form>
</div>  
</template>

<script>

//import { required, minLength, between, maxLength, email, alpha, sameAs } from 'vuelidate/lib/validators';
import elementFormulari from './elementFormulari.vue';
export default {
    name:'Form-body',
    data(){
        return{
           nameModel:"",
           phoneModel:"",
           postModel:"",
           emailModel:"",
           passwordModel:"",
           passwordModel2:""   
        }
    },
    components:{
        elementFormulari
    },
    /* validations: {
    nameModel: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(13),
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
  methods: {
    onlyNumber ($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault();
        }
    },
    submit() {
       this.$v.$touch();
       if (this.$v.$invalid) {
           alert("hay un error")
       }else{
           alert("todo bien")
       }
    }
  }
}
</script>
<style scoped>

.btn {
    font-size: 20px;
    border-radius: 4px;
    padding: 8px;
}

#btn-send {
    width: 60%;
    margin-bottom: 30px;
    background-color:rgb(76, 192, 173);
    border: 1px solid rgb(76, 192, 173);
    color: rgba(255, 255, 255, 0.685);
}
#btn-send:hover{
    color: rgb(76, 192, 173);
    background-color: rgba(255, 255, 255, 0.685);
}

.errorMessage{
    color: red;
    font-size: 12px;
    padding: -30px;
}
</style>