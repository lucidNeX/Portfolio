<template>
  <q-layout class="bg-black">
    <q-header :elevated="isNavbarElevated" reveal class="text-white">
      <q-page-sticky
        expand
        position="top"
        class="bg-transparent mobile-hide platform-ios-hide platform-android-hide"
      >
        <q-toolbar class="justify-center">
          <q-tabs v-model="selected_tab" shrink>
            <q-tab
              :style="[
                selected_tab == 'id_home'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_home')"
              style="width: 120px; min-height: auto !important"
              label="Home"
            />
            <q-tab
              :style="[
                selected_tab == 'id_about'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_about')"
              style="width:120px;min-height:auto; !important;"
              label="About"
            />
            <q-tab
              :style="[
                selected_tab == 'id_skills'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_skills')"
              style="width: 120px; min-height: auto !important"
              label="Skills"
            />
            <q-tab
              :style="[
                selected_tab == 'id_education'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_education')"
              style="width: 120px; min-height: auto !important"
              label="Education"
            />
            <q-tab
              :style="[
                selected_tab == 'id_experience'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_experience')"
              style="min-height: auto !important"
              label="Experience"
            />
            <q-tab
              :style="[
                selected_tab == 'id_projects'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_projects')"
              style="width: 120px; min-height: auto !important"
              label="Projects"
            />

            <q-tab
              :style="[
                selected_tab == 'id_contactDetails'
                  ? { color: theme_color }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_contactDetails')"
              style="min-height: auto !important"
              label="Contact"
            />

            <!-- <q-route-tab
              :to="(name = 'login')"
              :style="[
                selected_tab == 't_6'
                  ? { backgroundColor: theme_color, color: colorWhite }
                  : { color: colorWhite },
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              style="width: 120px; min-height: auto !important"
              label="Login"
            >
            </q-route-tab> -->
          </q-tabs>
        </q-toolbar>
      </q-page-sticky>
    </q-header>

    <q-footer id="id_contactDetails" class="text-center q-pt-none q-mt-none row bg-image">
      <q-toolbar class="q-pt-none q-mt-none">
        <div class="column col">
          <div class="absolute-top text-center">
            <a href="#id_home" v-smooth-scroll :style="{ textDecoration: 'none' }">
              <q-btn fab icon="keyboard_arrow_up" class="text-white" />
            </a>
          </div>

          <div class="text-h6 text-center q-pb-sm col-12">Thanks for your visit !!</div>

          <!-- <div class="text-grey text-center q-pt-sm">
            <h6 class="q-pt-none q-mt-none">You Can Contact Me On,</h6>
          </div> -->
          <!-- <div class="q-gutter-sm q-ma-md justify-between">
            <span class="text-white text-subtitle2">
              <a class="text-white" :href="phoneLink"
                ><q-icon name="phone" class="q-pl-none q-mr-sm" />{{ info.phone }}
                <q-tooltip> Phone </q-tooltip>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=7012099752&text=Hi"
                target="_blank"
              >
                <q-btn size="sm" round class="shadow-9 q-mt-sm bg-green">
                  <q-avatar size="2rem" font-size="52px">
                    <img :src="WhatsApp_icon" /> </q-avatar
                  ><q-tooltip> WhatsApp </q-tooltip></q-btn
                >
              </a>
            </span>
            <br />
            <span class="text-white q-px-md text-subtitle2"
              ><a class="text-white" :href="emailLink">
                <q-icon name="mail" class="q-pl-none q-mr-sm" />{{ info.email }}
                <q-tooltip> Email </q-tooltip>
              </a></span
            >
          </div> -->
          <div>
            <ProfileCard2
              title="SUBHASH SUBRAHMANIAN"
              subTitle="Software Engineer"
              otherDetails="subhash20jith@gmail.com || 7012099752"
              phoneNumber="7012099752"
              emailId="subhash20jith@gmail.com"
              linkedinUrl="https://www.linkedin.com/in/subhash-subrahmanian-37245a1b1"
              instagramUrl="https://instagram.com/_lucidnex_?igshid=ZGUzMzM3NWJiOQ=="
              imgUrl="../assets/photos/1685709617796.png"
            ></ProfileCard2>
          </div>

          <div class="text-grey text-center items-center q-pa-sm absolute-bottom text-h6">
            <!-- SUBHASH SUBRAHMANIAN <br />
            aka <br /> -->
            &copy;
            <a
              class="text-grey-8 text-italic text-decoration-none text-subtitle2"
              href="https://instagram.com/_lucidnex_?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
            >
              lucidNeX
            </a>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container class="q-pb-none q-mb-none">
      <div class="">
        <Home id="id_home" />
        <About id="id_about" />
        <Skills id="id_skills" />
        <Education id="id_education" />
        <!-- <Certifications id="5" /> -->
        <Experience id="id_experience" />
        <Projects id="id_projects" />
        <!-- <q-scroll-observer @scroll="onScroll" /> -->
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Education from "./components/Education.vue";
// import Certifications from "./components/Certifications.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import WhatsApp_icon from "./assets/photos/whatsappLogo.png";
import ProfileCard2 from "./components/ProfileCard2.vue";
import { scroll } from "quasar";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  components: {
    Home,
    About,
    Skills,
    Education,
    // Certifications,
    Experience,
    Projects,
    ProfileCard2,
  },
  computed: {
    emailLink() {
      const email = "subhash20jith@gmail.com"; // Replace with your desired email address
      const subject = "Hello"; // Replace with your desired subject

      return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    },
    phoneLink() {
      return `tel:${this.info.phone}`;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      let scrollTop = (window.scrollY || document.documentElement.scrollTop) + 500;
      this.isNavbarElevated = scrollTop > 0;

      // Update active tab based on scroll position
      // const homeOffset = document.getElementById("id_home").offsetTop;
      const aboutOffset = document.getElementById("id_about").offsetTop;
      const skillsOffset = document.getElementById("id_skills").offsetTop;
      const educationOffset = document.getElementById("id_education").offsetTop;
      const experienceOffset = document.getElementById("id_experience").offsetTop;
      const projectOffset = document.getElementById("id_projects").offsetTop;
      const contactOffset = document.getElementById("id_contactDetails").offsetTop;

      // console.log("scrollTop :", scrollTop);
      // console.log("experienceOffset projectOffset contactOffset:", experienceOffset, projectOffset, contactOffset);


      if (scrollTop < aboutOffset) {
        this.selected_tab = "id_home";
      } else if (scrollTop < skillsOffset) {
        this.selected_tab = "id_about";
      } else if (scrollTop < educationOffset) {
        this.selected_tab = "id_skills";
      } else if (scrollTop < experienceOffset) {
        this.selected_tab = "id_education";
      } else if (scrollTop < projectOffset) {
        this.selected_tab = "id_experience";
      } else if (scrollTop < contactOffset) {
        this.selected_tab = "id_projects";
      } else {
        this.selected_tab = "id_contactDetails";
      }
    },
    scrollToElement(id) {
      const el = document.getElementById(id);
      // console.log("el: ", el, el.offsetTop);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 3;
      const duration = 900;
      setVerticalScrollPosition(target, offset, duration);
      this.selected_tab = id;
    },
  },
  name: "App",
  setup() {
    const info = ref({
      address: "Parakkalam, Pallassana PO, Palakkad District, Kerala",
      city: "Palakkad",
      province: "C",
      postcode: "678505",
      phone: "7012099752",
      email: "subhash20jith@gmail.com",
    });
    return {
      info,
      WhatsApp_icon,
      selected_tab: ref("id_home"),
      theme_color: ref("rgb(0, 163, 82)"),
      colorWhite: ref("rgb(255 255 255)"),
      scrollPosition: ref(null),
      isNavbarElevated: ref(false),
    };
  },
};
</script>

<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 40rem !important
    .q-field__append
      display: none

.bg-image
  // background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(./assets/backgrounds/bg_lap01.jpg)
  // background: black
  // background-image: linear-gradient(to right, #0d1c1a, #2b3b39, #4c5c5a, #6f807e, #94a5a4)
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./assets/backgrounds/pexels-hasan-albari-1229861.png)
  background-repeat: no-repeat
  background-size: 100% 100%
  height: 100vh
  // background-size: cover
</style>
<style>
.overlay {
  background: linear-gradient(rgba(32, 30, 32, 0.53), rgba(30, 26, 26, 0.52));
  background-size: cover;
  background-repeat: no-repeat;
}
.overlay2 {
  background: linear-gradient(rgba(15, 15, 15, 0.773), rgba(15, 14, 14, 0.559));
  background-size: cover;
  background-repeat: no-repeat;
}

.quote {
  background: url(./assets/milky.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.bg-image2 {
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/milky.png); */
  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(./assets/photos/1685710274578.JPEG); */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/backgrounds/pexels-aaron-mello-185661.png);
  background-repeat: no-repeat;
  /* background-size: 100% 100%;
height: 100vh; */
  background-size: cover;
}
.bg-image3 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/backgrounds/jefferson-santos-9SoCnyQmkzI-unsplash.png);

  background-repeat: no-repeat;
  /* background-size: 100% 100%;
height: 100vh; */
  background-size: cover;
}

.windowDimension {
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
.ComponentDimension {
  height: inherit;
  width: 100vw !important;
  background-size: cover !important;
}
.animation_zoomHover {
  transition: 0.3s;
}
.animation_zoomHover:hover {
  transform: scale(1.1);
  overflow: hidden;
}
.fade-in {
  animation: fadeIn 3s;
}
.fade-in2 {
  animation: fadeIn 8s;
}
.fade-in3 {
  animation: fadeIn 12s;
}
.fade-in4 {
  animation: fadeIn 15s;
}
.fade-in5 {
  animation: fadeIn 20s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(60%);
  }
  100% {
    transform: translateY(0%);
  }
}
.slide_up {
  animation-name: slideUp;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}
@keyframes slideLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.slide_left {
  position: relative;
  height: 100px;
  width: 200px;
  /* background-color: #f2f2f2; */
  overflow: hidden;
  animation: slideLeft 2s ease-out;
}
.slide_right {
  position: relative;

  overflow: hidden;
  animation: slideRight 2s ease-out;
}

@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.slide_down {
  position: relative;
  overflow: hidden;
  animation: slideDown 1s ease-out;
}

/* Define the keyframes for slide-down animation */
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.typing_text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(40) infinite;
  border-right: 0.15em solid;
}

/* Define the keyframes for typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.CardLogo {
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.animated-image {
  /* Add your image styles here */
  /* e.g., width, height, position, etc. */
  animation: imageAnimation 1s ease-in-out infinite;
}

@keyframes imageAnimation {
  0% {
    /* Initial state of the image */
    transform: scale(0.94);
    opacity: 1;
  }
  50% {
    /* Intermediate state */
    transform: scale(0.95);
    opacity: 0.9;
  }
  100% {
    /* Final state */
    transform: scale(0.94);
    opacity: 1;
  }
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
