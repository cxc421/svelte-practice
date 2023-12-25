<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  const imgList = [
    { src: "/23/img/img1.jpg", alt: "img1" },
    { src: "/23/img/img2.jpg", alt: "img2" },
    { src: "/23/img/img3.jpg", alt: "img3" },
  ];
  let timer: ReturnType<typeof setTimeout>;
  let currentImgIdx = 0;
  $: currentImg = imgList[currentImgIdx];

  function slideImage() {
    currentImgIdx = (currentImgIdx + 1) % imgList.length;
  }

  function onClickButton(idx: number) {
    clearInterval(timer);
    timer = setInterval(slideImage, 3000);

    currentImgIdx = idx;
  }

  onMount(() => {
    timer = setInterval(slideImage, 3000);

    return () => {
      clearInterval(timer);
    };
  });
</script>

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Slider</h1>
    </header>
    <div id="slide">
      <ul>
        {#key currentImgIdx}
          <li transition:fade={{ duration: 500 }}>
            <img
              src={currentImg.src}
              width="1000"
              height="500"
              alt={currentImg.alt}
            />
          </li>
        {/key}
      </ul>
    </div>
    <div id="button">
      <ul>
        {#each imgList as _, idx}
          <li>
            <a
              href="#{idx}"
              class:target={idx === currentImgIdx}
              on:click|preventDefault={() => onClickButton(idx)}>{idx}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #6d4a4a;
    color: #a8dcdb;
    min-height: 100vh;
    overflow: auto;
  }

  li {
    list-style-type: none;
  }

  #wrapper {
    width: 1000px;
    margin: 0 auto;
  }

  header h1 {
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    padding: 40px 25px;
  }

  #slide ul {
    position: relative;
  }

  #slide li {
    position: absolute;
    width: 100%;
  }

  #button {
    padding-top: 520px;
    text-align: center;
  }

  #button ul {
    display: inline-block;
  }

  #button ul li {
    float: left;
    margin-right: 15px;
  }

  #button ul li:last-child {
    margin-right: 0;
  }

  #button ul li a {
    text-indent: -9999px;
    text-decoration: none;
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background: #a8dcdb;
  }

  #button ul li a.target {
    background: #41afad;
  }
</style>
