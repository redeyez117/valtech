import {defineStore} from 'pinia'

export const useAlbumsStore = defineStore({
    id: 'albums',
    state: () => ({
        photos: [],
        albums: {},
        showAlbumModal: false,
        selectedPhoto: null
    }),
    actions: {
        async getPhotos() {
            const response = await fetch('https://picsum.photos/v2/list')
            const photoDetails = await response.json()
            photoDetails.forEach(item => (this.photos.push(item)))
            return this.photos
        },
        createAlbum(album) {
            this.albums[album] = []
        },
        addPhotosToAlbum(album) {
            console.log(album)
            console.log(this.selectedPhoto)
           this.albums[album].push(this.selectedPhoto)
        },
        toggleModal(photo) {
            this.selectedPhoto = photo
            this.showAlbumModal = !this.showAlbumModal
        }
    }
})