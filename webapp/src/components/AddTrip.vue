<template>
    <v-container>
      <v-row class="text-center">
  
        <v-col 
        class="mb-5"
        cols = 12 >
          <h1 class="display-2 font-weight mb-3">
            Add a trip with a source and destination for transporting your goods. We'll curate the optimal route.
          </h1>
        </v-col>
        <!-- <v-col class="mb-5 text-left">
            <v-btn
                class="mx-2"
                fab
                dark
                color="indigo"
                to="/addTripForm"
                >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </v-col> -->
        <form>
          <!-- <v-text-field
            class= "mr-15 ml-15"
            type= "time"
            v-model="startTime"
            :rules="startTimeRules"
            label="Operational Start Hour"
            required
            @input="$v.startTime.$touch()"
            @blur="$v.startTime.$touch()"
          ></v-text-field>

          <v-text-field
            class= "mr-15 ml-15"
            type= "time"
            v-model="startTime"
            :rules="startTimeRules"
            label="Operational End Hour"
            required
            @input="$v.startTime.$touch()"
            @blur="$v.startTime.$touch()"
          ></v-text-field> -->

          <v-btn
            class="ml-15 mr-5"
            @click="submit"
          >
            Calculate Route
          </v-btn>
          <!-- <v-btn
            @click="clear"
            >
            clear
          </v-btn> -->
        </form>
      </v-row>
    </v-container>
  </template>
  <script>
    export default {
    name: 'AddTrip'
    }
  </script>
  