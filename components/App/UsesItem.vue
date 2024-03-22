<template>
  <li>
    <NuxtLink :to="item.url" class="group" target="_blank" external>
      <p
        class="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"
      >
        {{ item.name }}
      </p>
      <p class="text-sm text-gray-500">{{ item.description }}</p>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  item: Object,
  // eslint-disable-next-line vue/require-prop-type-constructor
  required: true
})
</script>
