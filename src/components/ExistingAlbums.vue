<template>
  <div class="album-list">
    <ul class="albums">
      <li v-for="album in Object.keys(albums)">
          <input v-model="selectedAlbum" :value="album" :id="album" class="album-radio" type="radio"/>
          <label :for="album" class="album-title">{{album}}</label>
      </li>
    </ul>
    <div class="btn-group">
      <base-button @click="toggleModal" title="CANCEL" background="white"/>
      <base-button @click="addPhotosToAlbum(selectedAlbum)" title="SAVE" background="black" color="white"/>
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import {useAlbumsStore} from "../stores/albums";
import {ref} from "@vue/reactivity";
const {albums,toggleModal,addPhotosToAlbum} = useAlbumsStore()
const selectedAlbum = ref(null)
</script>

<style scoped>
.album-list {
  margin-block: 15px;
}

.album-list ul {
  padding: 0;
}

.albums {
  list-style: none;
  text-align: center;
  margin-bottom: 20px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label {
  border: solid 1px black;
  color: black;
}

.album-title {
  color: #9D9D9D;
  padding: 5px 15px;
}
</style>