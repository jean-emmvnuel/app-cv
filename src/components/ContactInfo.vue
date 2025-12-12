<template>
    <div class="md:w-[41%] group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <div class="pl-7">
            <h1 class="text-xl font-bold dark:text-white">CONTACT</h1>
        </div>
        <div class="flex flex-row align-end">
            <div class="w-1 bg-[#008080] h-27"></div>
            <div class="pl-6">
                <div class="flex flex-row align-center mb-2">
                    <div>
                        <!-- icone telephone -->
                        <Phone class="w-5 h-5 text-[#008080]" />
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>{{ phone }}</p>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div>
                        <!-- icone email -->
                        <Mail class="w-5 h-5 text-[#008080]" />
                    </div>
                    <div>
                        <p>Email</p>
                        <a :href="'mailto:' + email" target="_blank" class="hover:text-[#008080] hover:underline">{{ email }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { Phone, Mail } from 'lucide-vue-next';

    defineProps({
        phone: String,
        email: String
    });
</script>