<template>
    <div class="main">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </template>
  

  <script>
  export default {
    name: 'ConnectView',
    data() {
      return {
        currentLocation: null
      }
    },
    async mounted() {
      this.currentLocation = this.$route.name
    },
    methods: {
      open(target) {
        this.currentLocation = target
        this.$router.push({ name: target })
      }
    }
  }
  </script>
  
  
  <style>
.main {
    display: flex;
  flex-direction: column;
  justify-content: center;
 
  background-color: var(--secondary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/event-bkgrd-bamboo-logo-v3.png");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  }
  
  </style>