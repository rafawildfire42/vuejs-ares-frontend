<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title: string
    text: string
    icon: string
}>()

const boxHovered = ref(false)

</script>

<template>
    <v-card 
        :class="{'box-hovered': boxHovered, 'box': !boxHovered}" 
        height="320" 
        @mouseenter="boxHovered=true" 
        @mouseleave="boxHovered=false" 
        elevation="5"
    >
        <v-row class="pa-4">
            <v-col cols="12">
                <v-icon size="100" :icon="icon" />
            </v-col>
            <v-col cols="12" class="d-flex py-1">
                <span class="text-h6 text-left">{{ title }}</span>
            </v-col>
            <v-col cols="12" class="d-flex py-1">
                <span class="text-body-1 text-left font-weight-light" style="opacity: 0.7;">
                    {{ text }}
                </span>
            </v-col>
        </v-row>
    </v-card>    
</template>

<style scoped>

.box {
    display: flex;
    justify-content: center;
    -ms-malign-items: center;
    align-items: center;
    background-color: rgba(0, 2, 53, 0.5);
    overflow: hidden;
}

.box .v-row {
    align-self: start;
    z-index: 2;
    color: white;
}

.box-hovered {
    display: flex;
    justify-content: center;
    -ms-malign-items: center;
    align-items: center;
    background-color: rgba(14, 22, 112, 0.5);
    border-radius: 2px;
    overflow: hidden;
}

.box-hovered .v-row {
    align-self: start;
    z-index: 2;
    color: white;
}

.box-hovered::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 350%;
    background: linear-gradient(#f7f7f7, #2f2f2f);
    animation: rotate 2s linear infinite;
}

.box-hovered::after {
    content: '';
    position: absolute;
    background: #0e1538;
    inset: 1px;
    border-radius: 2px;
}

@keyframes rotate {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}

</style>