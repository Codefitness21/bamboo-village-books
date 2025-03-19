<template>
  <div class="services-page-container">
    <section class="services-packages-container">
      <div class="services-title">
        <h1>SERVICES</h1>
      </div>
      <div class="services-intro">
        <h2>Why Choose Bamboo Village Books?</h2>
        <p>We provide expert support for first-time authors evolving into seasoned writers, comprehensive services
          tailored to your needs at every stage, global distribution that connects readers worldwide, and professional
          designs that make your book stand out.</p>
      </div>
      <div class="services-title">
        <h2>Select a Plan</h2>
        <h3>(Military and student friendly)</h3>
      </div>
      <div class="services-package-bundle">
        <div class="services-package light-green">
          <h3>Beginner Package: <br> First Chapter</h3>
          <p>Designed for first-time authors, beginning their journey with writing and publishing.</p>
          <h2>$1,000 - $1,500</h2>
          <div class="package-inclusion">
            <h4>This package includes:</h4>
          </div>
          <br>
          <div class="services-package-items">
            <ul>
              <li>Manuscript Assessment: A basic review of your
                manuscript with feedback on overall structure, theme,
                and character development.</li>
              <li>Cover Design: A standard cover design to give your
                book a professional look.</li>
              <li>Formatting Services: Basic formatting for both
                eBook and print versions.</li>
              <li>ISBN Assignment: Assignment of an International
                Standard Book Number, essential for sales and distribution.</li>
              <li>Marketing Consultation: A one-hour consultation
                to discuss marketing strategies for beginners.</li>
              <li>Distribution: Listing your book on major platforms
                like Amazon, Barnes &amp; Noble, etc.</li>
              <li>Author Copies: 1 complimentary copy of your book.</li>
            </ul>
          </div>
          <div class="request-quote-btn">
            <a @click="open('planone')"><button class="request-quote">REQUEST QUOTE</button></a>
          </div>
        </div>
        <div class="services-package mid-green">
          <h3>Intermediate Package: <br> Developing Story</h3>
          <p>Tailored for authors with polished manuscript, seeking comprehensive support.</p>
          <h2>$2,000 - $2,500</h2>
          <div class="package-inclusion">
          <h4>This package includes everything in the beginner package, plus:</h4>
        </div>
          <div class="services-package-items">
            <ul>
              <li>Enhanced Manuscript Assessment: Detailed analysis
                including plot, pacing, and dialogue.</li>
              <li>Premium Cover Design: Custom cover design with two revision rounds.</li>
              <li>Advanced Formatting: Enhanced formatting options with added stylistic elements.</li>
              <li>ISBN Assignment: Assignment of an International Standard Book Number, essential for sales and
                distribution.</li>
              <li>Social Media Setup: Assistance in setting up author profiles on major social media platforms.</li>
              <li>Expanded Distribution: Inclusion of additional distribution channels, including international.</li>
              <li>Author Copies: 2 complimentary copies of your book.</li>
            </ul>
          </div>
          <div class="request-quote-btn">
            <a @click="open('plantwo')"><button class="request-quote">REQUEST QUOTE</button></a>
          </div>
        </div>
        <div class="services-package dark-green">
          <h3>Publishing Package: <br> Bestseller Bound</h3>
          <p>The ultimate package for authors who are ready to make a significant impact.</p>
          <h2>$5,000 - $8,500</h2>
          <div class="package-inclusion">
          <h4>It encompasses all services from the previous packages with additional premium services:</h4>
        </div>
          <div class="services-package-items">
            <ul>
              <li>Professional Editing: Comprehensive editing services including line, copy, and developmental editing.
              </li>
              <li>Exclusive Cover Design: High-end custom cover design with unlimited revisions.</li>
              <li>Comprehensive Marketing Plan: Development of a detailed marketing and publicity strategy.</li>
              <li>ISBN Assignment: Assignment of an International Standard Book Number, essential for sales and
                distribution.</li>
              <li>Press Release: Professional press release writing and distribution.</li>
              <li>Book Launch Support: Assistance in organizing a book launch event, virtual or in-person.</li>
              <li>Author Branding: Personal branding consultation for long-term author success.</li>
              <li>Expanded Social Media Strategy: Advanced social media marketing strategies and campaigns.</li>
              <li>Extended Distribution: Wide distribution including bookstores, libraries, and schools.</li>
              <li>Author Copies: 3 complimentary copies of your book.</li>
            </ul>
          </div>
          <div class="request-quote-btn">
            <a @click="open('planthree')"><button class="request-quote request-quote-white">REQUEST QUOTE</button></a>
          </div>
        </div>
      </div>
      <section class="services-outro">
        <p>Contact us for expert book editing, precise proofreading, and professional book idea formatting. We're here
          to
          bring your publishing dreams to life with our top-notch services. Reach out today to turn your manuscript into
          a
          literary masterpiece.</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
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
/* Service page container */
.services-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.services-title h1 {
  margin-top: 124px;
}

/* Section 2 - Service Packages */
.services-packages-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--quinary);
  padding: 0 64px 96px 64px;
  background-color: var(--secondary);
}

.services-title {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 8px;
  }
}

.services-package-bundle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 48px 0 48px 0;
}

/* 23px puts the package titles on only two lines */
.services-package {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background-color: var(--secondary);
  color: var(--quinary);
  padding: 32px;

  p {
    font-size: 19px;
  }
}

.package-inclusion {
  display: flex;
  flex-direction: row;
  align-self: flex-start;
}

.services-package h2 {
  margin: 32px 0 32px 0;
  text-align: center;
}

.services-package h3 {
  font-size: 23px;
  margin-bottom: 32px;
  line-height: 1.4;
  text-align: center;
}

.services-package h4 {
  text-align: left;
}

/* Service package items */
.services-package-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 115vh;
  margin-top: 24px;
}

.services-package li {
  position: relative;
  font-size: 19px;
  text-align: left;
}

.services-package li::before {
  position: absolute;
  content: "•";
  top: 0;
  left: 0;
}

.extra-space h4 {
  margin-bottom: 42px;
}

.light-green {
  color: var(--quinary);
  background-color: var(--senary);
}

.mid-green {
  color: var(--secondary);
  background-color: var(--septenary);
}

.dark-green {
  color: var(--secondary);
  background-color: var(--quarternary);
}

/* Section 3 - Outro */
.services-outro {
  margin-bottom: 32px;
}

@media (min-width:768px) and (max-width:1024px) {
  .services-title {
h1 {
  font-size: 78px;
}
h2 {
  font-size: 56px;
}
  }

  .services-package-bundle {
    flex-direction: column;
  }

  .services-package-items {
    min-height: 0;
  }

  .services-intro {
    p {
    font-size: 24px;
  }
  }

  .services-package-items {
    min-height: 0;

    li {
      font-size: 16px;
    }
  }

  .services-package {
    h3 {
      font-size: 40px;
    }

    h4 {
      font-size: 20px;
      text-align: left;
    }
    p {
      font-size: 24px;
    }
  }
}

@media (max-width: 767px) {
  .services-packages-container {
    padding: 0 32px 32px 32px;
  }

  h1 {
    font-size: 40px;
  }

  .services-intro {
    h2 {
      margin: 48px 0 16px 0;
    }
  }

  p {
    font-size: 14px;
  }

  .services-package-items {
    min-height: 0;

    li {
      font-size: 14px;
    }
  }

  .services-package {
    h4 {
      font-size: 17px;
      text-align: left;
    }
  }
}
</style>
