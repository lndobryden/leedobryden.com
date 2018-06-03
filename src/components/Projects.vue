<template>
  <div>
    <div v-for="(article, index) in articles" v-bind:key="index" class="text-left">
      <b-row>
        <b-col md="4" offset-md="2">
          <b-card :title=article.title
                  :sub-title=articleDate(article.date)
                  class="summary-card">
            <p class="card-text">
              {{article.summary}}
            </p>
            <b-button :to=articleLink(article.ArticleID)
                    class="card-link">Read More</b-button>
          </b-card>
          <hr />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Projects',
  components: {
  },
  data () {
    return {
      title: '',
      date: '',
      articles: []
    }
  },
  async created () {
    axios.get(`https://api.leedobryden.com/articles/`)
      .then(response => {
        this.articles = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    articleLink: function (id) {
      return '/article/' + id
    },
    articleDate: function (dateString) {
      return 'Posted on ' + moment(dateString, 'YYYY-MM-DD').format('dddd MMMM Do YYYY')
    }
  }
}

</script>

<style scoped>

  .summary-card {
    border: none;
    background-color: #474e5d!important;
  }

</style>
