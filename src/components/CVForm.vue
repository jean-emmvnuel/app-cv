<template>
  <div class="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto my-8 overflow-y-auto max-h-[90vh]">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Éditer le CV</h2>
      <button @click="$emit('close')" class="text-gray-500 hover:text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <form @submit.prevent class="space-y-8">
      <!-- Personal Info -->
      <section>
        <h3 class="text-lg font-semibold text-primary mb-4 border-b pb-2">Informations Personnelles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom complet</label>
            <input v-model="form.personalInfo.name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Profession</label>
            <input v-model="form.personalInfo.profession" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Photo</label>
            <input @change="handleImageUpload" type="file" accept="image/*" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-teal-700">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input v-model="form.personalInfo.phone" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="form.personalInfo.email" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
        </div>
      </section>

      <!-- Social Media -->
      <section>
        <h3 class="text-lg font-semibold text-primary mb-4 border-b pb-2">Réseaux Sociaux</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Facebook</label>
            <input v-model="form.personalInfo.social.facebook" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Twitter</label>
            <input v-model="form.personalInfo.social.twitter" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Instagram</label>
            <input v-model="form.personalInfo.social.instagram" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2">
          </div>
        </div>
      </section>

      <!-- About Me -->
      <section>
        <h3 class="text-lg font-semibold text-primary mb-4 border-b pb-2">À propos de moi</h3>
        <textarea v-model="form.aboutMe" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2"></textarea>
      </section>

      <!-- Languages -->
      <section>
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h3 class="text-lg font-semibold text-primary">Langues</h3>
          <button @click="addItem('languages', { name: 'NOUVELLE LANGUE', level: 'NIVEAU' })" class="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-teal-700">+ Ajouter</button>
        </div>
        <div v-for="(lang, index) in form.languages" :key="index" class="flex gap-4 mb-2 items-end bg-gray-50 p-3 rounded">
          <div class="flex-1">
            <label class="block text-xs font-medium text-gray-500">Langue</label>
            <input v-model="lang.name" type="text" class="w-full border-gray-300 rounded border p-1 text-sm">
          </div>
          <div class="flex-1">
            <label class="block text-xs font-medium text-gray-500">Niveau</label>
            <input v-model="lang.level" type="text" class="w-full border-gray-300 rounded border p-1 text-sm">
          </div>
          <button @click="removeItem('languages', index)" class="text-red-500 hover:text-red-700 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </section>

      <!-- Skills -->
      <section>
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h3 class="text-lg font-semibold text-primary">Compétences</h3>
          <button @click="addItem('skills', { name: 'NOUVELLE COMPÉTENCE', level: 50 })" class="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-teal-700">+ Ajouter</button>
        </div>
        <div v-for="(skill, index) in form.skills" :key="index" class="flex gap-4 mb-2 items-end bg-gray-50 p-3 rounded">
          <div class="flex-1">
            <label class="block text-xs font-medium text-gray-500">Nom</label>
            <input v-model="skill.name" type="text" class="w-full border-gray-300 rounded border p-1 text-sm">
          </div>
          <div class="w-24">
            <label class="block text-xs font-medium text-gray-500">Niveau (%)</label>
            <input v-model="skill.level" type="number" min="0" max="100" class="w-full border-gray-300 rounded border p-1 text-sm">
          </div>
          <button @click="removeItem('skills', index)" class="text-red-500 hover:text-red-700 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </section>

      <!-- Experience -->
      <section>
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h3 class="text-lg font-semibold text-primary">Expérience</h3>
          <button @click="addItem('experience', { title: 'POSTE', company: 'ENTREPRISE', dates: '2023 | 2024', description: 'Description...' })" class="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-teal-700">+ Ajouter</button>
        </div>
        <div v-for="(exp, index) in form.experience" :key="index" class="bg-gray-50 p-4 rounded mb-4 border">
          <div class="flex justify-between mb-2">
            <span class="text-sm font-bold text-gray-500">Expérience #{{ index + 1 }}</span>
            <button @click="removeItem('experience', index)" class="text-red-500 text-xs hover:underline">Supprimer</button>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2">
            <input v-model="exp.title" placeholder="Titre du poste" class="border p-1 rounded text-sm">
            <input v-model="exp.company" placeholder="Entreprise" class="border p-1 rounded text-sm">
            <input v-model="exp.dates" placeholder="Dates" class="border p-1 rounded text-sm">
          </div>
          <textarea v-model="exp.description" placeholder="Description" rows="2" class="w-full border p-1 rounded text-sm"></textarea>
        </div>
      </section>

      <!-- Education -->
      <section>
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h3 class="text-lg font-semibold text-primary">Formation</h3>
          <button @click="addItem('education', { degree: 'DIPLÔME', university: 'UNIVERSITÉ', dates: '2023 | 2024', description: 'Description...' })" class="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-teal-700">+ Ajouter</button>
        </div>
        <div v-for="(edu, index) in form.education" :key="index" class="bg-gray-50 p-4 rounded mb-4 border">
          <div class="flex justify-between mb-2">
            <span class="text-sm font-bold text-gray-500">Formation #{{ index + 1 }}</span>
            <button @click="removeItem('education', index)" class="text-red-500 text-xs hover:underline">Supprimer</button>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2">
            <input v-model="edu.degree" placeholder="Diplôme" class="border p-1 rounded text-sm">
            <input v-model="edu.university" placeholder="Université" class="border p-1 rounded text-sm">
            <input v-model="edu.dates" placeholder="Dates" class="border p-1 rounded text-sm">
          </div>
          <textarea v-model="edu.description" placeholder="Description" rows="2" class="w-full border p-1 rounded text-sm"></textarea>
        </div>
      </section>

    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Object
});

const emit = defineEmits(['update:modelValue', 'close']);

const form = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const addItem = (section, item) => {
  form.value[section].push(item);
};

const removeItem = (section, index) => {
  form.value[section].splice(index, 1);
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      form.value.personalInfo.photo = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>
