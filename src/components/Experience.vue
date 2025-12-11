<template>
    <div class="flex flex-col mb-4 group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <h3 class="text-lg">{{ title }}</h3>
        <h4 class="text-md font-medium text-[#008080]">{{ company }} {{ dates }}</h4>
        <p class="mt-1 text-sm">{{ description }}</p>
    </div>
</template>

<script setup>
    defineProps({
        title : String,
        company : String,
        dates:String,
        description : String,
    });
</script>