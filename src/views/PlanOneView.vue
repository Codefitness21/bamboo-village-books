<template>
  <div class="planone-page-container">
    <section class="planone-container">
      <div class="arrow-container">
        <div>
          <a @click="open('services')"><i class="fa-solid fa-angle-left"></i> </a>
        </div>
        <div class="custom-text">
          <a @click="open('services')">Back to Services</a>
        </div>
      </div>
      <h2>Beginner Package: First Chapter</h2>
      <div class="planone-form-container">
        <form class="planone-form" action="https://formspree.io/f/xkgjwqrw" method="POST" @submit.prevent=checkPlanoneForm
          autocomplete="off">
          <div class="form-instructions">
            <h3>Please complete every field.</h3>
          </div>
          
          <div class="top-row-container">
            <div class="top-left-container">
              <div>
                <label class="title-input" for="first name">First Name *</label>
                <input class="planone-input-field" type="text" id="first name" name="first name" v-model="firstname"
                  autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="email">Email *</label>
                <input class="planone-input-field" type="text" id="email" name="email" v-model="email"
                  autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="address">Address *</label>
                <input class="planone-input-field" type="text" id="address" name="address" v-model="address"
                  autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="city">City *</label>
                <input class="planone-input-field" type="text" id="city" name="city" v-model="city"
                  autocomplete="off" />
              </div>
            </div>
            <div class="top-right-container">
              <div>
                <label class="title-input" for="last name">Last Name *</label>
                <input class="planone-input-field" type="text" id="last name" name="last name" v-model="lastname"
                  autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="phone">Phone *</label>
                <input class="planone-input-field" type="text" placeholder="(_ _ _) _ _ _ - _ _ _ _" id="phone"
                  name="phone" v-model="phone" autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="zip">Zip Code *</label>
                <input class="planone-input-field" type="text" id="zip" name="zip" v-model="zipcode"
                  autocomplete="off" />
              </div>
              <div>
                <label class="title-input" for="state">State *</label>
                <input class="planone-input-field" type="text" id="state" name="state" v-model="state"
                  autocomplete="off" />
              </div>
            </div>
          </div>
          <div class="middle-row-container">
            <label for="form-message">How can we support you? *</label>
            <textarea class="text-area-plan" type="form-message" id="form-message" name="form-message" v-model="message"
              autocomplete="off"></textarea>
            <h3>Make sure all fields are completed with correct information and click apply. Please allow 24 - 48 hours
              response time.</h3>
          </div>
          <div class="apply-btn">
            <button class="apply" type="submit" @click="onSubmit">APPLY</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PlanOneView',
  data() {
    return {
      currentLocation: null,
      firstname: null,
      email: null,
      address: null,
      city: null,
      lastname: null,
      phone: null,
      zipcode: null,
      state: null,
      message: null
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
    checkPlanoneForm(event) {
      if (!this.firstname) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.email) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.address) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.city) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.lastname) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.phone) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.zipcode) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.state) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.message) {
        alert("Please fill out all required fields.");
        return;
      }
      event.target.submit();
    }
  }
}
</script>

<style>
/* Contact page container */
.planone-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 2 - Contact form. Split into a top and bottom section and left and right container for better alignment and repsonsiveness
  for other devices. */
.arrow-container a {
  color: var(--quinary);
}

.planone-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
  color: var(--quarternary);
  padding: 32px 64px 96px 64px;

  h2 {
    margin: 0px 0 48px 0;
  }

  h3 {
    
    margin: 16px 0 32px 0;
  }
}
.form-instructions {
  h3 {
    color: var(--secondary);
    font-size: 32px;
    margin-bottom: 48px;
  }
}

.planone-form-container {
  display: flex;
  flex-direction: row;
  align-self: center;
  background-color: var(--quarternary);
  margin: 0 0 90px 0;
  padding: 16px 48px;

  planone-form {
    margin: 0;
  }

  .planone-input-field {
    width: 33vw;
    margin-bottom: 16px;
    font-family: sans-serif;
  }
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  text-align: left;
  color: var(--secondary);
}

/* Top Row */
.top-row-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* Top Left */
.top-left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}

/* Top Right */
.top-right-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
}

/* Sapcing allowed between the input fields */
.planone-input-field {
  padding: 16px;
}

/* Middle Row */
.middle-row-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: var(--secondary);
    margin-top: 32px;
    text-align: left;
  }
}

.text-area-plan {
  width: 100%;
  height: 24vh;
  padding: 8px;
  line-height: 1.6;
  font-family: sans-serif;
}


@media (min-width: 1600px) {
  .planone-form-container {
    .planone-input-field {
      width: 24vw;
    }
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .planone-form {
    .planone-input-field {
      width: 36vw;
    }

    .time-input-field {
      padding: 8px;
      height: 3.3vh;
    }

    label {
      justify-content: center;
    }
  }

  .arrow-container {
    margin-bottom: 24px;
  }
}

@media (max-width: 767px) {
  .planone-container {
    padding: 32px 40px 96px 40px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 19px;
  }

  .top-row-container {
    flex-direction: column;
  }

  .form-container {
    padding: 32px 32px 32px 32px;
  }

  .arrow-container {
    margin-bottom: 24px;
  }

  .planone-form-container {
    .planone-input-field {
      width: 64vw;
    }
  }

  .planone-form {
    .top-row-container {
      align-items: center;
    }

    .top-left-container {
      align-items: center;
    }

    .top-right-container {
      align-items: center;
    }
  }
}
</style>