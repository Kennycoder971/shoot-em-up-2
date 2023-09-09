import Player from "../Player";
import state from "../gameState";
function rectCollision(a: Player, b: Player): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function checkPlayerMapCollisions(player: Player) {
  if (player.x + player.width / 2 < 0) {
    player.x = -player.width / 2;
  } else if (player.x + player.width / 2 > state.canvasWidth) {
    player.x = state.canvasWidth - player.width / 2;
  }
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.height > state.canvasHeight) {
    player.y = state.canvasHeight - player.height;
  }
}

export { rectCollision, checkPlayerMapCollisions };
