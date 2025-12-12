<template>
    <div class="flex flex-col md:flex-row md:items-center mb-4 md:mb-12 relative group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <!-- Photo -->
        <div class="md:w-[35%] flex justify-center relative z-2">
            <div class="w-48 h-48 rounded-full border-[4px] border-[#008080] overflow-hidden shadow-xl bg-white dark:bg-gray-700 transition-transform duration-300 group-hover:scale-105">
                <img :src="photo" alt="Profile" class="w-full  h-full " />
            </div>
        </div>
        <!-- Nom et Poste -->
        <div class="flex flex-row w-full md:w-[65%] bg-[#AAB3B3FF] z-1 md:mt-6 md:mt-0 md:-ml-10">
            <div class="flex flex-row bg-secondary md:pl-16 md:pr-8 py-8 rounded-r-lg">
                <div class="bg-[#008080] w-1 mt-3 ml-3"></div>
                <div class="md:pl-6">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 uppercase tracking-tight leading-none">{{ nom }}</h1>
                    <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 tracking-[0.2em] mt-2 uppercase font-light">{{ poste }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        nom : String,
        poste : String,
        photo : String
    });
</script>