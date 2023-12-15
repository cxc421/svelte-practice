<script lang="ts">
  import { tick } from "svelte";

  let text: string = "";
  let radio: string = "";
  let checkboxs: string[] = [];
  let select: string = "none";
  let textarea: string = "";
  let errors: string[] = [];

  async function handleSubmit() {
    errors = [];
    if (text === "") {
      errors.push("text");
    }
    if (radio === "") {
      errors.push("radio");
    }
    if (checkboxs.length < 3) {
      errors.push("checkbox");
    }
    if (select === "none") {
      errors.push("select");
    }
    if (textarea === "") {
      errors.push("textarea");
    }
    if (errors.length === 0) {
      await tick();
      alert("Send data");
    }
  }
</script>

<div class="container">
  <header>
    <h1>Form Validation</h1>
  </header>
  <main>
    <form
      action="form.php"
      method="post"
      on:submit|preventDefault={handleSubmit}
    >
      <div id="textSection">
        <p><label for="text">Text</label></p>
        {#if errors.includes("text")}
          <p class="alert">Alert : Text</p>
        {/if}
        <input type="text" id="text" name="text" bind:value={text} />
      </div>
      <div id="radioSection">
        <p>Radio</p>
        {#if errors.includes("radio")}
          <p class="alert">Alert : Radio</p>
        {/if}
        <input
          type="radio"
          id="radio1"
          name="radio"
          value="Radio1"
          bind:group={radio}
        />
        <label for="radio1">Radio1</label>
        <input
          type="radio"
          id="radio2"
          name="radio"
          value="Radio2"
          bind:group={radio}
        />
        <label for="radio2">Radio2</label>
        <input
          type="radio"
          id="radio3"
          name="radio"
          value="Radio3"
          bind:group={radio}
        />
        <label for="radio3">Radio3</label>
      </div>
      <div id="checkboxSection">
        <p>Checkbox</p>
        {#if errors.includes("checkbox")}
          <p class="alert">Alert : Checkbox should select at least 3 option</p>
        {/if}
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox"
          value="Checkbox1"
          bind:group={checkboxs}
        />
        <label for="checkbox1">Checkbox1</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox"
          value="Checkbox2"
          bind:group={checkboxs}
        />
        <label for="checkbox2">Checkbox2</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox"
          value="Checkbox3"
          bind:group={checkboxs}
        />
        <label for="checkbox3">Checkbox3</label>
        <input
          type="checkbox"
          id="checkbox4"
          name="checkbox"
          value="Checkbox4"
          bind:group={checkboxs}
        />
        <label for="checkbox4">Checkbox4</label>
        <input
          type="checkbox"
          id="checkbox5"
          name="checkbox"
          value="Checkbox5"
          bind:group={checkboxs}
        />
        <label for="checkbox5">Checkbox5</label>
      </div>
      <div id="selectSection">
        <p>Select</p>
        {#if errors.includes("select")}
          <p class="alert">Alert : Select</p>
        {/if}
        <select bind:value={select}>
          <option value="none">---</option>
          <option value="Select1">Select1</option>
          <option value="Select2">Select2</option>
          <option value="Select3">Select3</option>
        </select>
      </div>
      <div id="textareaSection">
        <p>
          <label for="textarea">TextArea</label>
        </p>
        {#if errors.includes("textarea")}
          <p class="alert">Alert : TextArea</p>
        {/if}
        <textarea id="textarea" name="textarea" bind:value={textarea}
        ></textarea>
      </div>
      <input type="submit" value="Submit" id="submitBtn" />
    </form>
  </main>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #35495c;

    min-height: 100vh;
    overflow: auto;
  }

  main {
    width: 1000px;
    margin: 0 auto 50px;
    display: block;
  }

  h1 {
    color: #ffcc00;
    text-align: center;
    font-size: 3em;
    padding: 70px 0;
    font-weight: bold;
  }

  main {
    background: #fff;
    border-radius: 15px;
    padding: 50px 40px;
  }

  main div {
    margin-bottom: 50px;
  }

  p {
    font-size: 2.5em;
    color: #ec8519;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p.alert {
    font-size: 1em;
    font-weight: normal;
    margin: 10px 0;
    color: #dc2900;
  }

  input[type="text"],
  textarea {
    padding: 5px;
    font-size: 1.3em;
    color: #333;
    border: 1px solid #ccc;
    background: #efefef;
  }

  input[type="text"] {
    width: 300px;
  }

  textarea {
    width: 500px;
    height: 200px;
  }

  #submitBtn {
    color: #35495c;
    background: #ffcc00;
    border: 0;
    border-radius: 30px;
    display: block;
    margin: 0 auto;
    font-size: 1.4em;
    padding: 10px 25px;
    font-weight: bold;
  }

  #submitBtn:focus {
    outline: none;
  }
</style>
