<template>

    <header class="header">
  
        <form action="" @submit.prevent="handleSubmit">

            <input type="url" required v-model="url" placeholder="Insert url / feed">
            <button type="submit">Add Source</button>

        </form>
      
    </header>

</template>
  
<script setup>

    import {ref} from 'vue';
    import {useFeedStore} from "../stores/store";

    const url = ref('');
    const store = useFeedStore();

    function handleSubmit(){

        if(url.value){

            store.registerNewSource(url.value);
            url.value = '';

        }

    }
  
</script>
  
<style lang="scss" scoped>

.header{
    background-color: black;
    grid-area: header;
    justify-self: stretch;

    display: flex;
    justify-content: center;

    padding: 10px;
}

form{

    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    input{
        border: none;
        width: 40rem;
        padding: 1rem;
    }

    button{

        border: none;
        background-color: #1283a9;
        color: white;
        padding: 5px 10px;
        cursor: pointer;
        transition: all 300ms linear;
    }

    button:hover{
        background-color: #0ca1d3;
    }

}
  
</style>