<template>
    <div class="submitButton">
         <input class="btn"  
                :type="type"  
                :value="value"
                :id="id"
                @click="SubmitForm">
    </div>
</template>
<!--
<script>
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
</style>
-->
<script src="../scripts/submit-button.js"></script>
<style src="../styles/submit-button.css" scoped></style>