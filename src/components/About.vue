<template>
  <b-container>
    <b-row>
      <b-col sm="4">
        <b-img left rounded="circle"
               alt="img" class="m-1"
               src="static/profile.png"></b-img>
      </b-col>
      <b-col sm="8" class="pt-4">
        <div class="text-left">
          <h3>Contact Me</h3>
          <hr />
          <span>
            Contact me on
            <b-link target="_blank" class="mx-1" href="https://www.linkedin.com/in/lee-dobryden-6aa62994"><font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon></b-link>
              or
            <b-link target="_blank" class="mx-1" href="https://keybase.io/lndobryden"><font-awesome-icon :icon="['fas', 'key']"></font-awesome-icon></b-link>
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'About',
  components: {
    FontAwesomeIcon
  }
}

</script>
