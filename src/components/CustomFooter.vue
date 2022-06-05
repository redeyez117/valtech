<template>
<footer class="custom-footer">
  <img class="footer-image" src="src/assets/image/footer_img.svg">
</footer>
</template>

<script>
export default {
name: "CustomFooter"
}
</script>

<style scoped>
@import '@/assets/base.css';
.custom-footer {
  position: fixed;
  background: var(--vt-c-black);
  height: 150px;
  width: 100%;
  bottom:0;
}

.footer-image {
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: -80%;
  left: 50%;
  transform: translate(-50%,0%);
}
</style>