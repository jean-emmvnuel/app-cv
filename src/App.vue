<template>
  <div class="min-h-screen bg-gray-200 dark:bg-gray-900 py-8 px-4 flex justify-center  transition-colors duration-300 font-sans">

    <!-- bouton pour modifier et changer le thème -->
    <div class="top-8 right-8 fixed flex gap-3 z-10 items-center"> 
      <button @click="isEditing = true" class="rounded-full bg-blue-500 hover:bg-blue-600 text-white p-3 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
        <Pencil class="w-6 h-6" />
      </button>

      <button @click="toggleDarkMode" :aria-pressed="isDark" aria-label="Toggle theme" title="Toggle theme" class="rounded-full bg-gray-800 hover:bg-gray-900 text-white p-3 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
        <Moon v-if="!isDark" class="w-6 h-6" />
        <Sun v-else class="w-6 h-6 text-yellow-500" />
      </button>
      <!-- <span class="ml-2 text-sm text-gray-50">{{ isDark ? 'Dark' : 'Light' }}</span> -->
    </div>

    <!-- formulaire pour modifier la template -->
    <div v-if="isEditing" class="fixed inset-0 bg-black/50 z-50 flex justify-center items-start overflow-y-auto backdrop-blur-sm p-4 no-print">
      <CVForm v-model="cvData" @close="isEditing = false" />
    </div>

    <!-- Contenu du CV -->
    <div class="bg-white dark:bg-gray-800 w-full max-w-[210mm] min-h-[297mm] shadow-2xl relative transition-colors duration-200 overflow-hidden">
      <!-- decoration du haut -->
      <div class="h-6 bg-[#008080] w-1/3"></div>

      <!-- decoration du coté droit -->
      <div class="hidden md:block  h-1/2 bg-[#008080] top-0 right-0 w-[25px] absolute"></div>

      <div class="md:px-12 pt-8 pb-12">
        <!-- photo et presentation -->
        <Profile :nom="cvData.personalInfo.name" :poste="cvData.personalInfo.profession" :photo="cvData.personalInfo.photo" />
        
        <!-- le corps -->
        <div class="">
          <div class="flex flex-row">
            <div class="flex flex-col md:flex-row md:gap-6 gap-8 w-full">
              <!-- section contact -->
              <ContactInfo :phone="cvData.personalInfo.phone" :email="cvData.personalInfo.email" />
              <!-- section à propos -->
              <Apropos :apropos="cvData.aboutMe" />
            </div>
          </div>
          <div class="h-1 bg-[#008080] w-full mt-3"></div>

          <div class="flex flex-col md:flex-row">
            <!-- coté gauche -->
            <div class="relative md:w-[43%] md:float-left pr-6">
              <!-- section reseau social -->
              <div class="mt-4">
                <div class="flex flex-row">
                  <div class="bg-[#008080] w-1 mt-3"></div>
                  <div class="pl-6">
                    <h1 class="text-xl font-bold">RESEAUX SOCIAUX</h1>
                    <Reseau v-for="(url, name) in cvData.personalInfo.social" :key="name" :name="name" :url="url" />
                  </div>
                </div>
              </div>
              <div class="h-1 bg-[#008080] w-full mt-3"></div>
              <!-- section des langues -->
              <div class="mt-4">
                <div class="flex flex-row">
                  <div class="bg-[#008080] w-1 mt-3"></div>
                  <div class="pl-6">
                    <h1 class="text-xl font-bold">LANGUES</h1>
                    <Langue v-for="(lang, index) in cvData.languages" :key="index" v-bind="lang" />
                  </div>
                </div>
              </div>
              <div class="h-1 bg-[#008080] w-full mt-3"></div>
              <!-- section des competences -->
              <div class="mt-4 w-full">
                <div class="flex flex-row">
                  <div class="bg-[#008080] w-1 mt-3"></div>
                  <div class="pl-6">
                    <h1 class="text-xl font-bold">COMPETENCE</h1>
                    <Competence v-for="(skill, index) in cvData.skills" :key="index" v-bind="skill" />
                  </div>
                </div>
              </div>
              <div class="h-1 bg-[#008080] w-full mt-3"></div>
            </div>

            <!-- coté droit -->
            <div class="relative md:w-[57%] float-right">
              <!-- section experience -->
              <div class="mt-4">
                <div class="flex flex-row">
                  <div class="bg-[#008080] w-2 mt-3"></div>
                  <div class="pl-6">
                    <h1 class="text-xl font-bold">EXPERIENCE</h1>
                    <Experience v-for="(exp,index) in cvData.experience" :key="index" v-bind="exp" />
                  </div>
                </div>
              </div>
              <div class="h-1 bg-[#008080] w-full mt-3"></div>
              <!-- section formul -->
              <div class="mt-4">
                <div class="flex flex-row">
                  <div class="bg-[#008080] w-2 mt-3"></div>
                  <div class="pl-6">
                    <h1 class="text-xl font-bold">EDUCATION</h1>
                    <Education v-for="(edu,index) in cvData.education" :key="index" v-bind="edu"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- decoration du bas -->
      <div class="h-6 bg-[#008080] absolute left-0 bottom-0 w-3/4"></div>
    </div>

  </div>
</template>

<script setup>
  import { ref, reactive, onMounted, watch } from 'vue';
  import { Pencil, Sun, Moon } from 'lucide-vue-next';
  import Profile from './components/Profile.vue';
  import Experience from './components/Experience.vue';
  import ContactInfo from './components/ContactInfo.vue';
  import Competence from './components/Competence.vue';
  import Apropos from './components/Apropos.vue';
  import Reseau from './components/Reseau.vue';
  import Langue from './components/Langue.vue';
  import Education from './components/Education.vue';
  import CVForm from './components/CVForm.vue';
  import {cvData as initialData} from './data.js';


  const cvData = reactive({ ...initialData });

  const isDark = ref(false);
  const isEditing = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  console.log('toggleDarkMode called; isDark ->', isDark.value);
};

onMounted(() => {
  // initialiser le mode sombre en fonction des préférences stockées ou du système
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    isDark.value = true;
  } else if (stored === 'light') {
    isDark.value = false;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true;
  }
});

watch(isDark, (val) => {
  if (val) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
</script>

<style scoped></style>
