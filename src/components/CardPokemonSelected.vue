<script setup>
const pokemon = defineProps(["name", "xp", "height", "img", "loading"])

</script>

<template>
    <div class="card CardPokemonSelected"
:class="loading? '' : 'animate__animated animate__flipInX'"
>
  <img 
  v-if="pokemon.name"
  :src="pokemon.img" 
  height="180"
  class="card-img-top pt-4" 
  :alt="pokemon.name">

  <img 
  v-else
  src="../assets/egg_pokemon.svg" 
  height="250"
  class="card-img-top pt-4" 
  alt="???">

  <div class="card-body">
    <h5 class="card-title text-center">{{ pokemon.name || '???' }}</h5>
    <hr>
    <div class="row">
      <section class="col">
        <strong>XP: </strong>
        <span>{{ pokemon.xp }}</span>
      </section>                
      <section class="col">
        <strong>Altura: </strong>
        <span>{{ pokemon.height }}</span>
      </section>        
    </div>
  </div>
</div>
</template>

<style scoped>

.CardPokemonSelected{
    height: 75vh;
    background: rgb(255,255,255);
    background: linear-gradient(80deg, rgba(252, 1, 1, 0.363) 0%, rgba(236, 110, 110, 0.8) 36%, rgba(187, 49, 49, 0.8) 100%);
    }

</style>