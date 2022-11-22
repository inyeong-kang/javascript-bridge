const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_SIZE, BRIDGE_MOVING, GAME_COMMAND } = require("./constants");

const BASE_MESSAGE = "[ERROR] ";
const ERROR_MESSAGE = Object.freeze({
    BLANK: BASE_MESSAGE + "아무것도 입력되지 않았습니다.",
    BRIDGE_RANGE_ERROR: BASE_MESSAGE + "다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    NOT_NUMBER: BASE_MESSAGE + "숫자만 입력해 주세요.",
    MOVING_WRONG_INPUT: BASE_MESSAGE + "U 또는 D만 입력해주세요",
    COMMAND_WRONG_INPUT: BASE_MESSAGE + "R 또는 Q만 입력해주세요",
});

const InputValidation = {

    validateBridgeSize(bridgeSize) {
        if (this.validateNumber(bridgeSize) || this.validateRange(bridgeSize)) {
          return true;
        }
        return false;
    },
    
    validateNumber(bridgeSize) {
        try {
          if (isNaN(bridgeSize)) {
            throw new Error(ERROR_MESSAGE.NOT_NUMBER);
          }
        } catch (error) {
          Console.print(error.message);
          return true;
        }
    },
    
    validateRange(bridgeSize) {
        try {
          if (bridgeSize < BRIDGE_SIZE.START || bridgeSize > BRIDGE_SIZE.END) {
            throw new Error(ERROR_MESSAGE.BRIDGE_RANGE_ERROR);
          }
        } catch (error) {
          Console.print(error.message);
          return true;
        }
    },

    validateMoving(upDown) {
        try {
            if (upDown != BRIDGE_MOVING.UP && upDown != BRIDGE_MOVING.DOWN) {
              throw new Error(ERROR_MESSAGE.MOVING_WRONG_INPUT);
            }
        } catch (error) {
            Console.print(error.message);
            return true;
        }    
    },

    validateCommand(command) {
        try {
            if (command != GAME_COMMAND.RESTART && command != GAME_COMMAND.QUIT) {
              throw new Error(ERROR_MESSAGE.COMMAND_WRONG_INPUT);
            }
        } catch (error) {
            Console.print(error.message);
            return true;
        }    
    },   
    
}

module.exports = InputValidation;