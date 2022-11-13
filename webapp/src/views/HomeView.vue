<template>
  <div class="home">

  <!-- <MapTest/> -->
  
  <WarehouseInfoVue/>
  </div>
</template>

<script>
// @ is an alias to /src

// import MapTest from '../components/MapTest.vue'
import WarehouseInfoVue from '@/components/WarehouseInfo.vue';

export default {
  name: 'HomeView',
  components: {
    // MapTest,
    WarehouseInfoVue
  }
}
</script>
