<template>
    <div class="group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <h4 class="dark:text-gray-200">{{ name }}</h4>
        <h5 class="text-[#008080] text-sm group-hover:text-[#006666] transition-colors duration-200 dark:text-gray-300">{{ level }}</h5>
    </div>
</template>

<script setup>
    defineProps ({
        name: String,
        level: String
    });
</script>