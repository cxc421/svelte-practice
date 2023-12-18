<script lang="ts">
  let scrollY = 0;
  $: isHeaderSmall = scrollY > 300;
</script>

<svelte:window bind:scrollY />

<div class="container">
  <header class:small={isHeaderSmall}>
    <h1>Resize Header</h1>
    <nav>
      <ul>
        <li><a href="#1">Menu1</a></li>
        <li><a href="#2">Menu2</a></li>
        <li><a href="#3">Menu3</a></li>
        <li><a href="#4">Menu4</a></li>
        <li><a href="#5">Menu5</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    overflow: auto;
  }

  header {
    background: #fdca4b;
    position: fixed;
    width: 100%;
  }

  header h1 {
    color: #ab4f50;
    padding: 90px 25px;
    font-size: 3.5em;
    font-weight: bold;
    transition:
      padding 0.3s,
      font-size 0.3s;
  }

  header nav {
    position: absolute;
    top: 105px;
    right: 25px;
    transition: top 0.3s;
  }

  header.small h1 {
    padding: 25px;
    font-size: 1.5em;
  }

  header.small nav {
    top: 30px;
  }

  li {
    float: left;
    margin-left: 20px;
    list-style-type: none;
    font-weight: bold;
  }

  li a {
    text-decoration: none;
    color: #ab4f50;
  }

  li a:hover {
    color: #fff;
  }

  main {
    display: block;
    padding: 300px 25px 20px;
  }

  section h2 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ab4f50;
  }

  p {
    color: #462c2c;
    margin-bottom: 50px;
    line-height: 2em;
  }
</style>
