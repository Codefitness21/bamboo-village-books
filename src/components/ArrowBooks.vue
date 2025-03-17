<template>
  <div class="arrow-container">
      <a @click="open('books')"><b><i class="fa-solid fa-angle-left"></i> Back to Books</b> </a>
  </div>
</template>

<script>

export default {
  name: 'ArrowBooks',
  data() {
    return {
      currentLocation: null
    }
  },
  async mounted() {
    this.currentLocation = this.$route.name
    window.scrollTo(0, 0)
  },
  methods: {
    open(books) {
      this.currentLocation = books
      this.$router.push({ name: books })
    }
  }
}
</script>

<style>
.white-arrow {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: var(--secondary);
  font-weight: bold;
  cursor: pointer;
  /* margin-top: 16px; */
  gap: 16px;

.arrow-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: none;
  padding-top: 64px;
  font-weight: bold;
  cursor: pointer;
  a {
    color: var(--secondary);
  }
}
}

.black-arrow {
  .arrow-container {
    a {
      color: var(--quinary);
    }
  }
}
</style>
