<template>
  <div class="q-ma-none q-pa-none">
    <q-parallax
      :class="
        q.platform.is.mobile
          ? 'window-height'
          : q.platform.is.desktop
          ? 'aboutDesktop'
          : 'about'
      "
      class="q-pa-lg"
    >
      <template v-slot:media>
        <img src="../assets/backgrounds/pexels-nelson-ribeiro-2313677.png" />
        <!-- <div class="overlay"></div>  roland-denes-24CcFvbRsBE-unsplash.png -->
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute q-my-md column items-center q-pa-none q-ma-none"
          :style="{
            opacity: 0.85 + (1 - scope.percentScrolled) * 0.25,
            top: scope.percentScrolled * 2 + '%',
            left: 0,
            right: 0,
          }"
        >
          <div class="text-h5 text-bold q-mt-lg text-center text-white">About me</div>
          <q-intersection
            transition="jump-down"
            class="transparent fade-in col-xs-12 col-sm-12 col-md-5 col-lg-5 q-ma-sm q-pa-sm justify-center q-gutter-md"
          >
            <div class="text-center">
              <q-avatar class="q-my-md slide_up" size="10rem" font-size="52px">
                <img :src="personal_pic" class="animation_zoomHover" />
              </q-avatar>
            </div>
            <div class="overlay2 q-pa-lg">
              <ul class="row justify-center">
                <li
                  v-for="n in words"
                  :key="n"
                  class="text-lime-12 text text-subtitle1 q-mr-lg slide_right"
                >
                  {{ n }}
                </li>
              </ul>
              <div class="text-subtitle1 text-white text-center fade-in3" :style="{}">
                A Passionate Enthusiast Full-Stack-Developer graduated from NSS College of
                Engineering, Palakkad.<br />
                Interested in Dance and Music. <br />Iam a B-boy (Break boy in hiphop
                breaking) who seeks happiness in dancing. <br />Iam a Tabalist who loves
                to play with rythms. <br />In Simple, You can see me as a Passionate
                Techie and a B-boy from NSSCE Palakkad Rythmed by Resonance Dance Crew
                (RDC).
              </div>

              <div class="text-h5 text-bold q-my-md text-center">
                <transition name="fade">
                  <q-card-section>
                    <a
                      :href="'https://drive.google.com/file/d/1Lxwoh0uFL7yIIFPrqULdL_vsyXxbQtKN/view?usp=drive_link'"
                      class=""
                      :style="{ textDecoration: 'none' }"
                      target="_blank"
                    >
                      <q-btn class="slide_up" outline color="white" label="Download CV" />
                    </a>
                  </q-card-section>
                </transition>

                <q-btn class="text-caption text-white fade-in5" flat @click="openContact"
                  >or Contact me?</q-btn
                >
                <div
                  v-if="persistent"
                  class="q-gutter-sm q-ma-md"
                  :style="{ border: '1px solid white' }"
                >
                  <span class="text-white text-subtitle2">
                    <a class="text-white" :href="phoneLink"
                      ><q-icon name="phone" class="q-pl-none q-mr-sm" />{{ info.phone }}
                    </a></span
                  >
                  <a
                    href="https://api.whatsapp.com/send?phone=7012099752&text=Hi"
                    target="_blank"
                  >
                    <q-btn size="sm" round class="shadow-9 q-mt-sm bg-green">
                      <q-avatar size="2rem" font-size="52px">
                        <img
                          :src="WhatsApp_icon"
                          class="animation_zoomHover"
                        /> </q-avatar
                      ><q-tooltip> WhatsApp </q-tooltip></q-btn
                    >
                  </a>

                  <br />
                  <span class="text-white q-px-md text-subtitle2"
                    ><a class="text-white" :href="emailLink">
                      <q-icon name="mail" class="q-pl-none q-mr-sm" />{{ info.email }}
                    </a></span
                  >
                </div>
              </div>
            </div>
          </q-intersection>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
<style>
.about {
  height: 900px !important;
}
.aboutMobile {
  height: 2000px !important;
}

.aboutDesktop {
  height: 860px !important;
}

.parallax-content {
  height: 100% !important;
  background-size: cover;
}
.parallax-container {
  /* height: 100% !important; */
  height: auto;
  overflow: scroll;
}
.imgbg {
  height: auto !important;
}
</style>

<script>
import { ref } from "vue";
import personal_pic from "../assets/photos/1685709609098.png";
import WhatsApp_icon from "../assets/photos/whatsappLogo.png";
import { useQuasar } from "quasar";

export default {
  name: "About",
  components: {},
  methods: {
    openContact() {
      this.persistent = !this.persistent;
    },
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
  setup() {
    const persistent = ref(false);
    const q = useQuasar();
    const info = ref({
      address: "Parakkalam, Pallassana PO, Palakkad District, Kerala",
      city: "Palakkad",
      province: "C",
      postcode: "678505",
      phone: "7012099752",
      email: "subhash20jith@gmail.com",
    });
    const words = ref(["Full-Stack-Developer", "Dancer", "Musician", "Hiphop B-boy"]);

    return {
      q,
      info,
      persistent,
      words,
      personal_pic,
      WhatsApp_icon,
    };
  },
};
</script>
