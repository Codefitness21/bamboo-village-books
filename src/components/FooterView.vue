<template>
    <div class="footer-container">
        <div class="top-info-row">
            <div class="company-logo-container">
                <a @click="open('home')"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/bvb-circle-logo.png" alt="Bamboo Village Logo" /></a>
                <div class="copyright">Copyright © 2025 Bamboo Village Books - All Rights Reserved.</div>
            </div>
            <div class="hours-container">
                <h6>Hours</h6>
                <div class="schedule">
                    <div>Monday: 9:00 am - 5:00 pm</div>
                    <div>Tuesday: 9:00 am - 5:00 pm</div>
                    <div>Wednesday: 9:00 am - 5:00 pm</div>
                    <div>Thursday: 9:00 am - 5:00 pm</div>
                    <div>Friday: 9:00 am - 5:00 pm</div>
                    <div>Saturday: Closed</div>
                    <div>Sunday: Closed</div>
                </div>
            </div>
            <div class="contact-container">
                <div class="address">
                    <h6>Address</h6>
                    <div>Bamboo Village Books <br> San Antonio, Texas</div>
                </div>
                <div class="email">
                    <h6>Email</h6>
                    <a href="mailto:bamboovillagebooks@gmail.com">bamboovillagebooks@gmail.com</a>
                </div>
                <div class="social-media-icons">
                    <a href="https://www.linkedin.com/company/bamboo-village-books/"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/linkedin.png" alt="Linkedin Logo" /></a>
                    <a href="https://x.com/bamboovillagez"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/twitter-x.png" alt="Twitter Logo" /></a>
                    <a href="https://www.instagram.com/reel/DEVvTjgSrlR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/instagram.png" alt="Instagram Logo" /></a>
                    <a href="https://www.facebook.com/bamboo.village.books"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/facebook.png" alt="Facebook Logo" /></a>
                    <a href="https://www.tiktok.com/@bamboovillagebooks"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/tiktok.png" alt="Tiktok Logo" /></a>
                    <a href="https://youtu.be/yoKTlytbFq8"><img src="https://bamboovillagebooks.s3.us-east-2.amazonaws.com/logos/youtube.png" alt="Youtube Logo" /></a>
                </div>
            </div>
        </div>
        <div class="bottom-copyright-row">
            <div class="copyright">Copyright © 2025 Bamboo Village Books - All Rights Reserved.</div>
        </div>
</div>
</template>

<script>
export default {
  name: 'FooterView',
  data () {
    return {
      currentLocation: null
    }
  },
  async mounted () {
    this.currentLocation = this.$route.name
    window.scrollTo(0, 0)
  },
  methods: {
    open (target) {
      this.currentLocation = target
      this.$router.push({ name: target })
    }
  }
}
</script>

<!-- Keeping close to the rule of 8 for spacing and font sizes. -->
<style>
.footer-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 32px;
    background-color: var(--primary);
}

.top-info-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

/* Company logo */
.company-logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.company-logo-container img {
    width: 170px;
}

/* Days/hours */
h6 {
    color: var(--quarternary);
    font-family: serif;
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
}

.email {
    a {
        color: var(--secondary);
        text-decoration: none;
    }
}

.hours-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 14px;
    color: var(--secondary);
}

.schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    font-family: sans-serif;
}

.contact-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
    color: var(--secondary);
}

/* Social media icons. The spacing between the icons is typically between 8 - 10px */
.social-media-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.social-media-icons img {
    width: 20px;
    box-shadow: #00000000 0 7px 29px 0;
}

.bottom-copyright-row {
    display: none;
}

.copyright {
    font-size: 12px;
    font-weight: bold;
    color: var(--secondary)
}

@media (max-width:767px)  {
    .company-logo-container {
        display: none;
    }

    .top-info-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .hours-container {
        text-align: center;
    }
    .contact-container {
        gap: 30px;
    }
}
}
</style>
