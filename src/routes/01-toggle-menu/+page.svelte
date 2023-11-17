<script lang="ts">
  import buttonImg from "./img/button.png";
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  let showMenu = false;
</script>

<div class="container">
  <header>
    <h1>Toggle Menu</h1>
  </header>
  <nav>
    <button
      on:click={() => {
        showMenu = !showMenu;
      }}><img src={buttonImg} width="20" height="17" alt="Button" /></button
    >
    {#if showMenu}
      <ul transition:slide={{ duration: 200, easing: sineInOut }}>
        <li><a href="#1">Menu1</a></li>
        <li><a href="#2">Menu2</a></li>
        <li><a href="#3">Menu3</a></li>
        <li><a href="#4">Menu4</a></li>
      </ul>
    {/if}
  </nav>
  <main>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #333;
  }

  header h1 {
    padding: 20px 25px;
    color: #fff;
    background: #ea4875;
    font-weight: bold;
  }

  button {
    position: absolute;
    top: 17px;
    right: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  ul {
    list-style-type: none;
    position: absolute;
    width: 100%;
  }

  li a {
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 17px 25px;
    color: #fff;
    background: #b94b6a;
    border-bottom: 1px solid #a24861;
  }

  li:last-child a {
    border-bottom: none;
  }

  main {
    display: block;
    padding: 40px 20px 20px;
    color: #333;
  }

  p {
    margin-bottom: 50px;
    line-height: 2em;
  }
</style>
