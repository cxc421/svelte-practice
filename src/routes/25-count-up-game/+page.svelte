<script lang="ts">
  const totalNumber = 25;
  let bestRecord = 0;
  let time = 0;
  let scence: "start" | "play" | "game-over" = "start";
  let numbers: { num: number; hit: boolean }[] = [];
  let timer: ReturnType<typeof setInterval>;
  let nextNumber: number = -1;

  function getRandomNumbers() {
    const numbers = Array.from({ length: totalNumber }).map((_, idx) => ({
      num: idx + 1,
      hit: false,
    }));
    for (let i = 0; i < totalNumber; i++) {
      const r = Math.floor(Math.random() * totalNumber);
      const tmp = numbers[i];
      numbers[i] = numbers[r];
      numbers[r] = tmp;
    }
    return numbers;
  }

  function startGame() {
    time = 0;
    numbers = getRandomNumbers();
    nextNumber = 1;
    scence = "play";

    timer = setInterval(() => {
      time++;
    }, 10);
  }

  function onClickNumber(index: number) {
    const number = numbers[index];
    if (number.num === nextNumber) {
      numbers[index].hit = true;
      nextNumber++;
      if (nextNumber > totalNumber) {
        clearInterval(timer);
        if (bestRecord === 0 || time < bestRecord) {
          bestRecord = time;
        }
        scence = "game-over";
      }
    }
  }
</script>

<div class="container">
  <div id="wrapper">
    <header>
      <h1>Count Up</h1>
      <p id="record">Best Record : <span>{bestRecord}</span></p>
      <p id="timer">Time : <span>{time}</span></p>
    </header>
    <div id="game">
      <div id="numbers">
        {#each numbers as { hit, num }, index (num)}
          <div
            class:hit
            role="button"
            tabindex="-1"
            on:click={() => onClickNumber(index)}
            on:keydown={() => {}}
          >
            {num}
          </div>
        {/each}
      </div>
      {#if scence === "start"}
        <div id="startScene">
          <p></p>
          <button on:click={startGame}>START</button>
        </div>
      {:else if scence === "game-over"}
        <div id="startScene">
          <p>{`Your Record : ${time}`}</p>
          <button on:click={startGame}>PLAY AGAIN</button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #fec617;
    min-height: 100vh;
    overflow: auto;
  }

  #wrapper {
    width: 500px;
    margin: 0 auto;
  }

  header {
    position: relative;
    margin-bottom: 10px;
    color: #7d5740;
    font-weight: bold;
  }

  h1 {
    padding: 40px 0 60px;
    text-align: center;
    font-size: 3em;
  }

  #timer {
    font-size: 1.3em;
    position: absolute;
    text-align: center;
    right: 0;
    bottom: 0;
  }

  #record {
    font-size: 1.3em;
    position: absolute;
    bottom: 0;
  }

  #game {
    position: relative;
  }

  #numbers div {
    width: 99px;
    height: 64px;
    padding-top: 35px;
    font-size: 1.8em;
    font-weight: bold;
    background: #7d5740;
    color: #fec617;
    margin-right: 1px;
    margin-bottom: 1px;
    text-align: center;
    float: left;
    cursor: pointer;
  }

  #numbers div.hit {
    background: #e27c1c;
    color: #fec617;
  }

  #startScene {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background: #7d5740;
  }

  #startScene p {
    margin: 205px 0 10px;
    text-align: center;
    color: #fec617;
  }

  button {
    display: block;
    margin: 0 auto;
    border: none;
    color: #fec617;
    background: #e2681c;
    border-radius: 35px;
    font-size: 2em;
    font-weight: bold;
    padding: 10px 40px;
    cursor: pointer;
    color: #fec617;
    background: #e27c1c;
  }

  button:hover {
    color: #e27c1c;
    background: #fec617;
  }

  button:focus {
    outline: none;
  }
</style>
