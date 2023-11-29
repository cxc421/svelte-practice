<script lang="ts">
  import { fade } from "svelte/transition";

  const imgList = [
    { src: "/09/img/icon1.png", alt: "Information" },
    { src: "/09/img/icon2.png", alt: "Help" },
    { src: "/09/img/icon3.png", alt: "Contact" },
  ];

  let tooltipInfo: { text: string; left: number; top: number } | null = null;

  function onLiMouseEnter(event: MouseEvent, text: string) {
    const li = event.target as HTMLLIElement;
    const triangleHeight = 18;
    const { top, left, width } = li.getBoundingClientRect();
    tooltipInfo = { top: top - triangleHeight, left: left + width / 2, text };
  }
  function onLiMouseLeave() {
    tooltipInfo = null;
  }
</script>

<div class="container">
  <div id="wrapper">
    <h1>Tooltip</h1>
    <ul>
      {#each imgList as img}
        <li
          on:mouseenter={(event) => onLiMouseEnter(event, img.alt)}
          on:mouseleave={onLiMouseLeave}
        >
          <img src={img.src} width="150" height="150" alt={img.alt} />
        </li>
      {/each}
    </ul>
  </div>
  {#if tooltipInfo}
    <div
      id="tooltip"
      style:left={tooltipInfo.left + "px"}
      style:top={tooltipInfo.top + "px"}
      style:transform="translate(-50%, -100%)"
      in:fade
    >
      <p>{tooltipInfo.text}</p>
    </div>
  {/if}
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #e86278;
    text-align: center;
    min-height: 100vh;
    overflow: auto;
  }

  h1 {
    margin: 120px 0;
    color: #f5d228;
    font-size: 5em;
    font-weight: bold;
  }

  li {
    list-style-type: none;
    float: left;
    margin-right: 60px;
    cursor: pointer;
    width: 150px;
    height: 150px;
    background: #f5d228;
    font-size: 4em;
    border-radius: 75px;
  }

  li:last-child {
    margin-right: 0;
  }

  ul {
    display: inline-block;
  }

  #tooltip {
    position: absolute;
    border-radius: 10px;
    background: #fff;
  }

  #tooltip p {
    text-align: center;
    color: #e86278;
    font-size: 2em;
    padding: 17px;
  }

  #tooltip:after {
    content: " ";
    width: 0px;
    border-top: 18px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    left: 50%;
    margin-left: -8px;
  }
</style>
