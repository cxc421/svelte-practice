<script lang="ts">
  const imgData = [
    {
      src: "/08/img/img1.jpg",
      alt: "photo1 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/08/img/img2.jpg",
      alt: "photo2 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/08/img/img3.jpg",
      alt: "photo3 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/08/img/img4.jpg",
      alt: "photo4 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/08/img/img5.jpg",
      alt: "photo5 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/08/img/img6.jpg",
      alt: "photo6 &#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
</script>

<div class="container">
  <header>
    <h1>Photo Caption</h1>
  </header>
  <main>
    <ul>
      {#each imgData as { src, alt }}
        <li>
          <img {src} {alt} width="320" height="200" />
          <div>
            <p>{@html alt}</p>
          </div>
        </li>
      {/each}
    </ul>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #333;

    min-height: 100vh;
  }

  header h1 {
    padding: 20px 25px;
    color: #fff;
    background: #2f353e;
    font-weight: bold;
  }

  main {
    display: block;
    width: 1000px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  main li {
    position: relative;
    float: left;
    width: 320px;
    margin: 0 20px 50px 0;
    color: #fff;
    line-height: 2em;
  }

  main li:nth-child(3n) {
    margin-right: 0;
  }

  main li img {
    vertical-align: bottom;
  }

  main div {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: rgba(17, 179, 179, 0.7);
    top: 0;
    left: 0;
    box-sizing: border-box;

    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  main p {
    position: relative;

    transform: translateY(10px);
    transition: transform 300ms ease-in-out;
  }
  main li:hover div {
    opacity: 1;
  }
  main li:hover p {
    transform: translateY(0px);
  }
</style>
