<template>
    <div class="submitButton">
         <input class="btn"  
                :type="type"  
                :value="value"
                :id="id"
                @click="SubmitForm">
    </div>
</template>
<script>
export default {
    methods: {
        SubmitForm () {
            alert("submit form")
        }
    },
    props: [
        'type',
        'id',
        'value',
        'sendForm'
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