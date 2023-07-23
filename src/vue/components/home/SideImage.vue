<script setup lang="ts">
import AresLogo from "@/assets/logos/ares-pattern.png"
</script>

<script lang="ts">
export default {
    name: "AresLogo"
}
</script>

<template>
    <div>
        <v-img :src="AresLogo" cover aspect-ratio="16/9" :width="450"/>
    </div>
</template>