import { RectangleConstructor } from '../interfaces/interfaces';

export const playerDirection = {
  NORMAL: 1,
  INVERTED: -1
};

export class Player extends Phaser.GameObjects.Rectangle {
  body: Phaser.Physics.Arcade.Body;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly MAX_SPEED: number = 300;
  private xInicio: number;
  private yInicio: number;
  private directionMultiplier: number;

  constructor(params: RectangleConstructor & { directionMultiplier?: number }) {
    // Agrego directionMultiplier opcional con el signo de interrogacion para que no sea obligatorio
    super(
      params.scene,
      params.x,
      params.y,
      params.width,
      params.height,
      params.fillColor,
      params.fillAlpha
    );
    this.xInicio = params.x;
    this.yInicio = params.y;
    this.initRectangle();
    this.initPhysics();
    this.initInput();
    this.scene.add.existing(this);
    this.directionMultiplier = params.directionMultiplier ?? 1; // Asigno el valor de directionMultiplier o 1 si no esta definido
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
    // Keyboard input
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  update(): void {
    this.handleKeyboardInput();
  }

  //Quito el manejo de puntero

  /*private handleInput(): void {
    // Pointer input takes priority when pointer is down
    if (this.scene.input.activePointer.isDown) {
      this.handlePointerInput();
    } else {
      // Fall back to keyboard input
      this.handleKeyboardInput();
    }
  }

  private handlePointerInput(): void {
    // Directly set paddle to pointer X position
    const pointer = this.scene.input.activePointer;
    const targetX = pointer.x;

    // Calculate velocity based on movement
    let velocity = (targetX - this.x) * 60; // Convert position change to velocity

    // Clamp velocity to MAX_SPEED
    velocity = Phaser.Math.Clamp(velocity, -this.MAX_SPEED, this.MAX_SPEED);
    this.body.setVelocityX(velocity);
  }*/

  private handleKeyboardInput(): void {
    let velocity = 0;
    if (this.cursors.right.isDown) {
      velocity += this.MAX_SPEED * this.directionMultiplier; // Multiplico la velocidad por el directionMultiplier, si no esta definido uso 1
    }
    if (this.cursors.left.isDown) {
      velocity -= this.MAX_SPEED * this.directionMultiplier;
    }

    // Clamp velocity to MAX_SPEED
    velocity = Phaser.Math.Clamp(velocity, -this.MAX_SPEED, this.MAX_SPEED);
    this.body.setVelocityX(velocity);
  }

  public resetToStartPosition(): void {
    this.x = this.xInicio;
    this.y = this.yInicio;
  }
}
