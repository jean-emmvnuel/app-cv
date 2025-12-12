<template>
    <div class="flex flex-row items-center gap-3 group hover:scale-105 transform transition-transform duration-200 ease-out cursor-pointer">
        <component :is="Icon" class="w-5 h-5 text-[#008080] transition-transform duration-200 group-hover:scale-110" />
        <div>
            <p class="capitalize">{{ name }}</p>
            <a :href="link" class="hover:text-[#008080] hover:underline" target="_blank">{{ url }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { Facebook, Twitter, Instagram } from 'lucide-vue-next';
    const props = defineProps<{ url?: string; name?: string }>();

    const icons: Record<string, any> = {
        facebook: Facebook,
        twitter: Twitter,
        instagram: Instagram,
    };

    const Icon = computed(() => {
        const key = (props.name || '')?.toString().toLowerCase();
        return icons[key] || Facebook;
    });
    
    const link = computed(() => {
        const url = props.url || '';
        const name = (props.name || '').toString().toLowerCase();
        if (!url) return '#';
        if (url.startsWith('@')) {
            const handle = url.slice(1);
            switch (name) {
                case 'facebook':
                    return `https://facebook.com/${handle}`;
                case 'twitter':
                    return `https://twitter.com/${handle}`;
                case 'instagram':
                    return `https://instagram.com/${handle}`;
                default:
                    return url;
            }
        }
        return url;
    });
    void Icon;
</script>