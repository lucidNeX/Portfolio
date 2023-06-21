<template>
  <div class="container">
    <div class="card-wrapper">
      <div class="card profile-two">
        <div class="card-image profile-img--two">
          <img src="../assets/photos/subhashpic2.JPEG" alt="Profile Photo" />
          <!-- src="https://image.ibb.co/c9rY6J/profile02.jpg" -->
        </div>

        <ul class="social-icons">
          <li>
            <a :href="linkedInLink()" target="_blank">
              <q-btn round class="shadow-9 bg-white" size="md">
                <q-avatar square size="2rem" font-size="52px">
                  <img :src="linked_ing_icon" class="animated-image" /> </q-avatar
                ><q-tooltip> LinkedIn </q-tooltip></q-btn
              >
            </a>
          </li>
          <li>
            <a :href="instagramLink()" target="_blank">
              <q-btn round class="shadow-9 bg-white" size="md">
                <q-avatar square size="2rem" font-size="52px">
                  <img :src="Instagram_icon" class="animated-image" /> </q-avatar
                ><q-tooltip> Instagram </q-tooltip></q-btn
              >
            </a>
          </li>
          <li>
            <a :href="whatsAppLink()" target="_blank">
              <q-btn round class="shadow-9 bg-white" size="md">
                <q-avatar square size="2rem" font-size="52px">
                  <img :src="WhatsApp_icon" class="animated-image" /> </q-avatar
                ><q-tooltip> WhatsApp </q-tooltip></q-btn
              >
            </a>
          </li>
          <li>
            <a :href="emailLink()" target="_blank">
              <q-btn round class="shadow-9 bg-white" size="md">
                <q-avatar square size="2rem" font-size="52px">
                  <img :src="gmail_icon" class="animated-image" /> </q-avatar
                ><q-tooltip> Gmail </q-tooltip></q-btn
              >
            </a>
          </li>
        </ul>

        <div class="details jane text-center text-black">
          <h5 class="text-bold">
            {{ title }}
            <br />
            <span class="job-title text-grey text-italics text-subtitle2">{{
              subTitle
            }}</span>
            <br />
            <span class="job-title text-grey text-italics text-subtitle2">{{
              otherDetails
            }}</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WhatsApp_icon from "../assets/photos/whatsappLogo.png";
import Instagram_icon from "../assets/photos/instaLogo.png";
import linked_ing_icon from "../assets/linked_in.png";
import gmail_icon from "../assets/photos/gmailLogo.png";

export default {
  name: "ProfileCard2",
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    otherDetails: { type: String, default: "" },
    phoneNumber: { type: String, default: "0123456789" },
    linkedinUrl: { type: String, default: "" },
    instagramUrl: { type: String, default: "" },
    emailId: { type: String, default: "" },
    imgUrl: { type: String, default: "" },
  },
  methods: {
    emailLink() {
      const email = this.emailId; // Replace with your desired email address
      const subject = "Hello"; // Replace with your desired subject

      return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    },
    phoneLink() {
      return `tel:${this.info.phone}`;
    },
    whatsAppLink() {
      return `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=Hi`;
    },
    linkedInLink() {
      return `${this.linkedinUrl}`;
    },
    instagramLink() {
      return `${this.instagramUrl}`;
    },
    gmailLink() {
      return `${this.gmailUrl}`;
    },
  },

  setup() {
    return {
      WhatsApp_icon,
      linked_ing_icon,
      Instagram_icon,
      gmail_icon,
    };
  },
};
</script>
<style lang="scss">
/**** Sass Variables ****/
$bodyFont: "Open Sans", sans-serif;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: $bodyFont;
  background: #333;
}

.container {
  max-width: 900px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
}

.card-wrapper {
  width: 400px;
  height: 500px;
  position: relative;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 450px;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.5s;

  .card-image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #000;
    transition: 0.5s;
  }

  &:hover img {
    opacity: 0.4;
    transition: 0.5s;
  }
}

.card:hover .card-image {
  transform: translateY(-100px);
  transition: all 0.9s;
}

/**** Social Icons *****/

.social-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;

  li {
    list-style: none;

    a {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #fff;
      font-size: 23px;
      color: #333;
      font-weight: bold;
      margin: 0 6px;
      transition: 0.4s;
      transform: translateY(200px);
      opacity: 0;
    }
  }
}

.card:hover .social-icons li a {
  transform: translateY(0px);
  opacity: 1;
}

.social-icons li a:hover {
  background: #000;
  transition: 0.2s;
  .fab {
    color: #fff;
  }
}

.social-icons li a .fab {
  transition: 0.8s;

  &:hover {
    transform: rotateY(360deg);
    color: #fff;
  }
}

.card:hover li:nth-child(1) a {
  transition-delay: 0.1s;
}
.card:hover li:nth-child(2) a {
  transition-delay: 0.2s;
}
.card:hover li:nth-child(3) a {
  transition-delay: 0.3s;
}
.card:hover li:nth-child(4) a {
  transition-delay: 0.4s;
}

/**** Personal Details ****/

.details {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 120px;
  z-index: 1;
  padding: 10px;

  h2 {
    margin: 30px 0;
    padding: 0;
    text-align: center;

    .job-title {
      font-size: 1rem;
      line-height: 2.5rem;
      color: #333;
      font-weight: 300;
    }
  }
}

.jane {
  position: absolute;
  bottom: -120px;
  left: 0;
  opacity: 0;
  background: #fff;
  width: 100%;
  height: 120px;
  z-index: 3;
  padding: 10px;
  transition: 0.4s;
}

.profile-two .social-icons li a {
  border-radius: 50%;
}

.card:hover .profile-img--two {
  transform: rotateY(180deg);
}

.card:hover .jane {
  bottom: 0;
  left: 0;
  transition-delay: 0.5s;
  opacity: 1;
}
</style>
