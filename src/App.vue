<template>
  <div id="app">
    <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
    </span>
    <div class="svg-container">
       <svg-icon icon-class="password"></svg-icon>
     </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.svg-container {
    font-size: 40px;
    color: red;
}
</style>
