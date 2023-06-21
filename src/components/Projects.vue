<template>
  <div class="q-ma-none q-pa-none" style="height: fit-content">
    <!-- <q-parallax
      class="q-pa-lg"
      :class="q.platform.is.mobile ? 'aboutMobile' : 'window-height'"
      style="height: fit-content"
    >
      <template v-slot:media>
        <img src="../assets/backgrounds/hacker4.png" />
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
        > -->

        <div class="bg_Image col-md-8 col-lg-8 col-sm-8" >
                <div class="full-height full-width flex flex-center"  >
                  <!-- style="background-color: #000000aa !important;" -->
                <div class="q-pt-xl full-height flex flex-center ">
                

          <q-card class="transparent q-mb-md" flat>
            <q-card-section>
              <div class="text-h5 text-bold q-my-md text-center text-white">
                Personal Projects
              </div>
              <div class="text-subtitle1 q-mx-lg q-pa-sm text-grey">
                <div class=" justify-between q-gutter-md">
                  <SkillCard
                    name="Landslide Prediction"
                    :technologies="['Machine Learning', 'Deep Learning']"
                    status="Finished"
                    :image="require('@/assets/backgrounds/MachineLearning.png')"
                    url=""
                    class="q-ma-sm q-pa-sm"
                  >
                  </SkillCard>
                  <SkillCard
                    name="VueJS 3"
                    :technologies="['VueJS 3', 'Quasar']"
                    status="In Progress"
                    :image="require('@/assets/backgrounds/Vue-Blog-Cover.png')"
                    url=""
                    class="q-ma-sm q-ml-none q-pa-sm q-pl-none"
                  >
                  </SkillCard>
                </div>

                <!-- <div class="row justify-center q-gutter-md">
                  <q-intersection
                    v-for="project in projects"
                    :key="project.name"
                    transition="scale"
                    class="q-my-md"
                  >
                    <a
                      :href="project.url"
                      target="_blank"
                      :style="{ textDecoration: 'none' }"
                    >
                      <q-card class="q-ma-sm animation_zoomHover">
                        <transition name="" appear>
                          <img height="150" class="animated-image" :src="project.image" />
                        </transition>
                        <transition name="" appear>
                          <q-card-section>
                            <div class="text-h6 animation_zoomHover">
                              {{ project.name }}
                            </div>
                            <div class="overflow-hidden">
                              <span
                                v-for="tool in project.technologies"
                                :key="tool"
                                class="text-subtitle2 q-pr-xs"
                                >#{{ tool }}</span
                              >
                            </div>
                            <q-badge
                              rounded
                              :color="project.status == 'Finished' ? 'green' : 'orange'"
                              :label="project.status"
                            />
                          </q-card-section>
                        </transition>
                      </q-card>
                    </a>
                  </q-intersection>
                </div> -->
              </div>
            </q-card-section>
          </q-card>

</div>
</div>
</div>

<!--           
        </div>
      </template>
    </q-parallax> -->
  </div>
</template>
<style>
.bg_Image{
  background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/backgrounds/hacker4.png);
     background-size: cover;
      background-repeat: no-repeat;
}
.quote3{
      background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/backgrounds/hacker4.png);;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;}
.about {
  height: 600px !important;
}
.aboutMobile {
  height: 800px !important;
}

.aboutDesktop {
  height: 860px !important;
}
</style>

<script>
import { ref } from "vue";
import vueImage from "../assets/backgrounds/Vue-Blog-Cover.png";
import MLImage from "../assets/backgrounds/MachineLearning.png";
// import work_in_progress from "../assets/work-in-progress.png";
import { useQuasar } from "quasar";
import SkillCard from "./SkillCard.vue";

export default {
  name: "Projects",
  components: {
    SkillCard,
  },
  methods: {},

  setup() {
    const q = useQuasar();
    const projects = ref([
      {
        name: "Landslide Prediction",
        image: MLImage,
        technologies: ["Machine Learning", "Deep Learning"],
        status: "Finished",
      },
      {
        name: "VueJS",
        image: vueImage,
        technologies: ["VueJS3", "Quasar"],
        status: "In Progress",
      },
    ]);

    return {
      projects,
      q,
    };
  },
};
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
