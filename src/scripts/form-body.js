import elementFormulari from '../components/elementFormulari.vue';
import submitButton from '../components/submitButton.vue';


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