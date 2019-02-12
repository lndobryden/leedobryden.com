<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">

      <router-link to="/"><b-navbar-brand tag="h1">Lee Dobryden</b-navbar-brand></router-link>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="social">
          <b-nav-item target="_blank" href="https://www.linkedin.com/in/lee-dobryden-6aa62994"><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></b-nav-item>
          <b-nav-item target="_blank" href="https://github.com/lndobryden"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></b-nav-item>
          <b-nav-item target="_blank" href="https://www.instagram.com/lndob/"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></b-nav-item>
          <b-nav-item target="_blank" href="https://medium.com/@lndobryden"><font-awesome-icon :icon="['fab', 'medium']"></font-awesome-icon></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/photography">Photography</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/running">Running</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Navbar',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  line-height: 20px;
  font-family: 'Dancing Script', cursive;
  font-size: 2.3rem;
  letter-spacing: 0;
}

.bg-info {
  background-color:  #474e5d !important;
}

.navbar {
  padding-top: 45px;
  padding-bottom: 30px;
  border: 0;
  border-radius: 0;
  margin-bottom: 30px;
  letter-spacing: 5px;
}
.navbar-nav  li a:hover {
  color: black !important;
}

.collapsing > .social,
.show > .social {
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}

</style>
