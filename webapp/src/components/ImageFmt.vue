<template>
    <div class="d-flex justify-space-around align-center bg-grey-lighten-4">
      <div class="ma-4">
        <div class="text-subtitle-2"></div>
        <v-img
          class="bg-white"
          width="500"
          :aspect-ratio="1"
          src="../assets/home_trucks.jpg"
          cover
        ></v-img>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'home_trucks_img',
    data: () => ({
      width: 300,
      aspectRatio: 16 / 9,
      aspectRatios: [
        {
          title: '16/9',
          value: 16 / 9,
        },
        {
          title: '4/3',
          value: 4 / 3,
        },
        {
          title: '1/1',
          value: 1,
        },
      ],
    }),
  }
</script>