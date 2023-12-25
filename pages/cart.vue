
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
definePageMeta({
  layout: "framework",
});

const canvasWidth = 1500;
const canvasHeight = 900;
const blockSize = 60;
const rows = canvasHeight / blockSize;
const cols = canvasWidth / blockSize;
const board = Array.from({ length: rows }, () => Array(cols).fill(0));
const gameCanvas = ref<HTMLCanvasElement | null>(null);
let intervalId: number;
const updateSpeed = 300; // Speed in milliseconds

function drawBoard(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas before redrawing
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = board[r][c] ? 'navy' : 'white';
      ctx.fillRect(c * blockSize, r * blockSize, blockSize, blockSize);
      ctx.strokeRect(c * blockSize, r * blockSize, blockSize, blockSize);
    }
  }
}

function updateBoard() {
  // Simple animation: move all rows down and clear the top row
  for (let r = rows - 1; r > 0; r--) {
    board[r] = [...board[r - 1]];
  }
  board[0] = Array(cols).fill(0);

  // Randomly add a new block at the top
  const newBlockPos = Math.floor(Math.random() * cols);
  board[0][newBlockPos] = 1;

  const ctx = gameCanvas.value?.getContext('2d');
  if (ctx) {
    drawBoard(ctx);
  }
}

onMounted(() => {
  if (gameCanvas.value) {
    const ctx = gameCanvas.value.getContext('2d');
    if (ctx) {
      gameCanvas.value.width = canvasWidth;
      gameCanvas.value.height = canvasHeight;
      intervalId = window.setInterval(updateBoard, updateSpeed); // Update the board at a regular interval
    }
  }
});

// Make sure to cleanup the interval when the component unmounts
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="background">
    <canvas ref="gameCanvas"></canvas>
    <h1 class="title">The page is under construction</h1>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: calc(100vh - 91px - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

canvas {
  position: absolute;
  width: 100%;
  height: calc(100vh - 91px - 120px);
  opacity: 0.1;
}

.title {
  font-family: Europe_ext;
  position: relative;
  z-index: 1;
  font-size: 50px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>