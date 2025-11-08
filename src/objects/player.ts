import { RectangleConstructor } from '../interfaces/interfaces';

export class Player extends Phaser.GameObjects.Rectangle {
  body: Phaser.Physics.Arcade.Body;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(params: RectangleConstructor) {
    super(
      params.scene,
      params.x,
      params.y,
      params.width,
      params.height,
      params.fillColor,
      params.fillAlpha
    );

    this.initRectangle();
    this.initPhysics();
    this.initInput();
    this.scene.add.existing(this);
  }

  private initRectangle(): void {
    this.setFillStyle(0x9697c6, 1);
  }

  private initPhysics(): void {
    this.scene.physics.world.enable(this);
    this.body.setCollideWorldBounds();
    this.body.setImmovable(true);
  }

  private initInput(): void {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  update(): void {
    this.handleInput();
  }

  private handleInput(): void {
    let velocity = 0;
    if (this.cursors.right.isDown) {
      velocity += 300;
    } 
    if (this.cursors.left.isDown) {
      velocity -= 300;
    }
    this.body.setVelocityX(velocity);
  }

  public resetToStartPosition(): void {
    this.x = +this.scene.game.config.width / 2 - 20;
    this.y = +this.scene.game.config.height - 50;
  }
}
