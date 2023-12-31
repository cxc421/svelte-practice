<script lang="ts">
  const buttons = [0, 1, 2, 3];
  const bgColors = ["#6cd8ff", "#ffe254", "#fb9f8a", "#879dc4"];
  let selectButton = 0;
  $: slideLeft = -700 * selectButton + "px";
  $: bgPos = `${-20 * selectButton}px 100%`;
  $: bg1Pos = `${-150 * selectButton}px 100%`;
  $: bg2Pos = `${-700 * selectButton}px 100%`;
</script>

<div
  class="container"
  style:background-position={bgPos}
  style:background-color={bgColors[selectButton]}
>
  <div id="bg1" style:background-position={bg1Pos}>
    <div id="bg2" style:background-position={bg2Pos}>
      <header>
        <h1>Parallax</h1>
      </header>
      <main>
        <div id="slide">
          <div id="sections" style:left={slideLeft}>
            <section>
              <h1>Title1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h1>Title2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h1>Title3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h1>Title4</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </div>
        </div>
        <ul>
          {#each buttons as button}
            <li>
              <a
                href="#{button}"
                class:current={button === selectButton}
                on:click|preventDefault={() => (selectButton = button)}
                >{button}</a
              >
            </li>
          {/each}
        </ul>
      </main>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #664949;
    background: #6cd8ff url(/12/img/bg.png) 0 100% repeat-x;
    transition:
      background-position 0.3s,
      background-color 0.3s;
    height: 100vh;
  }

  #bg1 {
    height: 100%;
    background: url(/12/img/bg1.png) 0 100% repeat-x;
    transition: background-position 0.3s;
  }

  #bg2 {
    height: 100%;
    background: url(/12/img/bg2.png) 0 100% repeat-x;
    transition: background-position 0.3s;
  }

  header h1 {
    padding: 40px 0;
    text-align: center;
    font-size: 4em;
    font-weight: bold;
  }

  main {
    display: block;
    width: 900px;
    background:
      url(/12/img/left.png) no-repeat,
      url(/12/img/right.png) no-repeat 100% 0;
    margin: 0 auto;
  }

  #slide {
    position: relative;
    overflow: hidden;
    display: block;
    width: 700px;
    height: 250px;
    margin: 0 auto;
  }

  #sections {
    position: absolute;
    width: 2800px;
    height: 100%;

    transition: left 300ms;
  }

  section {
    float: left;
    width: 700px;
  }

  section h1 {
    padding-bottom: 20px;
    font-size: 2.5em;
    font-weight: bold;
  }

  section p {
    line-height: 2em;
  }

  ul {
    clear: both;
    text-align: center;
  }

  li {
    display: inline-block;
    margin-right: 35px;
  }

  li:last-child {
    margin-right: 0;
  }

  li a {
    text-indent: -9999px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #664949;
  }

  li a.current {
    background: #988080;
  }
</style>
