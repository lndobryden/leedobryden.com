<template>
  <b-container class="text-left">
    <h1>{{title}}</h1>
    <p>{{date}}</p>
    <hr />
    <div v-for="(part, index) in parts" v-bind:key="index">
      <vue-markdown v-if="part.type === 'paragraph'" :breaks="false" :source="part.data"></vue-markdown>
      <b-row v-else-if="part.type === 'photos'">
        <b-col md="10" offset-md="1">
          <b-carousel v-if="part.data.length > 1"
                      id="carousel1"
                      controls
                      indicators
                      :interval="0"
                      class="mb-4">

            <b-carousel-slide v-for="(photo, photoIndex) in part.data" v-bind:key="photoIndex">
              <b-container fluid slot="img" class="pb-4 pt-1">
                <b-row>
                  <b-col>
                    <b-card overlay
                            bg-variant="transparent"
                            :img-src=photo.src
                            img-alt="Card image"
                            class="mb-2 text-center carousel-card"
                            :footer=photo.caption>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </b-carousel-slide>
          </b-carousel>
          <b-img v-if="part.data.length == 1" rounded fluid slot="img" class="d-block img-fluid w-100 mb-4"
                 :src=part.data[0].src alt="image slot"></b-img>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'ProjectArticle',
  components: {
    VueMarkdown
  },
  props: ['id'],
  computed: {
    articleId: function () {
      if (this.id != null) {
        return this.id
      }
      return 0
    }
  },
  data () {
    return {
      title: '',
      date: '',
      parts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  async created () {
    axios.get(`https://api.leedobryden.com/article/` + this.articleId)
      .then(response => {
        if (!response.data.title) {
          this.title = 'Oops! Couldn\'t find this article'
        } else {
          this.title = response.data.title
        }
        if (response.data.date) {
          this.date = 'Posted on ' + moment(response.data.date, 'YYYY-MM-DD').format('dddd MMMM Do YYYY')
        }
        this.parts = response.data.parts
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<style scoped>

  hr {
    border-color: rgba(255, 255, 255, 0.5);
  }

  .carousel-card {
    border: none;
    background-color: inherit!important;
  }

  .card-footer {
    background-color: inherit!important;
  }

</style>
