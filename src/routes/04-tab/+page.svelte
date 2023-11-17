<script lang="ts">
  const tabData = [
    {
      id: "tab1",
      title: "01",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: "tab2",
      title: "02",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: "tab3",
      title: "03",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: "tab4",
      title: "04",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];

  let selectedTab = tabData[0];
</script>

<div class="container">
  <header>
    <h1>Tab</h1>
  </header>
  <main>
    <ul>
      {#each tabData as data}
        <li>
          <a
            href={data.id}
            class:current={data.id === selectedTab.id}
            on:click|preventDefault={() => (selectedTab = data)}>{data.title}</a
          >
        </li>
      {/each}
    </ul>
    <div id="contents">
      <div id={selectedTab.id}>
        <p><strong>{selectedTab.title}</strong></p>
        <p>{selectedTab.content}</p>
      </div>
    </div>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #e46e6e;
    min-height: 100vh;
  }

  h1 {
    padding: 45px 0;
    color: #c15757;
    font-size: 5em;
    font-weight: bold;
    text-align: center;
  }

  main {
    width: 1000px;
    margin: 0 auto;
    display: block;
  }

  ul li {
    float: left;
    margin-right: 1px;
    list-style-type: none;
  }

  ul li a {
    font-size: 2em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    display: block;
    width: 100px;
    padding: 15px 20px;
    background: #c15757;
  }

  ul li a:hover {
    background: #d26161;
    color: #fff;
  }

  ul li a.current {
    background: #f5f4f2;
    color: #c15757;
  }

  #contents {
    clear: both;
    margin-bottom: 150px;
  }

  #contents div {
    padding: 30px 20px;
    background: #f5f4f2;
  }

  #contents p {
    margin-top: 20px;
    line-height: 2em;
    color: #c15757;
  }

  #contents strong {
    font-size: 4em;
    font-weight: bold;
    color: #d6af62;
  }
</style>
