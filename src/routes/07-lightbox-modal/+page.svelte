<script lang="ts">
  import { fade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  const imgList = [
    { href: "img1.jpg", thumb: "thumb1.jpg", alt: "Photo1" },
    { href: "img2.jpg", thumb: "thumb2.jpg", alt: "Photo2" },
    { href: "img3.jpg", thumb: "thumb3.jpg", alt: "Photo3" },
  ];
  let selectImg: null | { href: string; thumb: string; alt: string } = null;
</script>

<div class="container">
  <h1>Modal</h1>
  <main id="wrapper">
    <ul>
      {#each imgList as img}
        <li>
          <a
            href="/07/img/{img.href}"
            on:click|preventDefault={() => (selectImg = img)}
            ><img
              src="/07/img/{img.thumb}"
              width="100"
              height="100"
              alt={img.alt}
            /></a
          >
        </li>
      {/each}
    </ul>
  </main>
</div>
{#if Boolean(selectImg)}
  <div
    id="bg"
    on:click={() => (selectImg = null)}
    on:keydown
    role="button"
    tabindex="-1"
    transition:fade={{ easing: sineInOut, duration: 300 }}
  >
    <div
      id="photo"
      role="button"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown
    >
      <img src="/07/img/{selectImg?.href}" alt={selectImg?.alt} />
    </div>
  </div>
{/if}

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #ce563f;
    min-height: 100vh;
    overflow: auto;
  }

  main {
    width: 640px;
    margin: 0 auto;
    display: block;
  }

  h1 {
    margin: 130px 0 50px;
    color: #f9b972;
    font-size: 5em;
    font-weight: bold;
    text-align: center;
  }

  ul {
    width: 400px;
    margin: 0 auto;
  }

  li {
    float: left;
    list-style-type: none;
    margin-right: 50px;
  }

  li:last-child {
    margin-right: 0;
  }

  #bg {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  #photo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 640px;
    height: 420px;
  }
  #photo img {
    width: 100%;
    height: 100%;
  }
</style>
