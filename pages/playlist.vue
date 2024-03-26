<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <div class="rounded-lg spotify-playlist embed-responsive embed-responsive-16by9">
        <div id="spotify-play-button"></div>
      </div>
      <div class="spotify-link ">
        <a href="https://open.spotify.com/playlist/0pt7KSK7HjkCQLzr5Oh2rN?si=ORXNCl4rTC6EqBnL705lcg&pt=43c062c47b1754d8ec91f750eef7b6f8" target="_blank" class="btn btn-primary font-bold py-4 px-8 rounded-full border border-gold-50 hover:border-gold-300 text-1xl font-bold text-center dark:bg-gradient-to-r dark:from-gold-50 dark:via-gold-300 dark:to-gold-500 dark:bg-gradient-to-r hover:from-gold-500 hover:via-gold-200 hover:to-gold-300 dark:bg-clip-text dark:text-transparent dark:text-title">Join the playlist to add songs</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('spotify-play-button');
      const options = {
        uri: 'spotify:playlist:0pt7KSK7HjkCQLzr5Oh2rN',
      };
      const callback = (EmbedController) => {};

      IFrameAPI.createController(element, options, callback);
    };
  },
  beforeDestroy() {
    const script = document.querySelector('script[src="https://open.spotify.com/embed/iframe-api/v1"]');
    if (script) {
      document.body.removeChild(script);
    }
    delete window.onSpotifyIframeApiReady;
  }
}
</script>

<style scoped>
.spotify-playlist {
  max-width: 640px;
  margin: 0 auto;
  border-radius: 0.8rem;
  overflow: hidden;
}
.spotify-link {
  text-align: center;
}
</style>
