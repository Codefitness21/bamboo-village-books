<template>
    <div class="thanks-planthree-form">
        <p>Thank you for <br> your submission! </p>
    </div>
</template>

<script>
export default {
  name: 'ThankyouView',
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
      this.$router.push({ name: "thanks" })
    }
  }
}
</script>

<style>
.thanks-planthree-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding-top: 32px;
    background-color: var(--secondary);

    p {
        text-align: center;
        font-size: 90px;
        color: var(--quinary);
    }
}
</style>