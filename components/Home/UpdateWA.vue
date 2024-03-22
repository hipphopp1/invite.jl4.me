<template>
  <div
    v-if="links.length"
    id="whatsapp"
    class="whatsapp p-4 rounded shadow flex flex-col items-center justify-center"
  >
    <h2 class="text-2xl font-semibold mb-4 text-center dark:bg-gradient-to-r dark:from-gold-100 dark:via-gold-300 dark:to-gold-500 dark:bg-clip-text dark:text-transparent dark:text-title">
      Komm in die Whatsapp Gruppe
    </h2>
    <div class="space-y-5 text-left">
      <p class="mb-4">
        Solltest du, mein werter Freund, Zeit und Lust verspüren, stets auf dem neuesten Stand der Dinge zu sein, so erlaube mir, die ehrenvolle Einladung in in die Whatsapp Gruppe auszusprechen. Es gleicht einer feierlichen Einschreibung und gilt uns als ehrenhaftes Zeichen deiner Bereitschaft, zum gemeinsamen Wohle beizutragen.
      </p>
      <p class="mb-4">
        Für den Fall, dass du besondere Anregungen hast oder schlichtweg kundtun möchtest, was für gute Memes du hast, von denen du dich zu deinem Outfit inspirieren lässt, so ist dies der dedizierte Ort dafür.
      </p>
      <p class="mb-4">
        Später wird es auf jeden Fall auch eine Playlist geben mit Musikvorschlägen und wer Lust hat seine Outfitideen per Dall-e / Midjourney zu kreieren - gerne einschicken.
      </p>
    </div>
    <div
      class="whatsapp p-4 rounded flex flex-col items-center justify-center"
    >
      <NuxtLink
        :to="links[0].url"
        target="_blank"
        external
        class="inline-flex items-center gap-4 px-6 py-3 rounded transition bg-gold-light text-gold-darkest hover:bg-gold-darker"
      >
        <Icon
          :name="links[0].icon"
          class="w-6 h-6"
        />
        <span class="text-sm">
          {{ links[0].name }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    name: 'WhatsApp Group',
    url: 'https://chat.whatsapp.com/B7A6pcWClWGF3jxHBhKnyb', // Replace this with your actual WhatsApp group link
    icon: 'mdi:whatsapp'
  }
]
</script>
