<template>
  <div class="contact-page-container">
    <section class="contact-us-container">
      <div class="contact-information-container">
        <div class="contact-image-container">
          <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/team-award.jpg"
            alt="Team award at ribbon cutting">
        </div>
        <div class="contact-form-container">
          <form class="contact-form" action="https://formspree.io/f/xbldnbba" method="POST" @submit.prevent="checkForm" autocomplete="off">
            <div class="header">
              <h2>Contact For More Information</h2>
            </div>
            <div class="input-container">
              <div class="top-row">
                <div class="left-container">
                  <div>
                    <label class="title-input" for="first name">First Name*</label>
                    <input class="input-field" type="text" id="firstname" name="firstname" v-model="firstname"/>
                  </div>
                  <div>
                    <label class="title-input" for="email">Email*</label>
                    <input class="input-field" type="text" id="email" name="email" v-model="email" />
                  </div>
                </div>
                <div class="right-container">
                  <div>
                    <label class="title-input" for="last name">Last Name*</label>
                    <input class="input-field" type="text" id="lastname" name="lastname" v-model="lastname"/>
                  </div>
                  <div>
                    <label class="title-input" for="phone">Phone*</label>
                    <input class="input-field" type="text" placeholder="(_ _ _) _ _ _ - _ _ _ _" id="phone"
                      name="phone" v-model="phone"/>
                  </div>
                </div>
              </div>
              <div class="bottom-row">
                <label for="contact-message">Message*</label>
                <textarea class="text-area-contact" type="contact-message" id="contact-message"
                  name="contact-message" v-model="completedField"></textarea>
              </div>
              <!-- <h3>Make sure all fields are completed. Please allow 24 - 48 hours response time.</h3> -->
              <div class="submit-btn">
                <button type="submit">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
        <!-- <div class="contact-form-thankyou">
          Thank you
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      firstname: null,
      email: null,
      lastname: null,
      phone: null
    }
  },
  async mounted() {
    this.currentLocation = this.$route.name
  },
  methods: {
    open(target) {
      this.currentLocation = target
      this.$router.push({ name: target })
    },
   checkForm(event) {
      if (!this.completedField) {
        alert("Please fill out all required fields.");
        return;
      }
      event.target.submit();
    }
  },
};
</script>

<style>
/* Contact page container */
.contact-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-image img {
  margin-top: 32px;
  width: 100%;
}

/* Section 2 - Contact form. Split into a top and bottom section and left and right container for better alignment and repsonsiveness
for other devices. */
.contact-us-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--quarternary);
  background-image: url("https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/bamboo-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    padding: 40px 0 40px 0;
    color: var(--secondary);
    margin: 0;
  }
}

.contact-information-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 96px 48px 96px 48px;
}

.contact-form-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 20px;

  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--quinary);
    padding: 0 32px 0 32px;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    text-align: left;
  }

  input {
    height: 6.2vh;
    width: 100%;
  }
}

.contact-image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  img {
    width: 71%;
  }
}

/* Top-row */
.top-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}

/* Sapcing allowed between the input fields */
.input-field {
  padding: 16px;
  margin-bottom: 16px;
  font-family: sans-serif;
}

/* Bottom row */
.bottom-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.text-area-contact {
  width: 100%;
  height: 32vh;
  padding: 16px;
  line-height: 1.6;
  font-family: sans-serif;
}

@media (min-width:768px) and (max-width:1410px) {
  .header {
    h2 {
      font-size: 56px;
    }
  }
  
 .contact-information-container {
  width: 100%;
  .contact-image-container {
    width: 0%;
  }
  img {
    display: none;
  }
 }

 .contact-form-container {
  width: 90%;
  .contact-form {
    align-items: center;
  }
  input {
    font-size: 15px;
  }
 }
}

@media (max-width: 767px) {
  .contact-information-container {
    padding: 96px 32px 96px 32px;
  }

  .contact-image-container {
    display: none;
    width: 100%;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    /* align-self: flex-start; */
  }

  .contact-form-container {
    input {
    height: 5vh;
    width: 100%;
  }
    width: 100%;

    .top-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    .left-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .right-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .text-area-contact {
      height: 24h;
      width: 100%;
    }
  }
}
</style>
