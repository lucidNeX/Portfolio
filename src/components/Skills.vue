<template>
  <div class="q-ma-none q-pa-lg bg-image3">
    <q-card class="transparent q-mb-md" flat>
      <q-card-section class="">
        <div class="text-h5 text-bold q-my-md text-center text-white">Skills</div>
        <div class="text-subtitle1 text-grey">
          <div class="row justify-center">
            <SkillCard
              name="Languages"
              :technologies="['CSharp', 'C', 'Python', 'Java']"
              status="Good"
              :image="require('@/assets/backgrounds/developer4.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
            <SkillCard
              name="Frontend Technologies"
              :technologies="['HTML/CSS', 'JavaScript', 'Jquery', 'Ajax']"
              status="Good"
              :image="require('@/assets/backgrounds/frontend6.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
          </div>
          <div class="row justify-center">
            <SkillCard
              name="Javascript FrameWorks"
              :technologies="['VueJS 3', 'ViteJs']"
              status="Good"
              :image="require('@/assets/backgrounds/vue3.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
            <SkillCard
              name="CSS FrameWorks"
              :technologies="['Quasar', 'BootStrap', 'Vuetify']"
              status="Good"
              :image="require('@/assets/backgrounds/quasar2.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
          </div>
          <div class="row justify-center">
            <SkillCard
              name="Python Libraries"
              :technologies="[
                'Python3',
                'ScikitLearn',
                'NumPy',
                'Pandas',
                'Dash',
                'Plotly',
              ]"
              status="In Progress"
              :image="require('@/assets/backgrounds/python3.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
            <SkillCard
              name="Backend Technologies"
              :technologies="[
                'ASP.Net',
                'DotNet Core',
                '.Net MVC',
                'WebApi',
                'Minimal Api',
              ]"
              status="Good"
              :image="require('@/assets/backgrounds/Backend-Developers_1.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
          </div>
          <div class="row justify-center">
            <SkillCard
              name="ORM"
              :technologies="['Dapper', 'Petapoco']"
              status="Good"
              :image="require('@/assets/backgrounds/orm-slide.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
            <SkillCard
              name="Database"
              :technologies="['SQL Server']"
              status="Good"
              :image="require('@/assets/backgrounds/db1.png')"
              url=""
              class="q-ma-sm q-pa-sm"
            >
            </SkillCard>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style>
.about {
  height: 900px !important;
}
.aboutMobile {
  height: 1800px !important;
}

.aboutDesktop {
  height: 860px !important;
}
</style>

<script>
// import { ref } from "vue";
import { useQuasar } from "quasar";
import SkillCard from "../components/SkillCard.vue";

export default {
  name: "Skills",
  components: {
    SkillCard,
  },
  methods: {},
  setup() {
    const q = useQuasar();

    return {
      q,
    };
  },
};
</script>
<style lang="sass">
.expand-border
  border: 1px solid white
</style>
