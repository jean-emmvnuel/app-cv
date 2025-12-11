<template>
    <div class="flex flex-col gap-2 mb-4 w-full group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <h4>{{ name }}</h4>
        <div class="w-full bg-gray-200 h-2.5">
            <div class="bg-[#008080] h-2.5 transition-all duration-1000 ease-out transform origin-left group-hover:scale-105" :style="{ width: level + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
    defineProps ({
        name: String,
        level: Number
    });
</script>