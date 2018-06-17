<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h2>{{ gallery.gallery }}</h2>
        </b-col>
      </b-row>
      <hr />
      <b-row v-if="index%3 == 0" v-for="(image, index) in gallery.images" v-bind:key="index"
             align-v="center" class="gallery-row">
        <b-col v-if="gallery.images[index + i]" v-for="i in 3" v-bind:key="i"
               class="mb-4">
          <b-img @click="showModal(gallery.images[index + i].url)"
                  :src=gallery.images[index+i].url
                  class="gallery-image">

          </b-img>
        </b-col>
      </b-row>
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
      gallery: {},
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
        this.gallery = response.data
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

  .gallery-image {
    max-height:12rem;
    object-fit: cover;
    border-radius: .25rem;
    z-index: 5;
    transition: all .2s;
  }
  .gallery-image[class] { width: 15rem; }

  .gallery-image:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
</style>
