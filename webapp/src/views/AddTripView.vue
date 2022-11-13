<template>
  <div class="addTrip">
    <addTrip/>
  </div>
</template>

<script>
// @ is an alias to /src
import addTrip from '@/components/AddTrip.vue'

export default {
  name: 'AddTripView',
  components: {
    addTrip
  }
}
</script>
