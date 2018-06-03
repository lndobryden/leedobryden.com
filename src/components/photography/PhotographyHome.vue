<template>
  <b-container>
      <div v-for="gallery in galleries" :key="gallery.id">
        <b-row class="mb-3">
          <b-col md="10" offset-md="1">
            <b-link :to=galleryLink(gallery.id)>
              <b-card overlay
                      bg-variant="transparent"
                      :img-src=gallery.cover_url
                      :img-alt=gallery.gallery
                      class="mb-2 image-container">
                <div class="text-overlay">
                  <h2>{{ gallery.gallery }}</h2>
                </div>
              </b-card>
            </b-link>
          </b-col>
        </b-row>
      </div>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      galleries: [],
      errors: []
    }
  },
  async created () {
    axios.get(`https://api.leedobryden.com/galleries/`)
      .then(response => {
        this.galleries = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    galleryLink: function (id) {
      return '/gallery/' + id
    }
  }
}
</script>

<style scoped>

  .image-container {
    position: relative;
    text-align: center;
    color: white;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
