<template>
    <section class="connect-page-container">
    <div class="connect-title">
        <h1>BAMBOO CONNECT</h1>
      </div>
      <div class="connect-statement">
        <h2>Mission Statement</h2>
        <p>To empower and connect communities through the fusion of cybersecurity expertise, education, and mentorship. Bamboo Village Connect serves as a central hub for service members, veterans, transitioning military professionals, students at all levels, and mission-driven organizations. We cultivate collaborative spaces
            where individuals can grow professionally, gain real-world experience, and contribute to a secure and resilient digital future. Through cross-sector partnerships and a strong foundation in DoD contract environments, we bridge the gap between community impact and national security.</p>
            <h2>Vision Statement</h2>
        <p>To become the nation's leading connective platform for cybersecurity engagement, where service members, students, veterans, and professionals unite to drive purpose-led innovation. Bamboo Village Connect envisions a future where education, mentorship, and national defense intersect empowering the next generation of cyber leaders, uplifting underserved communities, and reinforcing mission readiness across both public and private sectors.</p>
      </div>
    </section>
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
/* Section - Connect Page Container */
.connect-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
  padding: 0 64px 96px 64px;
}

.connect-title h1 {
  margin-top: 124px;
}

.connect-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.connect-statement {
    h2 {
    margin-bottom: 24px;
  }
}

</style>