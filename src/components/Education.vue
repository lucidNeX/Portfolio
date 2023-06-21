<template>
  <div class="q-ma-none q-pa-none">
    <q-parallax
      class="q-py-lg"
      :class="q.platform.is.mobile ? 'aboutMobile' : 'window-height'"
    >
      <template v-slot:media>
        <img src="../assets/backgrounds/keyboard1.png" />
        <!-- cropped-wallpaper-for-hacker.png -->
      </template>

      <template v-slot:content="scope">
        <div
          q-pt-none
          class="absolute column items-center q-px-sm q-pt-none q-pb-sm"
          :style="{
            opacity: 0.65 + (1 - scope.percentScrolled) * 0.25,
            top: scope.percentScrolled * 2 + '%',
            left: 0,
            right: 0,
          }"
        >
          <q-card class="my-card transparent q-pt-lg" flat>
            <div class="text-h5 text-bold q-my-md q-pt-md text-center text-white">
              Education
            </div>
            <div
              class="CardZoom  text-subtitle1 q-mx-lg q-pa-sm q-my-none  row justify-center text-white"
            >
              <q-intersection
                v-for="n in education"
                :key="n.title"
                transition="flip-up"
                class=" transparent col-xs-8 col-sm-9 col-md-4 col-lg-4 q-ma-sm q-pa-sm justify-center q-gutter-md"
                :style="{
                  backgroundColor: '',
                }"
              >
                <q-card class=" CardBackground animation_zoomHover col-lg-4" flat round>
                  <q-card-section class="justify-between" horizontal>
                    <q-card-section class="q-pt-xs slide_up">
                      <div class="text-overline text-grey slide_up">
                        {{ n.period }}
                      </div>
                      <div class="text-h5 text-bold text-blue-grey-10 q-mt-sm q-mb-xs">
                        {{ n.title }}
                      </div>
                      <div class="text-caption text-black">
                        {{ n.university }}
                      </div>
                      <div class="text-caption text-black">
                        {{ n.specialization }}
                      </div>
                      <div class="text-caption text-black">
                        {{ n.school }}
                      </div>
                    </q-card-section>

                    <q-card-section class="fade-in2">
                      <q-avatar class="slide_left">
                        <q-img
                          class="rounded-borders animation_zoomHover"
                          :src="n.logo"
                        />
                      </q-avatar>
                    </q-card-section>
                  </q-card-section>

                  <q-separator />
                </q-card>
              </q-intersection>
            </div>
          </q-card>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
<style>
.my-card {
  border: 0px;
}
.auto {
  height: auto;
  max-height: fit-content;
}
.CardBackground {
  /*  */
  height: inherit;
  color: white !important;
}
.CardZoom :hover {
  background-color: rgb(254, 255, 255) !important;
  border-radius: 10rem 0rem 25rem  ;
}
.CardBackground :hover {
  border-radius: 1px !important;
  background-color: rgb(94, 234, 187) !important;
}
.about {
  height: 600px !important;
}
.aboutMobile {
  height: 800px !important;
}

.aboutDesktop {
  height: 600px !important;
}
</style>

<script>
import { ref } from "vue";
import GraduationLogo from "../assets/photos/APJ_Abdul_Kalam_Technological_University_logo.png";
import HSELogo from "../assets/photos/hse_logo.png";
import JNVLogo from "../assets/photos/Jawahar_Navodaya_Vidyalaya_logo.png";
import { useQuasar } from "quasar";

export default {
  name: "Education",
  components: {},
  methods: {},
  setup() {
    const q = useQuasar();
    const education = ref([
      {
        title: "Graduation",
        university: "Kerala Technological University",
        school: "NSS College of Engineering Palakkad",
        period: "From 2017 to 2021",
        specialization: "B.Tech Computer Science and Engineering",
        logo: ref(GraduationLogo),
        code: 1,
      },
      {
        title: "Higher Secondary",
        university: "Kerala State Board",
        school: "GBHSS Nemmara, Palakkad",
        period: "From 2015 to 2017",
        specialization: "Biology Science",
        // logo: "../assets/photos/hse_logo.png",
        logo: ref(HSELogo),
        code: 2,
      },
      {
        title: "High School",
        university: "CBSE",
        school: "Jawahar Navodhaya Vidyalaya, Palakkad",
        period: "From 2010 to 2015",
        specialization: "Science",
        //logo: "../assets/photos/Jawahar_Navodaya_Vidyalaya_logo.png",
        logo: ref(JNVLogo),
        code: 3,
      },
    ]);
    return {
      education,
      GraduationLogo,
      HSELogo,
      JNVLogo,
      q,
    };
  },
};
</script>
