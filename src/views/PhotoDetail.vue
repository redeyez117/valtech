<template>
  <div class="container">
   <div style="text-align: center" v-if="!showAlbumModal">
     <div style="justify-content: center" class="btn-group">
       <base-button background="white" @click="toggleModal(details)" title="ADD TO ALBUM +"/>
       <base-button @click="downloadImg(details.download_url)" background="black" color="white" title="DOWNLOAD"/>
     </div>
     <div class="details-img">
       <img class="details-img-preview" :src="details.download_url"/>
     </div>
     <p style="font-size: 14px; font-weight: 600">Uploaded By</p>
     <h2>{{ details.author }}</h2>
     <p class="date">{{ getFormattedDate }}</p>
     <base-button @click="router.back()" title="GO BACK" background="white"/>
   </div>
    <AlbumModal v-if="showAlbumModal"/>
  </div>
  <SuccessToast/>
</template>

<script setup>
import BaseButton from "../components/BaseButton.vue";
import SuccessToast from "../components/SuccessToast.vue";
import AlbumModal from "../components/AlbumModal.vue";
import {useRoute,useRouter} from "vue-router";
import {computed, ref, toRefs} from "@vue/reactivity";
import moment from 'moment'

import {useAlbumsStore} from "../stores/albums";
import {storeToRefs} from "pinia";
const {toggleModal} = useAlbumsStore()
const {showAlbumModal} = storeToRefs(useAlbumsStore())
const details = ref({})
const route = useRoute()
const router = useRouter()
const getDetails = async () => {
  const response = await fetch(`https://picsum.photos/id/${route.params.id}/info`)
  const data = await response.json()
  details.value = data
}

getDetails();

const generateRandomDate = () => {
  return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

const downloadImg = (img) => {
  let link = document.createElement("a");
  document.documentElement.append(link);
   fetch(img)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        let objectURL = URL.createObjectURL(blob);
        // Set the download name and href
        link.setAttribute("download", `image.jpg`);
        link.href = objectURL;
        link.click();
      })
}

const getFormattedDate = computed(() => {
  return moment(generateRandomDate(new Date(2012, 0, 1), new Date())).format('Do MMMM YYYY')
})

</script>

<style scoped>
@import "@/assets/base.css";
.container {
  position: relative;
  width: 970px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 70px 0 15px 0;
}

.details-img-preview {
  width: 50%;
  min-width: 250px;
  margin-block: 25px;
}

.details-img {
  text-align: center;
}

.date {
  font-size: 11px;
  color: #9D9D9D;
  margin-bottom: 30px;
}
</style>