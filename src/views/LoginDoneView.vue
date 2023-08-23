<template>
    <v-container fluid>
  
        Complete!
  
    </v-container>
  </template>
  
  <script>
 import { useAuthStore } from '../store/auth.js'

  export default {


    name: 'LoginDoneView',
  
    components: {

    },
  
    setup() {
        const authStore = useAuthStore();

        authStore.getAuthCode();
        
    },
  
    data() {

    },
  
  }
  </script>

