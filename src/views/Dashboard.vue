<template>
  <div class="container">
    <div class="photos-wrapper">
      <img v-lazy="photo.download_url" @click="goToPhotoDetails(photo.id)" alt="photo" v-for="photo in this.photos" class="photo"/>
    </div>
  </div>
</template>

<script>
import {useAlbumsStore} from "../stores/albums";
import {mapActions, mapState} from "pinia";

export default {
name: "Dashboard",
  mounted() {
    this.getPhotos()
  },
  computed: {
  ...mapState(useAlbumsStore, ['photos','loader'])
  },
  methods: {
  ...mapActions(useAlbumsStore,['getPhotos']),

    goToPhotoDetails(id) {
    this.$router.push(`/photo-detail/${id}`)
    }

  }
}
</script>

<style scoped>
.container {
  -moz-column-count: 1;
  column-count: 1;
  -moz-column-gap: 20px;
  column-gap: 5px;
  -moz-column-fill: balance;
  column-fill: balance;
  margin: 20px auto 0;
  width: 970px;
}
.container .photo {
  display: inline-block;
  margin: 0px;
  page-break-inside: avoid;
  -moz-column-break-inside: avoid;
  break-inside: avoid;
  width: 100%;
}
.container .photo img {
  width: 100%;
  height: auto;
}

.photo:hover {
  transform: scale(1.2);
  transition: ease-in-out 200ms;
  cursor: pointer;
  z-index: 2000;
}

@media (min-width: 600px) {
  .container {
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media (min-width: 900px) {
  .container {
    -moz-column-count: 3;
    column-count: 3;
  }
}
@media (min-width: 1200px) {
  .container {
    -moz-column-count: 3;
    column-count: 3;
  }
}
</style>