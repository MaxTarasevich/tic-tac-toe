class TicTacToe {
  
    constructor() {
        this.gameField =  [
                [null,null,null],
                [null,null,null],
                [null,null,null],
        ]

        this.playerSymbol = 'x'
        this.winner = null

    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] == null ){
            if(this.playerSymbol == `x`){
                this.gameField[rowIndex][columnIndex] = this.playerSymbol
                this.playerSymbol = `o`
        }else if(this.playerSymbol == `o`){
                this.gameField[rowIndex][columnIndex] = this.playerSymbol
                this.playerSymbol = `x`
        }
        }
    }

    isFinished() {
       if(this.isDraw() || this.getWinner() != null){
           return true
       }
       return false
    }

    getWinner() {
        for(let i = 0; i < this.gameField.length; i++){
            if( this.gameField[i].every((item)=>item == `x`)){
                this.winner = `x`
            }else if( this.gameField[i].every((item)=>item == `o`)){
                this.winner = `o`
            }else if(this.gameField[0][i] == `x` && this.gameField[1][i] == `x` && this.gameField[2][i] == `x` ){
                this.winner = `x`
            }else if(this.gameField[0][i] == `o` && this.gameField[1][i] == `o` && this.gameField[2][i] == `o` ){
                this.winner = `o`
            }
        }
        if(this.gameField[0][0] == `o` && this.gameField[1][1] == `o` && this.gameField[2][2] == `o`){
            this.winner = `o`
        }else if(this.gameField[0][2] == `o` && this.gameField[1][1] == `o` && this.gameField[2][0] == `o`){
            this.winner = `o`
        }else if(this.gameField[0][0] == `x` && this.gameField[1][1] == `x` && this.gameField[2][2] == `x`){
            this.winner = `x`
        }else if(this.gameField[0][2] == `x` && this.gameField[1][1] == `x` && this.gameField[2][0] == `x`){
            this.winner = `x`
        }
        return this.winner
    }

    noMoreTurns() {
        let noMoreNull = this.gameField.flat().find((i)=>i == null)
        if(noMoreNull === undefined){
            return true
        }else{
            return false
        }
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner() === null){
            return true
        }else{
            return false
        }
           
        }
        
    

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex]

    }
}

module.exports = TicTacToe;
