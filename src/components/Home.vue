<template>
  <b-container>
    <b-jumbotron class="text-left">
      <template slot="lead">
        Hi, I'm Lee. This is my website.
      </template>
      <hr class="my-4">
      <b-row>
        <b-col sm="3">
          <b-img thumbnail left rounded="circle"
                 alt="img" class="m-1 border-0"
                 src="static/profile.png"></b-img>
        </b-col>
        <b-col sm="3">
          <b-link to="/photography">
            <b-card overlay
                    img-src="/static/Butterfly.jpg"
                    class="homepageCard text-center">
              <div slot="footer">
                <span>Photography</span>
              </div>
            </b-card>
          </b-link>
        </b-col>
        <b-col sm="3">
          <b-link to="/projects">
            <b-card overlay
                    img-src="/static/tinkerboard.jpg"
                    class="homepageCard text-center">
              <div slot="footer">
                <span>Projects</span>
              </div>
            </b-card>
          </b-link>
        </b-col>
        <b-col sm="3">
          <b-link to="/running">
            <b-card overlay
                    img-src="/static/Running.jpg"
                    class="homepageCard text-center">
              <div slot="footer">
                <span>Running</span>
              </div>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
    </b-jumbotron>
</b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

  .jumbotron {
    padding-top: 0;
    background-color: inherit;
  }

  .homepageCard {
    font-size: 30px;
    border: none;
    background-color: inherit!important;
    color: white;
  }

  .card-footer {
    background-color: inherit!important;
    padding: 1rem;
  }

  a:hover {
    text-decoration: none;
  }

</style>
