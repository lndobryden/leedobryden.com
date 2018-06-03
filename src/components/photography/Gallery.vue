<template>
  <div>
    <b-container>
      <div v-masonry transition-duration='0.3s'
           item-selector='.item' gutter=".gutter-item">
        <div v-masonry-tile class="item" v-for="(image, index) in images" v-bind:key="index">
          <div class="gutter-item"></div>
          <b-link @click="showModal(image.url)">
            <b-img class="gallery-thumbnail" rounded :src=image.url></b-img>
          </b-link>
        </div>
      </div>
    </b-container>
    <b-modal ref="imagePopup" centered
             hide-footer hide-header
             body-bg-variant="dark">
        <b-img fluid rounded :src=selectedImageURL></b-img>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      images: [],
      selectedImageURL: ''
    }
  },
  props: ['id'],
  computed: {
    galleryId: function () {
      if (this.id != null) {
        return this.id
      }
      return 0
    }
  },
  async created () {
    axios.get(`https://api.leedobryden.com/gallery/` + this.galleryId)
      .then(response => {
        this.images = response.data.images
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    showModal (imageURL) {
      this.selectedImageURL = imageURL
      this.$refs.imagePopup.show()
    }
  }
}
</script>

<style scoped>

  .gutter-item {
    width:10px;
    margin-bottom: 10px;
  }
  .gallery-thumbnail {
    height: auto;
    width: auto;
    max-width: 175px;
    max-height: 175px;
  }

</style>
