<template>
  <NuxtLink :to="`/reports/${report.id}`"
    class="block ml-3 bg-blue-50 hover:bg-blue-100 dark:bg-black dark:hover:bg-gray-900 bg-opacity-40 hover:bg-opacity-40 py-3.24 pl-2 pr-5 rounded-xl">
    <div class="flex flex-row">
      <div class="flex grow">
        <NuxtImg :src="report.avatar_url" class="w-15 rounded-full" height="70" width="70" fit="cover"
          v-if="report.avatar_url" />
        <PlaceholderPhotoSmall v-else />
        <div class="py-.5 px-3">
          <div>{{ report.title }}</div>
          <div class="text-sm text-gray-500">{{ report.profiles.username }}</div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-right font-semibold">{{ report.drugs.name }}</div>
        <div class="py-.5 text-right text-sm text-gray-500 h-full" v-if="report.long_term">
          Langzeitbericht
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ExtendedReport } from "~~/types/extended.types"

defineProps<{ report: ExtendedReport }>()
</script>

<style scoped></style>
