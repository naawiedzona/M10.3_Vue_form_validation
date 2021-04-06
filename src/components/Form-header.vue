<template>
    <div id="form-header">
            <h1 id="form-title">Register here</h1>
            <button id="btn-close" class="btn">x</button>
    </div>
</template>

<script>
export default {
    name:'Form-header',
    components:{
        
    }
}
</script>
<style scoped>
#form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#form-title {
    color: rgb(76, 192, 173);
    flex:1;
    
}
.btn {
    font-size: 20px;
    border-radius: 4px;
    padding: 6px;
}
#btn-close {
    background-color: #cc444b;
    color: rgba(255, 255, 255, 0.685);
    border: 1px solid #cc444b;
    margin-right: 20px;
}
#btn-close:hover{
    color: #cc444b;
    background-color: rgba(255, 255, 255, 0.685);
}
</style>