<template>
  <div id="mail-box-field" class="mailing-container" >
    <h5>Join Our Mailing List</h5>
    <form class="mail-form" action="https://formspree.io/f/xwpvgjop" method="POST" @submit="showThankYou" autocomplete="off">
      <div class="input-container">
        <label class="title-input" for="email"></label>
        <input class="email-input" type="text" placeholder="Email" id="email" name="email" autocomplete="off" />
      </div>
      <div class="sign-up-btn">
        <button class="sign-up-btn">SIGN UP</button>
      </div>
    </form>
    <div class="mail-form-thanks" v-if="!thankyou">
    <h3>Thank you!</h3>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MailView',
  data() {
    return {
      thankyou: true,
      currentLocation: null
    }
  },
  async mounted() {
    this.currentLocation = this.$route.name
  },
  methods: {
    showThankYou() {
      this.thankyou = false; 
    },
    open(target) {
      this.currentLocation = target
      this.$router.push({ name: target })
    }
  }
}
</script>

<style>
/* Mailing list container */
.mailing-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary);
  padding: 20px;
  

  h5 {
    font-size: 24px;
    color: var(--quinary);
  }
}

.mail-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin: 0px 3px 0 48px;

  .email-input {
    padding: 8px 16px;
    margin-right: 4px;
    height: 6vh;
  }

  input {
    width: 32vw;
  }
}

.mail-form-thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--quinary);
  margin: 8px;
}

@media (min-width:768px) and (max-width:1410px) {
  .mail-form {
    .email-input {
      height: 5vh;
    }
  }

}

@media (max-width: 767px) {
  .mail-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 8px;
    margin: 0;
  }

  .mailing-container {
    display: flex;
    flex-direction: column;
    padding: 14px;

    .email-input {
      width: 100%;
      height: 7vh;
      margin: 16px 45px 16px 0;
      font-family: sans-serif;
    }
  }

  .sign-up-btn {
    font-size: 10px;
  }
}

/* Footer container. Padding allows for enough breathing room around the footer*/
</style>
