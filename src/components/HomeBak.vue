<template>
  <b-container>
    <b-jumbotron>
      <template slot="header">
        Bootstrap Vue
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content
        out within the larger container.
      </p>
    </b-jumbotron>
    <b-card-group deck class="justify-content-around mb-3">
      <b-card overlay
              img-src="https://leedobryden.com/photos/gallery/zion/red%20hoodoos.jpg"
              img-alt="Card Image"
              text-variant="white"
              title="Zion National Park Photos"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Photos from my trip to Zion National Park
        </p>
        <b-button href="#" variant="primary">More...</b-button>
      </b-card>
      <b-card overlay
              img-src="https://leedobryden.com/photos/gallery/yosemite/32-yosemitelowerrainbow.jpg"
              img-alt="Card Image"
              text-variant="white"
              title="Yosemite Photos"
              sub-title="2010"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Photos from my 2010 trip to Yosemite National Park
        </p>
        <b-button href="#" variant="primary">More...</b-button>
      </b-card>
      <b-card overlay
              img-src="https://leedobryden.com/photos/gallery/2010/sunset.jpg"
              img-alt="Card Image"
              text-variant="white"
              title="Various Photos"
              sub-title="2010"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Various photos that I've taken which I like
        </p>
        <b-button href="#" variant="primary">More...</b-button>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>
