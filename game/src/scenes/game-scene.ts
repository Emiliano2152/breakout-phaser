import { Ball } from '../objects/ball';
import { Brick } from '../objects/brick';
import { Player, PlayerDirection, PlayerAxis } from '../objects/player';
import { settings } from '../settings';

const BRICK_COLORS: number[] = [0xf2e49b, 0xbed996, 0xf2937e, 0xffffff];

export class GameScene extends Phaser.Scene {
  private ball: Ball;
  private bricks: Phaser.GameObjects.Group;
  // TODO usar un array para los players
  private player: Player;
  private player2: Player;
  private player3: Player;
  private scoreText: Phaser.GameObjects.BitmapText;
  private highScoreText: Phaser.GameObjects.BitmapText;
  private livesText: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  init(): void {
    settings.highScore = settings.score;
    settings.score = 0;
    settings.lives = 3;
  }

  create(): void {
    // game objects
    // ------------

    // bricks
    this.bricks = this.add.group();

    const BRICKS = settings.LEVELS[settings.currentLevel].BRICKS;
    const WIDTH = settings.LEVELS[settings.currentLevel].WIDTH;
    const HEIGHT = settings.LEVELS[settings.currentLevel].HEIGHT;

    // blocksTopY es la coordenada `y` del limite superior de los bloques
    const blocksTopY =
      (+this.game.config.height -
        (settings.BRICK.HEIGHT + settings.BRICK.SPACING) * HEIGHT) /
      2;
    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        this.bricks.add(
          new Brick({
            scene: this,
            x: (settings.BRICK.WIDTH + settings.BRICK.SPACING) * x,
            y:
              blocksTopY + y * (settings.BRICK.HEIGHT + settings.BRICK.SPACING),
            width: settings.BRICK.WIDTH,
            height: settings.BRICK.HEIGHT,
            fillColor: BRICK_COLORS[BRICKS[y * 14 + x]]
          })
        );
      }
    }

    // player
    this.player = new Player({
      scene: this,
      x: +this.game.config.width / 2, //Modifique la posicion inicial del player para que este en el centro
      y: +this.game.config.height - 50,
      width: 50,
      height: 10,
      directionMultiplier: PlayerDirection.NORMAL // Le paso el directionMultiplier.NORMAL para que se mueva en sentido normal
    });

    this.player2 = new Player({
      scene: this,
      x: +this.game.config.width / 2,
      y: 60, // Le di la posicion inicial al player2 dejando lugar para el score arriba
      width: 50,
      height: 10,
      directionMultiplier: PlayerDirection.INVERTED // Le paso el directionMultiplier.INVERTED para que se mueva en sentido invertido (-1)
    });

    this.player3 = new Player({
      scene: this,
      x: +this.game.config.width - 10,
      y: +this.game.config.height - 40, // Le di la posicion inicial al player2 dejando lugar para el score arriba
      width: 10,
      height: 50
    });

    // ball
    this.ball = new Ball({ scene: this, x: 0, y: 0 }).setVisible(false);

    // score
    this.scoreText = this.add.bitmapText(
      10,
      10,
      'font',
      `Score: ${settings.score}`,
      8
    );

    this.highScoreText = this.add.bitmapText(
      10,
      20,
      'font',
      `Highscore: ${settings.highScore}`,
      8
    );

    this.livesText = this.add.bitmapText(
      10,
      30,
      'font',
      `Lives: ${settings.lives}`,
      8
    );

    // collisions
    // ----------
    this.physics.add.collider(this.player, this.ball);
    this.physics.add.collider(this.player2, this.ball); // Agregue la colision entre el player2 y la pelota
    this.physics.add.collider(this.player3, this.ball); // Agregue la colision entre el player2 y la pelota

    this.physics.add.collider(
      this.ball,
      this.bricks,
      this.ballBrickCollision,
      null,
      this
    );

    // events
    // ------
    this.events.on('scoreChanged', this.updateScore, this);
    this.events.on('livesChanged', this.updateLives, this);

    // physics
    // -------
    this.physics.world.checkCollision.down = false;
  }

  update(): void {
    this.player.update();
    this.player2.update(); // Actualizo el player2 en el update de la escena
    this.player3.update();

    if (this.player.body.velocity.x !== 0 && !this.ball.visible) {
      this.ball.setPosition(this.player.x, this.player.y - 200);
      this.ball.applyInitVelocity();
      this.ball.setVisible(true);
    }

    if (
      this.ball.visible && // Le agrege la condicion de visibilidad de la pelota porque si no se reiniciaba en un lugado donde (<number>this.ball.y < 50) me hacia perder una vida y entraba en un bucle de perdidas de vida hasta que moviera el player nuevamente.
      (<number>this.ball.y > <number>this.game.config.height ||
        <number>this.ball.y < 50) // Modifique la condicion para que el limite inferior siga siendo el height del juego pero el limite superior sea 50.
    ) {
      {
        settings.lives -= 1;
        this.events.emit('livesChanged');

        if (settings.lives === 0) {
          this.gameOver();
        } else {
          this.player.body.setVelocity(0);
          this.player.resetToStartPosition();
          this.player2.body.setVelocity(0); // Reinicio la velocidad del player2
          this.player2.resetToStartPosition(); // Reinicio la posicion del player2
          this.player3.body.setVelocity(0); // Reinicio la velocidad del player2
          this.player3.resetToStartPosition(); // Reinicio la posicion del player2

          this.ball.setPosition(0, 0);
          this.ball.body.setVelocity(0);
          this.ball.setVisible(false);
        }
      }
    }
  }

  private ballBrickCollision(ball: Ball, brick: Brick): void {
    brick.destroy();
    settings.score += 10;
    this.events.emit('scoreChanged');

    if (this.bricks.countActive() === 0) {
      // all bricks are gone!
    }
  }

  private gameOver(): void {
    this.scene.restart();
  }

  private updateScore(): void {
    this.scoreText.setText(`Score: ${settings.score}`);
  }

  private updateLives(): void {
    this.livesText.setText(`Lives: ${settings.lives}`);
  }
}
