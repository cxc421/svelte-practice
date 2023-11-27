<script lang="ts">
  import { onMount } from "svelte";

  let top = "100px";
  function onWindowScroll() {
    top = window.scrollY + 100 + "px";
    console.log({ top });
  }
  onMount(() => {
    onWindowScroll();
  });
</script>

<svelte:window on:scroll={onWindowScroll} />
<div class="container">
  <div id="wrapper">
    <div id="container">
      <header>
        <h1>Floating Menu</h1>
      </header>
      <nav style:top>
        <ul>
          <li><a href="#1">Menu1</a></li>
          <li><a href="#2">Menu2</a></li>
          <li><a href="#3">Menu3</a></li>
          <li><a href="#4">Menu4</a></li>
          <li><a href="#5">Menu5</a></li>
        </ul>
      </nav>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #e6e5e5;
    min-height: 100vh;
  }

  #wrapper {
    width: 900px;
    padding: 0 50px;
    margin: 0 auto;
  }

  #container {
    background: #fff;
    padding: 0 170px;
    position: relative;
  }

  h1 {
    color: #635f5f;
    font-size: 4em;
    text-align: center;
    font-weight: bold;
    padding: 90px 0;
  }

  nav {
    position: absolute;
    top: 100px;
    left: -50px;
    transition: top 500ms ease-in-out;
  }

  li {
    list-style-type: none;
  }

  a {
    display: block;
    background: #635f5f;
    padding: 20px;
    width: 150px;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #777;
  }

  a:hover {
    background: #504e4e;
  }

  p {
    padding-bottom: 50px;
    line-height: 2em;
    color: #635f5f;
  }
</style>
