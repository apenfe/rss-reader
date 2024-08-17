<template>

    <main class="main">

        <h1 v-if="store.current.source">{{ store.current.source.name }}</h1>
  
        <details v-for="post in store.current.items" :key="post.title">

            <summary>{{post.title}}</summary>
            <div v-html="post.content"></div>

        </details>
      
    </main>

</template>
  
<script setup>

    import { useFeedStore } from '../stores/store';

    const store = useFeedStore();
  
</script>
  
<style lang="scss" scoped>

.main{
    background-color: #213442;
    color: white;
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 2rem 8rem 2rem 4rem;
    font-size: 1.6rem;
}

summary{
    padding: 5px;
    cursor: pointer;
    border-radius: 0.5rem;
}

summary:hover{
    background-color: rgb(174, 221, 255);
    color: black;
}
  
</style>

<style lang="scss">

img, figure, video {
    margin: 0 auto;
    max-width: min(100%, 50rem);
    display: block;
}

a{
    color: yellowgreen;
}
  
</style>