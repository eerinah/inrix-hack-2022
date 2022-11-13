<template>
  <v-app>
    <div>
    <v-app-bar
      color="blue darken-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Project title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main>
      <!-- <LandingPage/> -->
      <AddTripForm/>
    </v-main>
  </v-app>
</template>

<script>
// import LandingPage from './components/LandingPage';
// import AddTrip from './components/AddTrip';
import AddTripForm from './components/AddTripForm';


export default {
  name: 'App',

  components: {
    // LandingPage,
    // AddTrip,
    AddTripForm,
  },

  data: () => ({
    //
  }),
};
</script>
