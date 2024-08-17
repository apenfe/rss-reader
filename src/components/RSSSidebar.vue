<template>

    <div class="sidebar">
  
        <div v-for="(source, index) in store.sources" :key="index">

            <a href="#" @click.prevent=" () => handleClick(source)">{{ source.name }}</a>

        </div>
      
    </div>

</template>
  
<script setup>

    import {useFeedStore} from "../stores/store";

    const store = useFeedStore();

    function handleClick(source){

        store.loadSource(source);
        
    }
  
</script>
  
<style lang="scss" scoped>

.sidebar{
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: #1B425B;
}

.sidebar a{
    text-align: center;
    color: #4594cd;
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    transition: all 300ms ease;
    font-size: 2rem;
    border-bottom: 1px solid white;
}

.sidebar a:hover{
    background-color: white;
}
  
</style>