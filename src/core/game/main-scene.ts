// phaser/mainScene.ts
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('cat', '/img/gamer_cat.png');
    this.load.image('ghost', '/img/ghost.png');
  }

  create() {
    this.player = this.physics.add.sprite(50, 50, 'cat');
    this.player.scale = 0.1
    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-150);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(150);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-150);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(150);
    } else {
      this.player.setVelocityY(0);
    }
  }
}

export default MainScene;
