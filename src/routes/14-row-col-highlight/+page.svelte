<script lang="ts">
  const rowTitles = ["a", "b", "c", "d", "e", "f", "g"];
  const data = [
    genRowData(1000),
    genRowData(2000),
    genRowData(3000),
    genRowData(4000),
    genRowData(5000),
    genRowData(6000),
    genRowData(7000),
  ];
  let selectCoords = { rowIdx: -1, colIdx: -1 };

  function genRowData(startValue: number, diff = 1000, rowNum = 7) {
    const result: number[] = [];
    for (let i = 0; i < rowNum; i++) {
      result.push(startValue + i * diff);
    }
    return result;
  }

  function enterTd(rowIdx: number, colIdx: number) {
    selectCoords.rowIdx = rowIdx;
    selectCoords.colIdx = colIdx;
  }
  function leaveTd() {
    selectCoords.rowIdx = -1;
    selectCoords.colIdx = -1;
  }
</script>

<div class="container">
  <h1>Table Row and Column Highlighting</h1>
  <table>
    <tr>
      <th> </th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
    </tr>
    {#each data as rowData, rowIdx}
      <tr>
        <th>{rowTitles[rowIdx]}</th>
        {#each rowData as d, colIdx}
          <td
            on:mouseenter={() => enterTd(rowIdx, colIdx)}
            on:mouseleave={leaveTd}
            class:target={rowIdx === selectCoords.rowIdx ||
              colIdx === selectCoords.colIdx}>{d}</td
          >
        {/each}
      </tr>
    {/each}
  </table>
</div>

<style>
  .container {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #7d3a61;
    text-align: center;

    min-height: 100vh;
    overflow: auto;
  }

  h1 {
    margin: 70px 0;
    color: #fbd068;
    font-size: 3em;
    font-weight: bold;
  }

  table {
    margin: 0 auto;
    font-size: 1.1em;
    border-collapse: separate;
    border-spacing: 1px;
  }

  th,
  td {
    padding: 10px 25px;
  }

  th {
    background: #a76188;
    color: #fff;
  }

  td {
    background: #fff;
    color: #503a47;
  }

  td.target {
    background: #e8e8e8;
  }
</style>
