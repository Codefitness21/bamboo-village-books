<template>
  <div class="promo-container">
    <h2>Support @Boltzdameek - Claim Your Bonus!</h2>
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
.promo-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 64px 96px 64px;
  background-color: var(--secondary);
  h2 {
    margin-top: 124px;
  }
}
</style>