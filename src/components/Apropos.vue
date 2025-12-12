
<template>
    <div class="md:w-[59%] w-full mr-6 group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <div class="pl-8">
            <h1 class="text-xl font-bold dark:text-white">À PROPOS DE MOI</h1>
        </div>
        <div class="flex flex-row">
        <div class="left-0 w-3 bg-[#008080]"></div>
            <div class="pl-7">
                <p class="text-justify mt-2 mr-4 group-hover:text-[#006666] transition-colors duration-200">
                    {{ apropos }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        apropos : String
    });
</script>