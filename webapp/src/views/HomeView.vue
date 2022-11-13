<template>
    <div class="home">
      <home/>
      <home_trucks_img/>
    </div>

</template>

<script>
// @ is an alias to /src
import home from '@/components/HomePage.vue'
import home_trucks_img from '@/components/ImageFmt.vue'

export default {
  name: 'HomeView',
  components: {
    home,
    home_trucks_img
  }
}
</script>
