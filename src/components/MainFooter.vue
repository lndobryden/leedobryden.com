<template>
  <footer class="footer">
    <hr />
    <b-container class="text-left">
      <span class="text-muted">Lee Dobryden <font-awesome-icon :icon="['far', 'copyright']"></font-awesome-icon> 2018</span>
    </b-container>
  </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'MainFooter',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: inherit;
}
</style>
