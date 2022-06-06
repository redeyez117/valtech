<template>
<div class="container">
  <div class="row">
    <p class="album-title">{{filteredAlbum[0][0]}}</p>
    <p class="small-text text-center">Date created: {{creationDate}}</p>
    <div class="grid-photo-gallery">
      <img alt="album-photo" @click="goToPhotoDetails(image.id)" v-for="image in filteredAlbumPhotos" :src="image.download_url" class="album-photos"/>
    </div>
    <div class="action-btn">
      <BaseButton @click="goToDashboard" class="go-back" background="white" title="GO BACK"/>
    </div>
  </div>
</div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useAlbumsStore} from "../stores/albums";
import {computed} from "@vue/reactivity";
import moment from "moment";
import BaseButton from "../components/BaseButton.vue";
const route = useRoute()
const router = useRouter()
const {albums} = storeToRefs(useAlbumsStore())

const filteredAlbum = Object.entries(albums.value).filter((album) => {
 return album[0] === route.params.album
})

const filteredAlbumPhotos = JSON.parse(JSON.stringify(filteredAlbum[0][1]))

const generateRandomDate = () => {
  return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

const creationDate = computed(() => {
  return moment(generateRandomDate(new Date(2012, 0, 1), new Date())).format('Do MMMM YYYY')
})

const goToDashboard = () => {
  router.push({name:'home'})
}

const goToPhotoDetails = (id) => {
  router.push(`/photo-detail/${id}`)
}

</script>

<style scoped>
@import "@/assets/base.css";
.container {
  margin-top: 30px;
  width: 970px;
  display: flex;
  margin-inline: auto;
  justify-content: center;
}

.album-photos {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.grid-photo-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 30px;
  margin-top: 20px;
}

.album-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: var(--vt-c-black);
}

.go-back {
  margin-inline: auto;
  margin-top: 30px;
}

.action-btn {
  display: flex;
  justify-content: center;
}

</style>