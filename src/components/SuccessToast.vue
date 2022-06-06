<template>
<div v-if="successMessage" class="success-message">
  <h3>Photo is saved to the album!</h3>
</div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useAlbumsStore} from "../stores/albums";

const {successMessage} = storeToRefs(useAlbumsStore())
</script>

<style scoped>
.success-message {
  background: var(--vt-c-black);
  height: 140px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position:sticky;
  bottom: 0;
}
</style>