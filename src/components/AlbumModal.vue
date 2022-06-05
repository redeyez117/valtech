<template>
<div class="modal-overlay">
  <div class="modal-container">
    <div class="modal-body">
     <div class="tab-select">
       <a @click.prevent="changeComponents('new_album')" :class="selectedComponent === 'new_album' ? 'active' : ''" class="small-text">CREATE NEW ALBUM</a>
       <a @click.prevent="changeComponents('existing_albums')" :class="selectedComponent === 'existing_albums' ? 'active' : ''" class="small-text">ADD TO EXISITING</a>
     </div>
      <NewAlbum v-if="selectedComponent === 'new_album'"/>
      <ExistingAlbums v-if="selectedComponent === 'existing_albums'"/>
    </div>
  </div>
</div>
</template>

<script setup>
import NewAlbum from './NewAlbum.vue'
import ExistingAlbums from './ExistingAlbums.vue'
import BaseButton from "./BaseButton.vue";
import {ref} from "@vue/reactivity";
const selectedComponent = ref('new_album')

const changeComponents = (component) => {
  selectedComponent.value = component
}

</script>

<style scoped>
@import "@/assets/base.css";
.modal-overlay {
  width: 100%;
  position: absolute;
  top: 0;
  height: 90vh;
  background: white;
  z-index: 100;
}

.modal-container {
  width: 40%;
  min-width: 250px;
  margin:auto;
  top: 30%;
  border:1px solid var(--vt-c-black);
  box-shadow: 0px 5px 20px #00000029;
}

.modal-body {
  display: grid;
  place-items: center;
  margin-block: 25px;
}

.tab-select {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.active {
  font-weight: 600;
  color: var(--vt-c-black) !important;
}
</style>