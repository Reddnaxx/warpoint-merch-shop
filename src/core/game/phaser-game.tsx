"use client"

import { useEffect } from "react";
import Phaser from "phaser";
import MainScene from "./main-scene";

const PhaserGame: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0, x: 0 },
        },
      },
      scene: MainScene,
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game"></div>;
};

export default PhaserGame;
