<template>
  <div class="home">

  <!-- <MapTest/> -->
  
  <WarehouseInfoVue/>
      <home/>
      <home_trucks_img/>
    </div>

</template>

<script>
// @ is an alias to /src

// import MapTest from '../components/MapTest.vue'
import WarehouseInfoVue from '@/components/WarehouseInfo.vue';
import home from '@/components/HomePage.vue'
import home_trucks_img from '@/components/ImageFmt.vue'

export default {
  name: 'HomeView',
  components: {
    // MapTest,
    WarehouseInfoVue
    home,
    home_trucks_img
  }
}
</script>
