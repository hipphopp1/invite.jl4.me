<template>
  <div class="invitation-container dark:bg-dark mx-auto my-10 p-6 bg-white shadow-md rounded-lg dark:bg-transparent dark:shadow-none">
    <h1 class="text-2xl font-bold text-center dark:bg-gradient-to-r dark:from-gold-50 dark:via-gold-300 dark:to-gold-500 dark:bg-clip-text dark:text-transparent dark:text-title">
      Partyeinladung!
    </h1>
    <br />
    <p class="text-md text-gray-800 dark:text-white font-normal mt-4">
      Hey ihr Lieben, ich freu mich riesig, euch zu meiner ersten Party seit viel zu langem einzuladen: <strong>Der 27+1 Party!</strong> 🎉
    </p>
    <div class="mt-4">
      <p class="text-md text-gray-600 dark:text-white">
        <strong>Wann:</strong> 20. April 2024<br>
        <strong>Wo:</strong> Bornstraße 3, 20146 Hamburg
      </p>
      <p class="text-md text-gray-600 dark:text-white mt-2">
        Seien wir mal ganz ehrlich - 27+1 ist nen ungewöhnliches Thema, z.T. ists etwa +1 zu meinem 27. Bday, zum anderen ein Jahrhundert nach den 1920ern und zumindest die Deko wird in dem Stil!
        Der Plan sieht teilweise Stehparty, teilweise Pokertisch vor. Da ich verschiedenste Freundesgruppen einlade, versuche ich, da möglichst zu durchmischen. Und ich würde jeden bitte kostümtechnisch da was Kreatives draus zu machen.
        Ich freue mich, mit euch allen abzufeiern! 🎈
      </p>
      <p class="text-md text-gray-600 dark:text-white mt-2">
        Bei einer +1 Party sind eure +1s natürlich auch mega willkommen!  Ich freu mich auf eine unvergessliche Nacht mit euch allen! 🌟
      </p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '27+1 Party Einladung',
  description: 'Einladung zur 27+1 Party am 20. April 2024 in Hamburg. Ein Abend, der das Leben feiert, mit Kostümen, die Kreativität und Gemeinschaft fördern.',
})
</script>

<style scoped>
.invitation-container {
  position: relative;
  font-family: 'Helvetica', 'Arial', sans-serif;
  border-radius: 20px;
}

.invitation-container:before, .invitation-container:after {
  content: '';
  position: absolute;
  width: 90px;
  height: 90px;
  background: url('/lines.svg') no-repeat center center;
  background-size: 100% 100%;
}

.invitation-container:before {
  top: -30px;
  left: -30px;
}

.invitation-container:after {
  bottom: -30px;
  right: -30px;
  transform: rotate(180deg);
}

.dark .invitation-container {
  background-color: #262626;
}

@media only screen and (max-width: 991px) {
  .invitation-container {
    width: calc(100% - 60px);
  }

  .invitation-container:after {
    width: 66px;
    height: 66px;
    bottom: -20px;
    right: -20px;
  }
}

@media only screen and (max-width: 1439px) {
  .invitation-container {
    width: calc(100% - 60px);
  }

  .invitation-container:after {
    width: 81px;
    height: 81px;
    bottom: -25px;
    right: -25px;
  }
}
</style>
