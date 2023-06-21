<template>
  <div class="q-mb-none q-pa-none ">

    <div class="quote2 col-md-8 col-lg-8 col-sm-8">
      <div class=" flex flex-center ">
        <div class="q-pt-xl flex flex-center ">


          <q-card class="transparent justify-center " flat :style="{}">
            <div class="text-h5 text-bold q-my-md q-mt-lg q-pt-lg text-center text-white">
              Experience
            </div>
            <div class="text-subtitle1 q-mx-lg q-pa-md  justify-center text-grey">
              <q-intersection v-for="n in companies" :key="`xs-${n.name}`" rounded transition="flip-left"
                class=" justify-center text-white  q-ma-lg" :style="{}">
                <q-card class="my-card transparent q-mx-lg q-pa-sm animation_zoomHover" flat rounded>
                  <q-card-section class="bg-cyan-8">
                    <q-timeline dark>
                      <q-timeline-entry :title="n.title" :subtitle="n.period" :avatar="n.logo" class="fadeIn">
                        <div>
                          <li v-for="work in n.works" :key="`xs-${work}`"
                            class="text-weight-bold q-pr-md text-white text-subtitle2 full-width slide_down">
                            {{ work }}
                          </li>

                          <a href="" :style="{ textDecoration: 'none' }">
                            <li class="text-blue-grey-2 text-overline animation_zoomHover slide_up">
                              Company: {{ n.name }}
                            </li>
                          </a>
                        </div>
                      </q-timeline-entry>
                    </q-timeline>
                  </q-card-section>
                </q-card>
              </q-intersection>
            </div>
          </q-card>

        </div>
      </div>
    </div>
  </div>
</template>
<style>
.quote2 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/backgrounds/haking1.png);
  ;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  /* min-height:800px !important; */
}

.filmOverlay {
  background-color: #000000aa !important;
}

.about {
  height: 1000px !important;
}

.aboutMobile {
  height: auto !important;
  max-height: 1400px !important;
}

.aboutDesktop {
  height: 860px !important;
}

.my-card {
  /* border-radius: 13rem 0rem 0rem 0rem !important; */
  border-radius: 2rem !important;

}

.parallax-container {
  height: 100vh;
  overflow: hidden;
}
</style>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "Experience",
  components: {},
  methods: {},

  setup() {
    const q = useQuasar();
    const companies = ref([
      {
        name: "Descpro Technologies",
        logo:
          "https://media-exp1.licdn.com/dms/image/C4D0BAQFjJwmXIgPZ1g/company-logo_200_200/0/1519886932003?e=2147483647&v=beta&t=cwLr-2ZBrEt6Ono6SuE0lqXl3TZMIKSFhWVveIYxsBk",
        title: "Programmer Trainee",

        period: "From July 2021 to July 2022",
        skills: [
          "ASP.net MVC",
          "JavaScript",
          "JQuery",
          "Bootstrap",
          "Sql Server",
          "Transact sql",
          "Gitlab",
        ],
        location: "Palakkad, Kerala",
        works: [
          "Develop and deploy new components",
          "Create and Update procedures in sql",
          "Create and Update forms and reports",
        ],
      },
      {
        name: "Vofox Solutions",
        logo:
          "https://media-exp1.licdn.com/dms/image/C4D0BAQFjJwmXIgPZ1g/company-logo_200_200/0/1519886932003?e=2147483647&v=beta&t=cwLr-2ZBrEt6Ono6SuE0lqXl3TZMIKSFhWVveIYxsBk",
        title: "Junior Software Engineer",

        period: "From September 2022 to Present",
        skills: [
          "DotNet Core",
          "Minimal Api",
          "Dapper",
          "VueJS 3",
          "ViteJS",
          "Quasar",
          "JavaScript",
          "Sql Server",
          "Transact sql",
          "Gitlab",
        ],
        location: "Kochi, Kerala",
        works: [
          "Develop and deploy new components",
          "Create and Update procedures in sql",
          "Create and Update forms and reports",
        ],
      },
    ]);
    return {
      companies,
      q,
    };
  },
};
</script>
