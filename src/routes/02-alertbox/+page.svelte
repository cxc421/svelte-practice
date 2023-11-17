<script lang="ts">
  import { fade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  let showAlertBox = false;
</script>

<div class="container">
  <h1>Alertbox</h1>
  <button id="click" on:click={() => (showAlertBox = true)}>Click Me!</button>
  {#if showAlertBox}
    <div id="bg" transition:fade={{ duration: 300, easing: sineInOut }}>
      <div id="alertBox">
        <p>Good job!</p>
        <button id="ok" on:click={() => (showAlertBox = false)}>OK</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    height: 100vh;
    position: relative;
    overflow: hidden;

    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f1bd29;
    text-align: center;
    color: #696256;
  }

  button {
    cursor: pointer;
    border: none;
    color: #fff;
    background: #45abb5;
    border-radius: 3px;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    background: #3a8e96;
    transition: background 0.3s;
  }

  h1 {
    margin: 170px 0 20px;
    font-size: 5em;
    font-weight: bold;
  }

  #click {
    padding: 15px 50px;
    font-size: 1.7em;
  }

  #bg {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  #alertBox {
    margin: 200px auto 0;
    text-align: center;
    padding-top: 25px;
    width: 300px;
    height: 85px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  }

  #alertBox p {
    font-size: 1.4em;
    margin-bottom: 20px;
  }

  #alertBox #ok {
    padding: 5px 20px;
    font-size: 1em;
  }
</style>
