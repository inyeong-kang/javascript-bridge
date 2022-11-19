const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
        
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      const bridgeList = BridgeMaker.makeBridge(length);
      console.log(bridgeList);
      const bridgeGame = new BridgeGame(bridgeList);
      return this.readMoving(bridgeGame);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (upDown) => {
      //console.log('입력값은..',upDown);
      const answerOrNot = bridgeGame.move(upDown);
      console.log(answerOrNot);
      if(answerOrNot) this.readMoving(bridgeGame);

      return this.readGameCommand();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {

  },
};

module.exports = InputView;
