<script lang="ts">
  import { onMount } from "svelte";

  let nav: HTMLElement;
  let scrollY = 0;
  let navPos = 0;

  onMount(() => {
    const box = nav.getBoundingClientRect();
    const docElem = document.documentElement;
    navPos = box.top + window.scrollY - docElem.clientTop;

    console.log({ bt: box.top, wsy: window.scrollY, ct: docElem.clientTop });
  });
</script>

<svelte:window bind:scrollY />

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Sticky Header</h1>
    </header>
    <nav bind:this={nav} style:position={scrollY > navPos ? "fixed" : "static"}>
      <ul>
        <li><a href="#1">Menu1</a></li>
        <li><a href="#2">Menu2</a></li>
        <li><a href="#3">Menu3</a></li>
        <li><a href="#4">Menu4</a></li>
        <li><a href="#5">Menu5</a></li>
      </ul>
    </nav>
    <main>
      <section>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </main>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;

    min-height: 100vh;
    overflow: auto;
  }

  #wrapper {
    min-width: 1000px;
    margin: 0 auto;
  }

  header h1 {
    text-align: center;
    background: #d84544;
    color: #ad3231;
    padding: 180px 0;
    font-size: 4.5em;
    font-weight: bold;
  }

  nav {
    width: 100%;
    top: 0;
    left: 0;
  }

  li {
    float: left;
    width: 20%;
  }

  li a {
    text-align: center;
    display: block;
    text-decoration: none;
    background: #ad3231;
    padding: 25px 0;
    color: #fff;
    border-right: 1px solid #d84544;
  }

  li a:hover {
    background: #98302f;
  }

  li:last-child a {
    border-right: none;
  }

  main {
    clear: both;
    display: block;
    padding: 50px 25px 20px;
  }

  section h1 {
    font-size: 3.5em;
    font-weight: normal;
    margin-bottom: 20px;
    color: #d84544;
  }

  p {
    margin-bottom: 50px;
    line-height: 2em;
    color: #4e2322;
  }
</style>
