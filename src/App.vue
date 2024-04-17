<script setup>
import {ref} from 'vue'
import { RouterView } from 'vue-router';

let num = ref(0)

</script>

<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"> 
      <img src="https://images.tcdn.com.br/img/img_prod/906697/squirtle_bro_361_1_4bed790bd1b747451226541a5d904bf1.png" alt="Bootstrap" width="40" height="50">     
      PokeVue
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- content -->
<div class="main">
  <router-view></router-view>
</div>

<footer class="bg-primary text-light">
  <div> Design in {{ new Date().getFullYear() }}.</div>
</footer>
</template>

<style>

footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
</style>