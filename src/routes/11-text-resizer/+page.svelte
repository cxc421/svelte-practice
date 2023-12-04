<script lang="ts">
  const fontSizes = [
    { href: "#s", text: "S" },
    { href: "#m", text: "M" },
    { href: "#l", text: "L" },
  ];
  let selectFontSize = "M";
</script>

<div
  class="container"
  class:fontSmall={selectFontSize === "S"}
  class:fontMedium={selectFontSize === "M"}
  class:fontLarge={selectFontSize === "L"}
>
  <div id="wrapper">
    <header>
      <h1>Text Resizer</h1>
      <ul>
        {#each fontSizes as { href, text }}
          <li>
            <a {href} on:click|preventDefault={() => (selectFontSize = text)}
              >{text}</a
            >
          </li>
        {/each}
      </ul>
    </header>
    <nav>
      <ul>
        <li><a href="#m1">Menu1</a></li>
        <li><a href="#m2">Menu2</a></li>
        <li><a href="#m3">Menu3</a></li>
        <li><a href="#m4">Menu4</a></li>
      </ul>
    </nav>
    <main>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #9a515b;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  #wrapper {
    margin: 0 auto;
    width: 1000px;
  }

  header {
    background: #82454e;
    padding: 70px 25px;
    position: relative;
  }

  header h1 {
    color: #f1cf45;
    font-size: 3em;
    font-weight: bold;
  }

  header ul {
    position: absolute;
    right: 25px;
    top: 80px;
  }

  header li {
    list-style-type: none;
    margin-left: 10px;
    float: left;
  }

  header li a {
    display: block;
    color: #82454e;
    background: #f1cf45;
    padding: 7px 10px;
  }

  header li a:hover {
    color: #f1cf45;
    background: #63373e;
  }

  nav li {
    float: left;
    width: 25%;
    background: #6d3e45;
  }

  nav li a {
    display: block;
    padding: 16px 0;
    font-size: 1.2em;
    text-align: center;
    color: #f1cf45;
  }

  nav li a:hover {
    background: #63373e;
  }

  main {
    clear: both;
    display: block;
    padding: 50px 25px 20px;
    background: #fff;
  }

  main h1 {
    color: #6d3e45;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    color: #6d3e45;
    margin-bottom: 30px;
    line-height: 2em;
  }

  .fontSmall {
    font-size: 0.8em;
  }

  .fontMedium {
    font-size: 1em;
  }

  .fontLarge {
    font-size: 1.2em;
  }
</style>
