new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isGameRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.isGameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      this.playerAttacks(3, 10);

      this.monsterAttacks(5, 12);

      this.checkForWin(this.playerHealth, this.monsterHealth);
    },
    specialAttack() {
      this.playerAttacks(7, 14);

      this.monsterAttacks(5, 12);

      this.checkForWin(this.playerHealth, this.monsterHealth);
    },
    heal() {
      if (this.playerHealth >= 90) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += 10;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10 health points"
      });
    },
    giveUp() {
      this.isGameRunning = false;
    },
    playerAttacks(minDamage, maxDamage) {
      let damage = this.calculateDamage(minDamage, maxDamage);
      this.monsterHealth -= damage;

      if (damage < 10) {
        this.turns.unshift({
          isPlayer: true,
          text: "Player hits monster for " + damage + " points of damage"
        });
      } else {
        this.turns.unshift({
          isPlayer: true,
          text: "Player hits monster HARD for " + damage + " points of damage"
        });
      }
    },
    monsterAttacks(minDamage, maxDamage) {
      let damage = this.calculateDamage(minDamage, maxDamage);
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits player for " + damage + " points of damage",
        damage
      });
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkForWin(you, opponent) {
      if (opponent <= 0) {
        this.playAgainDialogue("You Win! Play Again?");
      } else if (you <= 0) {
        this.playAgainDialogue("You Lose! Play Again?");
      }
      return;
    },
    playAgainDialogue(message) {
      if (confirm(message)) {
        this.isGameRunning = false;
      } else {
        this.isGameRunning = true;
      }
    }
  }
});
