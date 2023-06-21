<template>
  <div class="col-lg-4 justify-center q-gutter-md">
    <q-intersection transition="scale" class="example-item q-my-md">
      <!-- <a :href="project.url" target="_blank" :style="{ textDecoration: 'none' }"> -->
      <q-card class="q-ma-md techcard animation_zoomHover shadow-5">
        <transition name="" appear>
          <img height="140" class="q-pa-md slide_up" :src="imageUrl" />
          <!-- fade-in3 -->
        </transition>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          class=""
        >
          <div class="cardsection q-pa-md">
            <q-card-section class="slide_left col-12" style="height: 100px; width: auto">
              <div class="text-bold text-green fade-in animation_zoomHover col-12">
                {{ name }}
              </div>
              <div class="overflow-hidden">
                <span
                  v-for="tool in technologies"
                  :key="tool"
                  class="text-subtitle2 fade-in q-pr-xs"
                >
                  #{{ tool }}</span
                >
              </div>
            </q-card-section>
          </div>
        </transition>
        <q-card-section>
          <div class="">
            <q-badge
              class="slide_right"
              rounded
              :color="status == 'Good' || status == 'Finished' ? 'green' : 'orange'"
              :label="status"
            />
          </div>
        </q-card-section>
      </q-card>
      <!-- </a> -->
    </q-intersection>
  </div>
</template>
<script>
export default {
  name: "SkillCard",
  props: {
    name: { type: String, default: "", required: true },
    image: { type: String, default: "", required: true },
    technologies: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
    status: { type: String, default: "Good", required: true },
    url: { type: String, default: "" },
  },
  computed: {
    imageUrl() {
      return this.image;
    },
  },
  setup() {
    return {};
  },
};
</script>
<style>
.example-item {
  height: 330px;
  width: 380px;
}
.techcard {
  height: 350px !important;
  max-height: 500px !important;
  border-radius: 1rem !important;
}
.techcard :hover {
  color: white;
}
.cardsection :hover {
  background-color: rgb(15, 124, 77) !important;
  border-radius: 0rem 10rem 10rem 5rem !important;
}

.skill_container {
  /* width 200px
  height 300px */
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 20vh;
  margin-bottom: 50px; */
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 40px 2px rgba(0, 0, 0, 0.4);
  background: #000;
  transform-origin: center center 50px;
  transition: all 0.5s ease-out;
  animation-name: animate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transform: perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg);
  z-index: 1;
}
.skill_container :hover {
  animation: unset;
  margin-top: 18vh;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.skill {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  height: 100%;
  color: #fff;
}

@keyframes animate {
  0% {
    margin-top: 20vh;
  }
  50% {
    margin-top: 18vh;
  }
  100% {
    margin-top: 20vh;
  }
}
</style>
