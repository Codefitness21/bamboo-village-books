<template>
  <header class="nav-bar">

    <a @click="open('home')"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/bamboo-logo.png"
        alt="Bamboo Village Logo" /></a>
    


    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    

    <div class="menu-overlay" v-show="isMenuOpen">
      <div class="close-btn" @click="toggleMenu">&times;</div>
      <nav class="nav-items">
        <a @click="open('home'); closeMenu()">Home</a>
        <div class="nav-dropdown">
          <a>About</a>
          <div class="sub-menu-links">
            <a class="gold-space"></a>
            <a @click="open('about'); toggleMenu()">About The Author</a>
            <a @click="open('team'); toggleMenu()">Meet The Team</a>
            <a @click="open('intern'); toggleMenu()">Welcome Interns!</a>
          </div>
        </div>
        <a @click="open('books'); closeMenu()">Books</a>
        <div class="nav-dropdown">
        <a>Services</a>
          <div class="sub-menu-links">
            <a class="gold-space"></a>
            <a @click="open('services'); toggleMenu()">Packages</a>
            <a @click="open('connect'); toggleMenu()">Bamboo Connect</a>
          </div>
        </div>
        <!-- <a @click="open('services'); closeMenu()">Services</a> -->
        <a @click="open('contact'); closeMenu()">Contact</a>
      </nav>
    </div>

    
    <nav class="nav-menu-desktop">
      <a @click="open('home')">Home</a>
      <div class="nav-dropdown">
        <a>About</a>
        <div class="nav-dropdown-content">
          <a class="gold-space"></a>
          <a @click="open('about')">About The Author</a>
          <a @click="open('team')">Meet The Team</a>
          <a @click="open('intern')">Welcome Interns!</a>
        </div>
      </div>
      <a @click="open('books')">Books</a>

      <div class="nav-dropdown">
        <a>Services</a>
        <div class="nav-dropdown-content">
          <a class="gold-space"></a>
          <a @click="open('services')">Packages</a>
          <a @click="open('connect')">Bamboo Connect</a>
        </div>
      </div>
      <!-- <a @click="open('services')">Services</a> -->


      <a @click="open('contact')">Contact</a>
    </nav>

    <div class="nav-player">
      <audio controls autoplay="" preload="none"
        src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/music/inspiring-cinematic-ambient-255033.mp3">
        <source type="audio/mpeg">
      </audio>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      currentLocation: null,
      isMenuOpen: false
    }
  },
  async mounted() {
    this.currentLocation = this.$route.name
    window.scrollTo(0, 0)
  },
  methods: {
    open(target) {
      this.currentLocation = target
      this.$router.push({ name: target })
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style>
header {
  max-width: 2000px;
  margin: 0 auto;
  width: 100%;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  position: fixed;
  z-index: 100;
  width: 100%;
}

.nav-player {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 0;
  width: 14%;
  margin-right: 24px;
}

.hamburger {
  display: none;
}

.closebtn {
  display: none;
}

.nav-bar img {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 24px;
  width: 30%;
  cursor: pointer;
}

.nav-menu-desktop {
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 8px;

  a {
    font-size: 16px;
    font-weight: bold;
    color: var(--secondary);
    cursor: pointer;
    margin-right: 24px;
  }

  a:hover {
    color: var(--quarternary);
  }
}

.nav-items {
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 8px;

  a {
    font-size: 16px;
    font-weight: bold;
    color: var(--secondary);
    cursor: pointer;
    margin-right: 24px;
  }
}

.nav-items a:hover {
  color: var(--quarternary);
}

.nav-dropdown {
  position: relative;
  display: inline-block;
}

.nav-dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--primary);
  /* border: 1px solid var(--quarternary); */
  font-weight: bold;
  width: 165px;
}

.nav-dropdown-content a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3px;
  color: var(--secondary);
  padding: 12px 16px;
  text-decoration: none;
  font-size: 13px;
}

.nav-dropdown-content .gold-space:hover {
  background-color: var(--primary);
}

.nav-dropdown-content a:hover {
  background-color: var(--tertiary);
  color: var(--quarternary);
  width: 100%;
}

.nav-dropdown:hover .nav-dropdown-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width:768px) and (max-width:1024px) {
  .nav-menu-desktop {
    display: none;
  }

  audio {
    display: none;
  }

  .menu-overlay {
    .nav-items {
      .sub-menu-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;

        a {
          font-size: 20px;
          color: var(--tertiary);
        }
      }
    }
  }

  .nav-dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    a {
      font-size: 16px;
    }
  }

  .nav-dropdown-content {
    font-size: 10px;
    background: none;
    position: static;
    width: 100%;

    a:hover {
      background: none;
      color: var(--tertiary);
    }

    .gold-space:hover {
      background: none;
    }
  }

  .nav-items a:hover {
    color: var(--tertiary);
  }

  .hamburger {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100px;
    height: 35px;
  }

  .bar {
    background-color: var(--secondary);
    width: 54%;
    height: 4px;
  }

  .menu-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: var(--secondary);
    overflow-x: hidden;

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 5rem;
      font-size: 72px;
      color: var(--secondary);
      cursor: pointer;
    }

    .nav-items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 150px;
      gap: 30px;
      font-size: 40px;

      a {
        font-size: 30px;
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  audio {
    display: none;
  }

  .menu-overlay {
    .nav-items {
      .sub-menu-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;

        a {
          font-size: 16px;
          color: var(--tertiary);
        }
      }
    }
  }

  .nav-menu-desktop {
    display: none;
  }

  .nav-bar img {
    width: 40%;
    margin: 16px 0 16px 4px;
  }

  .nav-dropdown-content {
    font-size: 10px;
    background: none;
    position: static;
    width: 100%;

    a:hover {
      background: none;
      color: var(--tertiary);
    }

    .gold-space:hover {
      background: none;
    }
  }

  .nav-items a:hover {
    color: var(--tertiary);
  }

  .hamburger {
    position: absolute;
    right: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    height: 32px;
  }

  .bar {
    background-color: var(--secondary);
    width: 48%;
    height: 3px;
  }

  .menu-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: var(--secondary);
    overflow-x: hidden;

    .close-btn {
      position: absolute;
      top: 1rem;
      right: 2rem;
      font-size: 56px;
      color: var(--secondary);
      cursor: pointer;
    }

    .nav-items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 100px;
      gap: 30px;
      font-size: 30px;

      a {
        font-size: 20px;
        margin-right: 0;
      }
    }
  }
}
</style>
