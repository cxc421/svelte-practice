<script lang="ts">
  import type { Action } from "svelte/action";
  import { fade } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  type Attribute =
    | "all"
    | "red"
    | "blue"
    | "yellow"
    | "gray"
    | "shirt"
    | "jacket"
    | "skirt"
    | "pants"
    | "none";

  const buttonList: { value: Attribute; text: string }[] = [
    { value: "all", text: "All" },
    { value: "red", text: "Red" },
    { value: "blue", text: "Blue" },
    { value: "yellow", text: "Yellw" },
    { value: "gray", text: "Gray" },
    { value: "shirt", text: "Shirt" },
    { value: "jacket", text: "Jacket" },
    { value: "skirt", text: "Skirt" },
    { value: "pants", text: "Pants" },
  ];

  const itemList: { category: Attribute[]; imgSrc: string; imgAlt: string }[] =
    [
      {
        category: ["red", "skirt"],
        imgSrc: "/13/img/skirt.png",
        imgAlt: "item1",
      },
      {
        category: ["gray", "jacket"],
        imgSrc: "/13/img/jacket.png",
        imgAlt: "item2",
      },
      {
        category: ["yellow", "shirt"],
        imgSrc: "/13/img/shirt.png",
        imgAlt: "item3",
      },
      {
        category: ["blue", "skirt"],
        imgSrc: "/13/img/skirt.png",
        imgAlt: "item4",
      },
      {
        category: ["gray", "pants"],
        imgSrc: "/13/img/pants.png",
        imgAlt: "item5",
      },
      {
        category: ["red", "shirt"],
        imgSrc: "/13/img/shirt.png",
        imgAlt: "item6",
      },
      {
        category: ["blue", "shirt"],
        imgSrc: "/13/img/shirt.png",
        imgAlt: "item7",
      },
      {
        category: ["yellow", "pants"],
        imgSrc: "/13/img/pants.png",
        imgAlt: "item8",
      },
      {
        category: ["red", "jacket"],
        imgSrc: "/13/img/jacket.png",
        imgAlt: "item9",
      },
      {
        category: ["gray", "shirt"],
        imgSrc: "/13/img/shirt.png",
        imgAlt: "item10",
      },
      {
        category: ["yellow", "skirt"],
        imgSrc: "/13/img/skirt.png",
        imgAlt: "item11",
      },
      {
        category: ["blue", "jacket"],
        imgSrc: "/13/img/jacket.png",
        imgAlt: "item12",
      },
    ];

  let selectAttribute: Attribute = "all";
  let tmpAttribute: Attribute = "all";
  let mountedItemCount = 0;

  const itemCountAction: Action = () => {
    mountedItemCount++;
    return {
      destroy() {
        mountedItemCount--;
        if (mountedItemCount === 0) {
          selectAttribute = tmpAttribute;
        }
      },
    };
  };
</script>

<div class="container">
  <div id="wrapper">
    <h1>Filtering</h1>
    <div id="buttons">
      {#each buttonList as btn}
        <button
          value={btn.value}
          on:click={() => {
            tmpAttribute = btn.value;
            selectAttribute = "none";
          }}>{btn.text}</button
        >
      {/each}
    </div>
    <ul id="list">
      {#each itemList as item (item.imgAlt)}
        {#if item.category.includes(selectAttribute) || selectAttribute === "all"}
          <li
            class={item.category.join(" ")}
            transition:fade={{ duration: 300, easing: sineInOut }}
            use:itemCountAction
          >
            <img src={item.imgSrc} alt={item.imgAlt} width="150" height="150" />
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #e9eceb;
    overflow: auto;

    min-height: 100vh;
  }

  #wrapper {
    width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    margin: 50px 0;
    color: #717171;
    font-size: 5em;
    font-weight: normal;
  }

  button {
    font-size: 1em;
    margin-right: 10px;
    display: block;
    color: #e9eceb;
    padding: 10px 25px;
    background: #9fafaa;
    border-radius: 20px;
    border: none;
    display: inline-block;
    cursor: pointer;
  }

  #buttons button:last-child {
    margin-right: 0;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    background: #717171;
  }

  #list {
    margin-right: -20px;
    padding-top: 50px;
  }

  #list li {
    margin-right: 20px;
    margin-bottom: 25px;
    width: 150px;
    height: 150px;
    list-style-type: none;
    float: left;
  }

  #list li.red {
    background: #d2334c;
  }

  #list li.blue {
    background: #404669;
  }

  #list li.yellow {
    background: #f7d139;
  }

  #list li.gray {
    background: #ccc;
  }
</style>
