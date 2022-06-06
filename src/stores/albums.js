import {defineStore} from 'pinia';

export const useAlbumsStore = defineStore({
    id: 'albums',
    state: () => ({
        photos: [],
        albums: {},
        showAlbumModal: false,
        successMessage: false,
        selectedPhoto: null
    }),
    actions: {
        async getPhotos() {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=30')
            const photoDetails = await response.json()
            return this.photos = photoDetails
        },

        async loadMorePhotos() {
            const response = await fetch('https://picsum.photos/v2/list?page=2&limit=30')
            const photoDetails = await response.json()
            photoDetails.forEach(item=>this.photos.push(item))
            return this.photos
        },
        createAlbum(album) {
            this.albums[album] = []
        },
        async addPhotosToAlbum(album) {
            this.albums[album].push(this.selectedPhoto)
            this.successMessage = true
            this.showAlbumModal = false
            setTimeout(()=>{
                this.successMessage = false
            },1000)
        },
        toggleModal(photo) {
            this.selectedPhoto = photo
            this.showAlbumModal = !this.showAlbumModal
        }
    }
})