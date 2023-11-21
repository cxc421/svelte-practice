<script lang="ts">
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  const menuList = [
    {
      title: "Menu1",
      href: "#1",
      subList: [
        { title: "Menu1a", href: "#1a" },
        { title: "Menu1b", href: "#1b" },
        { title: "Menu1c", href: "#1c" },
      ],
      showSubList: false,
    },
    {
      title: "Menu2",
      href: "#2",
      subList: [
        { title: "Menu2a", href: "#2a" },
        { title: "Menu2b", href: "#2b" },
        { title: "Menu2c", href: "#2c" },
      ],
      showSubList: false,
    },
    {
      title: "Menu3",
      href: "#3",
      subList: [
        { title: "Menu3a", href: "#3a" },
        { title: "Menu3b", href: "#3b" },
        { title: "Menu3c", href: "#3c" },
      ],
      showSubList: false,
    },
    {
      title: "Menu4",
      href: "#4",
      subList: [
        { title: "Menu4a", href: "#4a" },
        { title: "Menu4b", href: "#4b" },
        { title: "Menu4c", href: "#4c" },
      ],
      showSubList: false,
    },
  ];
</script>

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Dropdown Menu</h1>
    </header>
    <nav>
      <ul id="navi">
        {#each menuList as menu}
          <li
            on:mouseenter={() => (menu.showSubList = true)}
            on:mouseleave={() => (menu.showSubList = false)}
          >
            <a href={menu.href}>{menu.title}</a>
            {#if menu.showSubList}
              <ul transition:slide={{ duration: 200, easing: sineInOut }}>
                {#each menu.subList as { href, title }}
                  <li><a {href}>{title}</a></li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
    <main>
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
    background: #fdc825;
    height: 100vh;
  }

  #wrapper {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
  }

  header h1 {
    padding: 80px 25px;
    color: #fdc825;
    background: #526563;
    font-size: 4em;
    font-weight: bold;
  }

  li {
    float: left;
    width: 250px;
    text-align: center;
    list-style-type: none;
    font-weight: bold;
  }

  ul ul {
    /* display: none; */
    position: absolute;
    width: 250px;
  }

  li li {
    float: none;
    border-top: 1px solid #7f9492;
  }

  li a {
    display: block;
    padding: 20px 0;
    color: #fdc825;
    background: #3f5250;
    border-right: 1px solid #526563;
    text-decoration: none;
  }

  li a:hover {
    color: #fff;
    background: #394c4a;
  }

  #navi > li:last-child > a,
  nav li:last-child li a {
    border-right: none;
  }

  main {
    clear: both;
    display: block;
    padding: 50px 25px 20px;
  }

  p {
    margin-bottom: 50px;
    line-height: 2em;
    color: #394c4a;
  }
</style>
