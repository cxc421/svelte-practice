<script lang="ts">
  import { onMount } from "svelte";

  let imgList = ["img3", "img1", "img2"];
  const baseLeft = -1000;
  let sliding = false;
  let left = baseLeft;
  let tmpImgList = imgList;
  let busy = false;
  let timer: ReturnType<typeof setTimeout>;

  function moveRight() {
    if (busy) return;
    clearTimeout(timer);

    left += 1000;
    sliding = true;

    tmpImgList = imgList.slice();
    const lastImg = tmpImgList.pop();
    if (lastImg) {
      tmpImgList.unshift(lastImg);
    }
  }

  function moveLeft() {
    if (busy) return;
    clearTimeout(timer);

    left -= 1000;
    sliding = true;

    tmpImgList = imgList.slice();
    const firstImg = tmpImgList.shift();
    if (firstImg) {
      tmpImgList.push(firstImg);
    }
  }

  function moveStart() {
    busy = true;
  }

  function moveStop() {
    busy = false;
    sliding = false;
    left = baseLeft;
    imgList = tmpImgList;

    timer = setTimeout(moveLeft, 3000);
  }

  onMount(() => {
    timer = setTimeout(moveLeft, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
</script>

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Slider</h1>
    </header>
    <div id="slide">
      <ul
        style:left={`${left}px`}
        class:sliding
        on:transitionstart={moveStart}
        on:transitionend={moveStop}
      >
        {#each imgList as img (img)}
          <li>
            <img src="/22/img/{img}.jpg" width="1000" height="500" alt={img} />
          </li>
        {/each}
      </ul>
      <button id="prevBtn" on:click={moveRight}
        ><img
          src="/22/img/prev.png"
          width="29"
          height="50"
          alt="Prev"
        /></button
      >
      <button id="nextBtn" on:click={moveLeft}
        ><img
          src="/22/img/next.png"
          width="29"
          height="50"
          alt="Next"
        /></button
      >
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #a8dcdb;
    color: #715252;
    min-height: 100vh;
    overflow: auto;
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

  #slide {
    position: relative;
    overflow: hidden;
    height: 500px;
  }

  #slide ul {
    position: absolute;
    width: 3000px;
  }

  #slide li {
    float: left;
    width: 1000px;
    list-style-type: none;
  }

  button {
    opacity: 0.6;
    transition: opacity 0.2s;
    border: none;
    background: none;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  #prevBtn {
    position: absolute;
    top: 225px;
    left: 20px;
  }

  #nextBtn {
    position: absolute;
    top: 225px;
    right: 20px;
  }

  .sliding {
    transition: left 700ms;
  }
</style>
