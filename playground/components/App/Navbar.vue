<template>
  <div ref="headerRef"
       :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"
      >
        <li
          v-for="item in items"
          :key="item.path"
        >
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              :target="item.target"
              class="relative px-3 py-4 flex items-center justify-center inline-block"
              active-class="text-primary-600 dark:text-primary-100"
            >
              <div
                :style="{ 'clip-path': 'url(#' + item.id + ')' }"
                class="backgroundClass"
              >
                <Icon
                  aria-hidden="true"
                  :id="`${item.id}`"
                  :name="item.icon"
                  class="w-6 h-6 z-10"
                />
              </div>
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              />
              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1" />
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const items = [
  {
    name: 'Invitation',
    id: 'clipPathID_invitation',
    path: '/',
    icon: 'solar:home-smile-bold'
  },
  {
    name: "I'm up to party!",
    id: 'clipPathID_whatsapp',
    path: '#whatsapp',
    icon: 'solar:star-shine-bold'
  },
  {
    name: 'Calender Entry',
    id: 'clipPathID_calendar',
    path: '#calendar-entry',
    icon: 'solar:calendar-add-bold',
    target: '_blank'
  }
  // { name: 'Lab', path: '/lab', icon: 'heroicons:beaker' },
  // {
  //   name: "What's in my bag?",
  //   path: '/whats-in-my-bag',
  //   icon: 'solar:backpack-outline',
  // },
  // {
  //   name: 'Bookmarks',
  //   path: '/bookmarks',
  //   icon: 'solar:bookmark-linear'
  // }
]

onMounted(() => {
  items.forEach((item) => {
    const svgElement = document.getElementById(item.id)
    const id = svgElement.id
    svgElement.id = 'svg_' + id
    const svgContents = svgElement.innerHTML

    // Create new aggregations
    const svgNS = 'http://www.w3.org/2000/svg'
    const newAggregation1 = document.createElementNS(svgNS, 'g')
    const newAggregation2 = document.createElementNS(svgNS, 'clipPath')
    newAggregation2.id = id

    // Move the contents of the SVG into the new aggregations
    newAggregation2.innerHTML = svgContents
    newAggregation1.appendChild(newAggregation2)

    // Clear the SVG and append the new aggregation
    svgElement.innerHTML = ''
    svgElement.appendChild(newAggregation1)
  })
})
</script>

<style scoped>
.bg-gray-100 {
  background-color: rgb(100 100 100 / 0.1);
}

.backgroundClass {
  background-image: repeating-linear-gradient(to right, #9e6816 0%, #f1a634 15%, #f9de57 30%, #c3bd67af 45%, #ffe6679f 60%, #cb9b51 80%, #ad7623 100%);
  background-size: 150%;
  transition: background-position 0.4s ease-in-out;
}

.dark .backgroundClass {
  background-image: repeating-linear-gradient(to right, #976a25 0%, #cb9b51 15%, #f6e27a 30%, #f6f2c0 45%, #f6e27a 60%, #cb9b51 80%, #976a25 100%);
  background-size: 150%;
  transition: background-position 0.4s ease-in-out;
}

.backgroundClass:hover {
  background-position: 300%;
}

:is(.dark .dark\:bg-white\/10) {
    background-color: rgb(255 255 255 / 0.1);
}
</style>
