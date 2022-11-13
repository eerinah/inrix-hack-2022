<template>
  

    <div id="app">
      <v-app>
       <nav>
        <v-app-bar
      absolute
      color="primary"
      dark
      elevate-on-scroll
      
    >
      

      <v-toolbar-title>GetMeTheRoute</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
       </nav>
        <router-view/>
        <v-footer
    color="primary"
    padless
    class="mb-2"
  >
    <v-row
      justify="center"
      no-gutters
    >
      
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
      <p>Build with 🤍</p>
       <p>{{ new Date().getFullYear() }} — <strong>Vue + Vuetify</strong></p> 
      </v-col>
    </v-row>
  </v-footer>
      </v-app>
    </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
