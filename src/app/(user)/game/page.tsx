import PhaserGame from "@/core/game/phaser-game";
import React from "react";

type GamePageProps = {};

function GamePage({ ...props }: GamePageProps) {
  return (
    <div>
      <PhaserGame />
    </div>
  );
}

export default GamePage;
