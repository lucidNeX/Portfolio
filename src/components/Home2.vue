<template>
  <div class="text-white text-bold flex column flex-center text-h2 window-height">
    <q-parallax class="window-height">
      <template v-slot:media>
        <img src="../assets/backgrounds/1637235264.png" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.35 + (1 - scope.percentScrolled) * 0.55,
            top: scope.percentScrolled * 50 + '%',
            left: 0,
            right: 0,
          }"
        >
          <div class="text-center">
            <!-- <div class="text-h6 fade-in2">
              Hai, Hello
              <q-separator class="q-mx-xl q-my-sm fade-in4 text-center" dark />
              I'am
            </div> -->
            <!-- <div class="content text-center">
              <h class="text-bold">Kemi</h
              <h2 class="text-bold">Kemi</h2>
            </div> -->
            <div class="text-h3 text-bold">SUBHASH SUBRAHMANIAN</div>
            <div class="text-h6 fade-in3">
              <q-separator class="q-mx-xl fade-in4 q-my-sm text-center" dark />
              Software Engineer
            </div>
          </div>

          <div class="row q-gutter-md q-mt-lg q-pt-lg">
            <div class="col">
              <a href="https://github.com/lucidNeX" target="_blank">
                <q-btn round class="shadow-9 bg-white" size="md">
                  <q-avatar class="" round square size="2rem" font-size="52px">
                    <img :src="github_icon" class="animated-image" />
                  </q-avatar>
                  <q-tooltip> Github </q-tooltip>
                </q-btn>
              </a>
            </div>
            <div class="col">
              <a
                href="https://www.linkedin.com/in/subhash-subrahmanian-37245a1b1"
                target="_blank"
              >
                <q-btn round class="shadow-9 bg-white" size="md">
                  <q-avatar square size="2rem" font-size="52px">
                    <img :src="linked_ing_icon" class="animated-image" /> </q-avatar
                  ><q-tooltip> LinkedIn </q-tooltip></q-btn
                >
              </a>
            </div>
            <div class="col">
              <a
                href="https://instagram.com/_lucidnex_?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
              >
                <q-btn round class="shadow-9 bg-white" size="md">
                  <q-avatar size="2rem" font-size="52px">
                    <img :src="Instagram_icon" class="animated-image" /> </q-avatar
                  ><q-tooltip> Instagram </q-tooltip></q-btn
                >
              </a>
            </div>
          </div>
          <a
            href="#2"
            :style="{ textDecoration: 'none' }"
            v-smooth-scroll
            class="text-white relative-bottom"
          >
            <q-btn fab icon="keyboard_arrow_down" />
          </a>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
<style>
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  background: #000;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;
}

.content h2 {
  color: #fff;
  /* font-size: 8em; */
  position: absolute;
  transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #f403b4;
}

.content h2:nth-child(2) {
  color: #f40394;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
</style>

<script>
import personal_pic from "../assets/photos/1685709612805.JPEG";
import Instagram_icon from "../assets/photos/instaLogo.png";
import github_icon from "../assets/github.png";
import linked_ing_icon from "../assets/linked_in.png";
import WhatsApp_icon from "../assets/photos/whatsappLogo.png";
import hacker_rank from "../assets/hacker_rank.png";

export default {
  name: "Home",
  props: {},
  methods: {},
  setup() {
    return {
      personal_pic,
      github_icon,
      linked_ing_icon,
      Instagram_icon,
      WhatsApp_icon,
      hacker_rank,
    };
  },
};
</script>
