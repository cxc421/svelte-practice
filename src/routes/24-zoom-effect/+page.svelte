<script lang="ts">
  let thumb: HTMLDivElement;
  let thumbImgWidth = 0;
  let thumbImgHeight = 0;
  let imgWidth = 0;
  let imgHeight = 0;
  const previewWidth = 40;
  const previewHeight = 40;

  let showPreview = false;
  let previewLeft = 0;
  let previewTop = 0;

  $: imgLeft =
    thumbImgWidth > 0 ? -(imgWidth / thumbImgWidth) * previewLeft : 0;
  $: imgTop =
    thumbImgHeight > 0 ? -(imgHeight / thumbImgHeight) * previewTop : 0;

  function updateMousePosition(pageX: number, pageY: number) {
    if (thumb) {
      const thumbRect = thumb.getBoundingClientRect();
      const offsetLeft = pageX - thumbRect.left;
      const offsetTop = pageY - thumbRect.top;
      showPreview =
        offsetLeft >= 0 &&
        offsetLeft <= thumbImgWidth &&
        offsetTop >= 0 &&
        offsetTop <= thumbImgHeight;
      if (showPreview) {
        previewLeft = Math.min(
          Math.max(offsetLeft - previewWidth / 2, 0),
          thumbImgWidth - previewWidth
        );
        previewTop = Math.min(
          Math.max(offsetTop - previewHeight / 2, 0),
          thumbImgHeight - previewHeight
        );
      }
    }
  }
</script>

<svelte:window on:mousemove={(e) => updateMousePosition(e.pageX, e.pageY)} />
<div class="container">
  <div id="wrapper">
    <h1>Zoom</h1>
    <div id="thumb" bind:this={thumb}>
      <img
        src="/24/img/thumb.jpg"
        width="400"
        height="400"
        alt="thumbnail"
        bind:naturalWidth={thumbImgWidth}
        bind:naturalHeight={thumbImgHeight}
      />
      {#if showPreview}
        <span
          style:width={`${previewWidth}px`}
          style:height={`${previewHeight}px`}
          style:left={`${previewLeft}px`}
          style:top={`${previewTop}px`}
        ></span>
      {/if}
    </div>
    <div id="zoom">
      <img
        src="/24/img/zoom.jpg"
        width="4000"
        height="4000"
        alt="zoom"
        bind:naturalWidth={imgWidth}
        bind:naturalHeight={imgHeight}
        style:left={`${imgLeft}px`}
        style:top={`${imgTop}px`}
      />
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #83828a;
    min-height: 100vh;
    overflow: auto;
  }

  #wrapper {
    width: 830px;
    margin: 0 auto;
    overflow: hidden;
  }

  h1 {
    margin: 50px 0;
    color: #f5da49;
    font-size: 4.5em;
    font-weight: bold;
    text-align: center;
  }

  #wrapper div {
    border: 1px solid #f5da49;
  }

  #thumb {
    position: relative;
    width: 400px;
    height: 400px;
    float: left;
  }

  #thumb img {
    width: 100%;
  }

  span {
    width: 40px;
    height: 40px;
    position: absolute;
    border: 1px solid #83828a;
    background: rgba(131, 130, 138, 0.5);
  }

  #zoom {
    width: 400px;
    height: 400px;
    overflow: hidden;
    float: right;
    position: relative;
  }

  #zoom img {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
