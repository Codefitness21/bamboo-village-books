<template>
  <div class="form-page-container">
    <section class="form-container">
      <div class="arrow-container">
        <div>
          <a @click="open('intern')"><i class="fa-solid fa-angle-left"></i> </a>
        </div>
        <div class="custom-text">
          <a @click="open('intern')">Back to Interns</a>
        </div>
      </div>
      <h2>Internship Application Form</h2>
      <h3>Sign up for more information about becoming an intern at Bamboo Village Books.</h3>
      <div class="intern-form-container">
        <form class="intern-form" action="https://formspree.io/f/meoeydbj" method="POST" @submit.prevent="checkInternForm" autocomplete="off">
          <div class="form-instructions">
            <h3>Please fill out every field.</h3>
          </div>
          <div class="top-row-container">
            <div class="top-left-container">
              <div>
                <label class="title-input" for="first name">First Name *</label>
                <input class="input-field" type="text" id="first name" name="first name" v-model="firstname" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="email">Email *</label>
                <input class="input-field" type="text" id="email" name="email"  v-model="email" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="date">Date of Birth *</label>
                <input class="input-field" type="text" placeholder="MM/DD/YYYY" id="date" name="date" v-model="date" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="address">Address *</label>
                <input class="input-field" type="text" id="address" name="address" v-model="address" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="city">City *</label>
                <input class="input-field" type="text" id="city" name="city" v-model="city" autocomplete="off"/>
              </div>
            </div>
            <div class="top-right-container">
              <div>
                <label class="title-input" for="last name">Last Name *</label>
                <input class="input-field" type="text" id="last name" name="last name" v-model="lastname" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="phone">Phone *</label>
                <input class="input-field" type="text" placeholder="(_ _ _) _ _ _ - _ _ _ _" id="phone" name="phone" v-model="phone" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="school">School Name *</label>
                <input class="input-field" type="text" id="school" name="school" v-model="school" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="zip">Zip Code *</label>
                <input class="input-field" type="text" id="zip" name="zip" v-model="zipcode" autocomplete="off"/>
              </div>
              <div>
                <label class="title-input" for="state">State *</label>
                <input class="input-field" type="text" id="state" name="state" v-model="state" autocomplete="off"/>
              </div>
            </div>
          </div>
          <div class="middle-row-container">
            <label for="form-message">Tell us how you found us: *</label>
            <textarea class="text-area-intern" type="form-message" id="form-message" name="form-message" v-model="message" autocomplete="off"></textarea>
            <h3>Select the day(s) you're available for work and fill in your available hours next to the corresponding
              weekday: *</h3>
          </div>
          <div class="bottom-row-container">
            <div class="bottom-left-container">
              <div class="form-schedule">
                <input class="checkbox" type="checkbox" id="monday" name="Monday" v-model="ischecked" autocomplete="off">
                <label class="checkbox-font" for="monday">Monday</label>
              </div>
              <div class="form-schedule">
                <input class="checkbox" type="checkbox" id="tuesday" name="Tuesday" v-model="ischecked" autocomplete="off">
                <label class="checkbox-font" for="tuesday">Tuesday</label>
              </div>
              <div class="form-schedule">
                <input class="checkbox" type="checkbox" id="wednesday" name="Wednesday" v-model="ischecked" autocomplete="off">
                <label class="checkbox-font" for="wednesday">Wednesday</label>
              </div>
              <div class="form-schedule">
                <input class="checkbox" type="checkbox" id="thursday" name="Thursday" v-model="ischecked" autocomplete="off">
                <label class="checkbox-font" for="thursday">Thursday</label>
              </div>
              <div class="form-schedule">
                <input class="checkbox" type="checkbox" id="friday" name="Friday" v-model="ischecked" autocomplete="off">
                <label class="checkbox-font" for="friday">Friday</label>
              </div>
            </div>
            <div class="bottom-right-container">
              <div>
                <input class="time-input-field" placeholder="(i.e.) 3pm - 5pm CST" type="text" id="monday"
                  name="monday" autocomplete="off"/>
              </div>
              <div>
                <input class="time-input-field" type="text" id="tuesday" name="tuesday"  autocomplete="off" />
              </div>
              <div>
                <input class="time-input-field" type="text" id="wednesday" name="wednesday"   autocomplete="off"/>
              </div>
              <div>
                <input class="time-input-field" type="text" id="thursday" name="thursday"  autocomplete="off"/>
              </div>
              <div>
                <input class="time-input-field" type="text" id="friday" name="friday"   autocomplete="off"/>
              </div>
            </div>
          </div>
          <div class="apply-btn">
            <button class="apply">APPLY</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FormView',
  data() {
    return {
      currentLocation: null,
      firstname: null,
      email: null,
      date: null,
      address: null,
      city: null,
      lastname: null,
      phone: null,
      school: null,
      zipcode: null,
      state: null,
      message: null,
      checkedBox: []
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
    checkInternForm(event) {
      if(!this.firstname) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.email) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.date) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.address) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.city) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.lastname) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.phone) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.school) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.zipcode) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.state) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.message) {
        alert("Please fill out all required fields.");
        return;
      }
      if(!this.ischecked) {
        alert("Please check all boxes that apply.");
        return;
      }
      event.target.submit();
    }
  }
}
</script>

<style>
/* Contact page container */
.form-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Section 2 - Contact form. Split into a top and bottom section and left and right container for better alignment and repsonsiveness
for other devices. */
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary);
  color: var(--quarternary);
  padding: 32px 64px 96px 64px;

  h2 {
    margin: 48px 0 0 0;
  }

  h3 {
    margin: 16px 0 32px 0;
  }
}

.arrow-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: none;
    padding-top: 64px;
    font-weight: bold;
    cursor: pointer;
    gap: 8px;

    a {
      color: var(--quinary);
    }
  }

  .form-instructions {
  h3 {
    color: var(--secondary);
    font-size: 32px;
    margin-bottom: 48px;
  }
}

.intern-form-container {
  display: flex;
  flex-direction: row;
  align-self: center;
  background-color: var(--quarternary);
  margin: 0 0 90px 0;
  padding: 16px 48px;

  intern-form {
    margin: 0;
  }

  .input-field {
    width: 31vw;
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
.input-field {
  padding: 16px;
  font-family: sans-serif;
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

.text-area-intern {
  width: 100%;
  height: 10vh;
  padding: 8px;
  line-height: 1.6;
  font-family: sans-serif;
}

/* Bottom Row */
.bottom-row-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
}

/* Bottom Left */
.bottom-left-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
}

.form-schedule {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  gap: 8px;
}

.checkbox {
  height: 3vh;
  width: 2vw;
}

.checkbox-font {
  font-size: 20px;
}

/* Bottom Right */
.bottom-right-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
  width: 80%;
}

.time-input-field {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  height: 2vh;
  width: 100%;
}

@media (min-width: 1600px) {
  .intern-form-container {
    .input-field {
      width: 21vw;
    }
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .intern-form {
    .input-field {
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
}

@media (max-width: 767px) {
  .form-container {
    .arrow-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      background: none;
      padding-top: 64px;
      font-weight: bold;
      cursor: pointer;
      gap: 8px;

      a {
        color: var(--quinary);
      }
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

    .intern-form-container {
      .input-field {
        width: 64vw;
      }
    }

    .intern-form {
      .top-row-container {
        align-items: center;
      }

      .top-left-container {
        align-items: center;
      }

      .top-right-container {
        align-items: center;
      }

      .bottom-left-container {
        width: 100%;
      }

      .bottom-right-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 15px;
        width: 100%;
      }
    }
  }

  .checkbox {
    width: 4vw;
  }
}
</style>
