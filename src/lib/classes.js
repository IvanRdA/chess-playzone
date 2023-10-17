export class Board {
  constructor(width, height) {
    this.width = width
    this.heigth = height
  }

  get evenRow() {
    return ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w']
  }
  get pairRow() {
    return ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b']
  }

  get whitePiecesRow() {
    return [
      ['w', 'R'],
      ['w', 'N'],
      ['w', 'B'],
      ['w', 'Q'],
      ['w', 'K'],
      ['w', 'B'],
      ['w', 'N'],
      ['w', 'R']
    ]
  }
  get whitePawnsRow() {
    return [
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p']
    ]
  }
  get blackPiecesRow() {
    return [
      ['b', 'R'],
      ['b', 'N'],
      ['b', 'B'],
      ['b', 'Q'],
      ['b', 'K'],
      ['b', 'B'],
      ['b', 'N'],
      ['b', 'R']
    ]
  }
  get blackPawnsRow() {
    return [
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p'],
      ['w', 'p']
    ]
  }

  createInitialBoard(width, height) {
    const initialBoard = []

    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        initialBoard.push(this.blackPiecesRow)
      } else if (i === 1) {
        initialBoard.push(this.blackPawnsRow)
      } else if (i === 6) {
        initialBoard.push(this.whitePawnsRow)
      } else if (i === 7) {
        initialBoard.push(this.whitePiecesRow)
      } else {
        if (i % 2 === 0) {
          initialBoard.push(this.pairRow)
        } else {
          initialBoard.push(this.evenRow)
        }
      }
    }
    return initialBoard
  }

  updateBoard(previousBoard, pieceKey, originSquare, targetSquare) {}
}

export class Piece {
  constructor(key) {
    this.key = key
  }
}

export class Game {}
