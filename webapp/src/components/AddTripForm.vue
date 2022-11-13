<template>
  <form>
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