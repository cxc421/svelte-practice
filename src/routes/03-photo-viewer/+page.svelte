<script lang="ts">
  const imgs = [
    { url: "img1.jpg", thumb: "thumb1.jpg", alt: "fruit1" },
    { url: "img2.jpg", thumb: "thumb2.jpg", alt: "fruit2" },
    { url: "img3.jpg", thumb: "thumb3.jpg", alt: "fruit3" },
  ];
  let selectedImg = imgs[0];

  function toImgPath(fileName: string) {
    return `/03/img/${fileName}`;
  }
</script>

<div class="container">
  <header>
    <h1>Viewer</h1>
  </header>
  <main>
    <figure>
      <img
        src={toImgPath(selectedImg.url)}
        width="640"
        height="400"
        alt={selectedImg.alt}
      />
    </figure>
    <ul>
      {#each imgs as img}
        <li>
          <a
            href={toImgPath(img.url)}
            on:click|preventDefault={() => (selectedImg = img)}
          >
            <img
              src={toImgPath(img.thumb)}
              width="80"
              height="50"
              alt={img.alt}
            />
          </a>
        </li>
      {/each}
    </ul>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #4c8c81;
    height: 100vh;
  }

  img {
    vertical-align: bottom;
  }

  h1 {
    padding: 45px 0;
    color: #8ab7ab;
    font-size: 4em;
    font-weight: bold;
    text-align: center;
  }

  main {
    width: 640px;
    margin: 0 auto;
    display: block;
  }

  figure {
    margin-bottom: 20px;
  }

  ul {
    width: 260px;
    margin: 0 auto;
  }

  ul li {
    margin-right: 10px;
    float: left;
    list-style-type: none;
  }

  ul li a:hover {
    transition: opacity 0.3s;
    opacity: 0.5;
  }

  ul li:last-child {
    margin-right: 0;
  }
</style>
