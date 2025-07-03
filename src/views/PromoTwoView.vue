<template>
  <div class="promo-container">
    <div class="arrow-container">
        <div>
          <a @click="open('home')"><i class="fa-solid fa-angle-left"></i> </a>
        </div>
        <div class="custom-text">
          <a @click="open('home')">Back to Home</a>
        </div>
      </div>
    <h2>Support @Boltzdameek - Claim Your Bonus!</h2>

    <p>Please take the time to support Bamboo Village Books by grabbing a copy of "Ashes of the City".
      To celebrate, we're giving away exclusive bonuses to readers who use the promo code below and submit their
      Amazon purchase. </p>
    <section class="promotion-content">
      <div class="text-content">
        <h4>How to Claim Your Reward</h4>
        <ol>
          <li>1. Purchase <a href="https://www.amazon.com/Ashes-City-Quinton-Taylor-Garcia/dp/B0DJZF3DM3">
              "<u>Ashes
                of the City</u>" </a> from Amazon.</li>
          <li>2. Enter the promo code SUPPORT-BOLTZ in the form below.</li>
          <li>3. Upload a screenshot or receipt of your purchase.</li>
          <li>4. Complete all fields in the form.</li>
          <li>5. Get your exclusive digital bonus within 24-48 hours.</li>
        </ol>
        <h4>Rewards You'll Recieve</h4>
        <div class="bullet-points">
          <ul>
            <li>Digital Art Pack</li>
            <li>Secret Chapter PDF</li>
            <li>Entry Into Our Monthly Giveaway</li>
            <li>Social Media Shoutout</li>
          </ul>
        </div>
        <h4>Share the Love!</h4>
        <p>Already bought the book? Let the world know by filling out the form below! Post on IG or X and tag
          @Boltzdameek + @BambooVillageBooks. Use #SupportBoltz to be featured in our next campaign!</p>
      </div>
      <div class="image-content">
        <img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/images/ashes.jpg"
          alt="Ashes of the City book image">
      </div>
    </section>
    <div class="promo-form-container">
      <form class="promo-form" action="https://formspree.io/f/xblyzbdy" method="POST" @submit.prevent="checkPromoForm"
        autocomplete="off">
        <div class="promo-form-instructions">
          <h3>Please complete every field</h3>
          <h5>* Indicates required field</h5>
        </div>

        <div class="top-row-container">
          <div class="top-left-container">
            <div>
              <label class="title-input" for="first name">First Name <span>*</span></label>
              <input class="input-field" type="text" id="first name" name="first name" v-model="firstname"
                autocomplete="off" />
            </div>
            <div>
              <label class="title-input" for="last name">Last Name <span>*</span></label>
              <input class="input-field" type="text" id="last name" name="last name" v-model="lastname"
                autocomplete="off" />
            </div>
            <div>
              <label class="title-input" for="email">Email <span>*</span></label>
              <input class="input-field" type="text" id="email" name="email" v-model="email" autocomplete="off" />
            </div>

          </div>
          <div class="top-right-container">
            <div>
              <label class="title-input" for="code">Promo Code <span>*</span></label>
              <input class="input-field" type="text" id="code" name="code" v-model="code" autocomplete="off" />
            </div>
            <div>
              <label class="title-input" for="book">Book Title Purchased <span>*</span></label>
              <input class="input-field" type="text" id="book" name="book" v-model="book" autocomplete="off" />
            </div>
            <div>
              <label class="title-input" for="refer">Referral Name (Optional)</label>
              <input class="input-field" type="text" id="refer" name="refer" autocomplete="off" />
            </div>
          </div>
        </div>
        <div class="upload-container">
          <label for="form-message">Upload Screenshot<span>*</span></label>
          <input class="file-input-field" type="file" name="upload">
        </div>
        <div class="submit-btn">
          <button class="submit gold-submit-btn" type="submit" @click="onSubmit">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'PromoView',
  data() {
    return {
      currentLocation: null,
      firstname: null,
      lastname: null,
      book: null,
      code: null,
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
    checkPromoForm(event) {
      if (!this.firstname) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.lastname) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.email) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.book) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!this.code) {
        alert("Please fill out all required fields.");
        return;
      }
      event.target.submit();
    }
  },
};
</script>

<style>
.promo-container {
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 32px 64px 0 64px;
  background-color: var(--secondary);

  p {
    font-size: 24px;
  }

  h4 {
    font-size: 32px;
    text-align: left;
    margin: 32px 0;
  }

  ol {
    list-style: none;
    font-family: sans-serif;
    font-weight: none;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 24px;
    margin-bottom: 24px;

    a {
      color: blue;
      font-weight: bold;
    }
  }
}

.promotion-content {
  display: flex;
  flex-direction: row;
  padding: 0;
}

.text-content {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.image-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  img {
    width: 70%;
  }
}

.promo-form-instructions {
  h3 {
    color: var(--quinary);
    font-size: 32px;
    margin-bottom: 16px;
  }
  h5 {
    color: red;
    font-size: 20px;
    margin-bottom: 48px;
  }
}

.promo-form-container {
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 56px 0 90px 0;
  padding: 24px;

  label {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    text-align: left;
    color: var(--quinary);
    font-weight: bold;
  }

  span {
    color: red;
  }

  .input-field {
    width: 45vw;
    margin-bottom: 24px;
    font-family: sans-serif;
  }
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
  margin-right: 10px;
  width: 50%;
}

/* Top Right */
.top-right-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10px;
  width: 50%;
}

/* Middle Row */
.upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  input[type="file"]::file-selector-button {
    padding: 10px 25px;
  }
}

@media (min-width:768px) and (max-width:1024px) {
  .promotion-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .image-content {
    width: 100%;

    img {
      margin: 32px;
      width: 50%;
    }
  }

  .text-content {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .arrow-container {
    margin-bottom: 0;
  }

  .promo-container {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 32px 40px 0 40px;
    background-color: var(--secondary);

    p {
      font-size: 16px;
    }

    h2 {
      margin-bottom: 32px;
    }

    h4 {
      font-size: 32px;
      text-align: left;
      margin: 32px 0;
    }

    ol {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    li {
      font-size: 16px;
    }
  }

  .promotion-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
    }

    .text-content {
      width: 100%;
    }

    .image-content {
      width: 100%;

      img {
        margin: 32px;
        width: 50%;
      }
    }
  }

  .promo-form-container {
    .input-field {
      width: 64vw;
    }

    .promo-form {
      .top-row-container {
        flex-direction: column;
        align-items: center;
      }

      .top-left-container {
        margin: 0;
        align-items: center;
      }

      .top-right-container {
        margin: 0;
        align-items: center;
      }

      .upload-container {
        padding: 20px;
      }
    }
  }
}
</style>