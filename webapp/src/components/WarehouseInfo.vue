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
      @click="getSchedule"
      :loading="loading"
      
    >
    Setup
    </v-btn>
    <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
      v-show="loading"
    >
    Starting search
    </v-alert>
    <v-alert
      text
      dense
      color="primary"
      type="success"
      border="left"
      v-if="hub"
    >
   Found hub at {{hub.name}}
    </v-alert>
    <v-btn
      class="ma-2"
      outlined
      color="warning"
      @click="call_algo"
    >
    Get Schedule
    </v-btn>

    <v-container fluid grid-list-md v-show="schedule.length!=0">
        
        <v-layout row wrap>

            <v-flex   v-bind:key="index" v-for="(item,index) in schedule">
    
            <v-card width="400" min-height="400">
    
    
            <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
                <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              
              
              color="primary"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ item[4] }}</strong> @{{ item[2] }} hrs
                </div>
                <div><p>Source</p></div>
              </div>
            </v-timeline-item>
            
            <v-timeline-item
              
              
              color="green"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ item[5] }}</strong> @{{ item[3] }} hrs
                </div>
                <div><p>Hub</p></div>
              </div>
            </v-timeline-item>
          </v-timeline>
            </div>
            <v-container>
                <div class="text-subtitle-2 font-weight-regular grey--text">
               Summary : {{item[8]}}
            </div>
            <div class="d-flex flex-row mr-2">
                <p>Ratings :</p>
                <v-rating
            readonly
      :value="item[7]"
      :length="5"
      dense
      dark
      small
    ></v-rating>
            </div>
            
                <div class="text-subtitle-2 font-weight-regular grey--text">
                Time taken : {{ item[0]}} mins
            </div>
            <div class="text-subtitle-2 font-weight-regular grey--text">
                Distance covered: {{ item[1]}} miles
            </div>
            <div class="text-subtitle-2 font-weight-bold grey--text">
               Estimated return time: {{item[6]}} hrs
            </div>
           
            
            </v-container>
            
    
            </v-card-text>
            </v-card>
            </v-flex>
        </v-layout>
        
    </v-container>
   
    </v-container>
  </template>

<script>
import getHub from "./helper"
import axios from "axios"
import moment from "moment"
    export default {
        name: "MapTest",
        data() {
    return {
    showHub: false,
    hub: null,
      center: { lat: 37.7680183, lng: -122.3878772 },
      currentPlace: null,
      markers: [],
      places: [],
      hidden: true,
      loading: false,
      warehouses: [
    {
        "position": {
            "lat": 37.7680183,
            "lng": -122.3878772
        },
        "name": "1 Warriors Way, San Francisco, CA 94158, USA"
    },
    {
        "position": {
            "lat": 37.8050986,
            "lng": -122.4252327
        },
        "name": "Fort Mason, San Francisco, CA 94109, USA"
    },
    {
        "position": {
            "lat": 37.780683,
            "lng": -122.4723021
        },
        "name": "Richmond District, San Francisco, CA, USA"
    },
    {
        "position": {
            "lat": 37.7544066,
            "lng": -122.4476845
        },
        "name": "Twin Peaks, San Francisco, CA, USA"
    }
],
lat_long: [
    {
        "name": "1 Warriors Way, San Francisco, CA 94158, USA",
        "co_ords": [
            37.7680183,
            -122.3878772
        ]
    },
    {
        "name": "Fort Mason, San Francisco, CA 94109, USA",
        "co_ords": [
            37.8050986,
            -122.4252327
        ]
    },
    {
        "name": "Richmond District, San Francisco, CA, USA",
        "co_ords": [
            37.780683,
            -122.4723021
        ]
    },
    {
        "name": "Twin Peaks, San Francisco, CA, USA",
        "co_ords": [
            37.7544066,
            -122.4476845
        ]
    }
],
algo_input : [],
schedule: [],
reverseSchedule: [],
endtime: "",
token: ""
// start_time: moment.startOf('day')
    }
  },
  created(){
    
        var authConfig = {
  method: 'get',
  url: 'https://api.iq.inrix.com/auth/v1/appToken?appId=uql9k9znlf&hashToken=dXFsOWs5em5sZnxmeWFWa2RJa20wN0hFdWE1SUg1YmVhM3Q3ZGVLWTRZaTRjUGVTaVpW',
  headers: { }
};
var thang = this;
axios(authConfig)
.then(function (response) {
  thang.token = response.data.result.token;
})
.catch(function (error) {
  console.log(error);
});
  },
  mounted(){
    this.hidden = false
    // this.geolocate();
  },
  methods: {
    start_time(){
        return moment().startOf('day');
    },
    call_algo() {
        var startTime=8*60;//mins
        console.log(this.start_time());
console.log(this.start_time);
    var maxTime=-1;
    console.log(this.algo_input);
    for(var i=0;i<this.algo_input.length;i++){
        if(maxTime<this.algo_input[i][0]){
            maxTime=this.algo_input[i][0];
        }
    }
    console.log(maxTime);
    var finalSchedule = [];
    for(var j=0;j<this.algo_input.length;j++){
        var st = (startTime+(maxTime-this.algo_input[j][0]));
        var et = (startTime+maxTime);
        var returnTime = this.algo_input[j][0] + et;
        if (st == et) continue;
        finalSchedule.push([ this.algo_input[j][0], this.algo_input[j][1], Math.floor(st/60).toString() + ":" +  (parseInt(st)%60).toString(), Math.floor(et/60).toString() + ":" + parseInt(parseInt(et)%60).toString(), this.algo_input[j][2], this.algo_input[j][3] ,Math.floor(returnTime/60).toString() + ":" + parseInt(parseInt(returnTime)%60).toString(), this.algo_input[j][4], this.algo_input[j][5]]);
    }

    this.schedule = finalSchedule
    },
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
        this.warehouses.push({position: marker, name: this.currentPlace.formatted_address});
        this.places.push(this.currentPlace);
        this.lat_long.push({name: this.currentPlace.formatted_address, co_ords: [marker.lat, marker.lng]});
        this.center = marker;
        this.currentPlace = null;
        
        
        // console.log(this.markers);
        console.log(this.lat_long);
        console.log(this.warehouses);
        
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
        //getting hub

        //auth

        
        var hub = getHub(this.lat_long)
        var hub_latLong = hub.hub;
        var hub_name = hub.name;
        
        //set hub name
        this.hub = hub;
        this.showHub = true;
        
        //time 
        // var times = []
        this.lat_long.forEach(node => {
         this.loading = true;
        var config = {
        method: 'get',
        url: `https://api.iq.inrix.com/findRoute?wp_1=${node.co_ords[0].toFixed(6).toString()}%2C${node.co_ords[1].toFixed(6).toString()}&wp_2=${hub_latLong[0].toFixed(6).toString()}%2C${hub_latLong[1].toFixed(6).toString()}&format=json`,
       
        headers: { 
        'Authorization': 'Bearer ' + this.token
        }
        };
        var thing = this;
        setTimeout(function (){
            axios(config)
        .then(function (response) {
        
        //update array to send to algorithm
        
        var source = node.name;
        var dest = hub_name;
        var time = response.data.result.trip.routes[0].travelTimeMinutes
        var dist = parseFloat(response.data.result.trip.routes[0].totalDistance).toFixed(2);
        var routeQ = response.data.result.trip.routes[0].routeQuality;
        var summary = response.data.result.trip.routes[0].summary.text;
        thing.algo_input.push([time,dist,source,dest, routeQ,summary]);
        console.log(thing.algo_input);
        thing.loading = false;
        })
        .catch(function (error) {
        console.log(error);
        });
        },10000)

        
       

        });
        
        
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>