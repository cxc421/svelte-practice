<script lang="ts">
  export let data;
</script>

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Random Banner</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#1">Menu1</a></li>
        <li><a href="#2">Menu2</a></li>
        <li><a href="#3">Menu3</a></li>
        <li><a href="#4">Menu4</a></li>
        <li><a href="#5">Menu5</a></li>
      </ul>
    </nav>
    <div id="left">
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
      </main>
    </div>
    <div id="right">
      <aside>
        <img src={data.bannerImg} width="300" height="240" alt="banner" />
      </aside>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #d2d2d2;
    color: #3e3e3e;

    min-height: 100vh;
  }

  #wrapper {
    width: 1000px;
    background: #fff;
    margin: 0 auto;
    overflow: hidden;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 60px 25px;
    background: #4c4c4c;
    color: #909090;
  }

  li {
    width: 20%;
    list-style-type: none;
    float: left;
    margin-bottom: 50px;
  }

  li a {
    text-align: center;
    text-decoration: none;
    display: block;
    padding: 20px 0;
    color: #909090;
    background: #3e3e3e;
  }

  #left {
    width: 675px;
    float: left;
  }

  #right {
    width: 325px;
    float: right;
  }

  main {
    display: block;
    padding-left: 25px;
  }

  aside {
    padding-right: 25px;
  }

  p {
    line-height: 2em;
    margin-bottom: 50px;
  }
</style>
