<script setup>
import { onMounted, reactive, ref } from "vue";
import ListPokemons from "../components/ListPokemons.vue";

let pokemons = reactive(ref());

onMounted (() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  .then(res => res.json())
  .then(res => pokemons.value = res.results);
})

</script>

<template>
  <main>
    <div class="container">
      

      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          
          <!-- <div class="card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuTi85NuBcVukHOL2N_GcK1-uVmTsyExWHQ&s" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div> -->
      </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <ListPokemons
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          :name="pokemon.name"
          />
        
        </div>      
    </div>     
    
    </div>
  </main>
</template>
