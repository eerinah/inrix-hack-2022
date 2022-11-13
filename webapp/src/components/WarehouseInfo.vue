<template>
    <v-container>
      <div>
        <h2>Warehouses</h2>
        
        <GmapAutocomplete
        @place_changed='setPlace'
        :options="{fields: ['geometry', 'formatted_address', 'address_components']}"
      />
      <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="primary"
                dark
                top
                right
                fab
                small
                @click="addMarker"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
      </div>
      <br>
      <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px'
    >
    <GmapMarker
        :key="index"
        v-for="(m, index) in warehouses"
        :position="m.position"
        @click="center=m.position"
        color="green"
      />
      
      </GmapMap>
      
      <br/>
      <v-btn
      class="ma-2"
      outlined
      color="indigo"
    >
    Get Schedule
    </v-btn>
    </v-container>
  </template>

<script>
    export default {
        name: "MapTest",
        data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
      hidden: true,
      warehouses: [
    {
        "position": {
            "lat": 37.34964180000001,
            "lng": -121.9389875
        }
    },
    {
        "position": {
            "lat": 37.3351874,
            "lng": -121.8810715
        }
    },
    {
        "position": {
            "lat": 37.3984051,
            "lng": -121.9751567
        }
    },
    {
        "position": {
            "lat": 37.4220656,
            "lng": -122.0840897
        }
    }
],
lat_long: [
    [37.34964180000001, -121.9389875],
    [37.3351874,-121.8810715],
    [37.3984051,-121.9751567],
    [37.3984051,-121.9751567],
    [37.4220656,-122.0840897]
]
    }
  },
  mounted(){
    this.hidden = false
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
      console.log(this.currentPlace);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.warehouses.push({position: marker});
        this.places.push(this.currentPlace);
        this.lat_long.push([marker.lat, marker.lng]);
        this.center = marker;
        this.currentPlace = null;
        
        
        // console.log(this.markers);
        console.log(this.lat_long);
        
      }
      
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },

    // get schedule
    getSchedule: function(){
        
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>