<template>
    <div class="form-control">
        <label>{{label}}</label>
        <input  :type="type" 
                :placeholder="placeholder" 
                :id="id" 
                @input="$emit('input', $event.target.value)" 
                @blur="CheckName"
                :name="nameModel"
                :v-model="v-model" >

       <!--  
           
        <p :class="class"
            :v-if="vIf"
        >Required</p> 
        
        -->


        
        <!-- <p class="errorMessage" v-if="!$v.nameModel.required">Required</p>
        <p class="errorMessage" v-if="!$v.nameModel.alpha">You can't use numbers</p>
        <p class="errorMessage" v-else-if="(!$v.nameModel.minLength  || !$v.nameModel.maxLength)">Name should have between 6 and 13 letters</p> -->
            
    </div>
</template>
<script>
import { required, minLength, between, maxLength, email, alpha, sameAs } from 'vuelidate/lib/validators';

export default {
   props:[
       'label',
       'type',
       'placeholder',
       'id',
       'autofocus',
       'v-model',
       'name'
  ],
    validations: {
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
  },
  methods:{
      CheckName(e){
            return e;
            //$v.phoneModel.$touch();
            
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

</style>