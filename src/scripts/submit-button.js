export default {
    
    methods: {
        SubmitForm () {
            alert(this.validationInput.name)
            for(let i = 0;i < this.validationInput.length;i++) {
                if(this.validationInput.state) {
                    alert("hola")
                }
            }
        }
    },
    props: [
        'type',
        'id',
        'value',
        'sendForm',
        'validationInput'
    ]
}