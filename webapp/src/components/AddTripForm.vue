<template>
  <form>
    <v-text-field
      class= "mr-15 ml-15"
      v-model="source"
      :rules="sourceRules"
      label="Source"
      required
      @input="$v.source.$touch()"
      @blur="$v.source.$touch()"
    ></v-text-field>

    <v-text-field
      class= "mr-15 ml-15"
      v-model="destination"
      :rules="destinationRules"
      label="Destination"
      required
      @input="$v.destination.$touch()"
      @blur="$v.destination.$touch()"
    ></v-text-field>

    <v-text-field
      class= "mr-15 ml-15"
      v-model="weight"
      :rules="weightRules"
      label="Weight of Payload"
      required
      @input="$v.weight.$touch()"
      @blur="$v.weight.$touch()"
    ></v-text-field>

    <v-text-field
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
      v-model="endTime"
      :rules="endTimeRules"
      label="Operational Start Hour"
      required
      @input="$v.endTime.$touch()"
      @blur="$v.endTime.$touch()"
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
    ></v-text-field>

    <v-btn
      class="ml-15 mr-5"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn
      @click="clear"
      >
      clear
    </v-btn>
  </form>
</template>

<script>
  export default {
    name: 'addTripForm',
    data: () => ({
      valid: true,
      source: '',
      sourceRules: [
        v => !!v || 'Source is required',
      ],
      weight: '',
      weightRules: [
      v => !!v || 'Weight is required',
      ],
      destination: '',
      destinationRules: [
      v => !!v || 'Weight is required',
      ],
      startTime: '00:00',
      startTimeRules: [
      v => !!v || 'Operational starting hour is required',
      ],
      endTime: '00:00',
      endTimeRules: [
      v => !!v || 'Operational ending hour is required',
      ],
    })}
</script>