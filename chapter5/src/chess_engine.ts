import { PathOrFileDescriptor } from "fs"
import internal = require("stream")

class Game{
    private pieces = Game.MakePieces()

    private static MakePieces() :Piece[]{
        return[
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),

            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ]
    }
}
//class Piece{}
//class Position{}

type Color = 'Black' | 'White'
type Raw = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 

class Position{
    constructor(
        private raw :Raw,
        private rank :Rank
    ){}

    public distanceFrom(position :Position) {
        return{
            Raw: Math.abs(position.raw.charCodeAt(0) - this.raw.charCodeAt(0)),
            Rank: Math.abs(position.rank - this.rank)
        }
    }
}

// Pieceのインスタンスを直接生成してほしくない
// 拡張クラスを生成してほしいのでabstractにする
abstract class Piece{
    protected position:Position
    constructor(
        private readonly color :Color,
        private raw :Raw,
        private rank :Rank
    ){
        this.position = new Position(raw, rank)
    }

    public moveTo(position :Position){
        this.position = position
    }
    // 駒によって固定の移動処理
    abstract canMoveTo(position :Position) :boolean
}

class King extends Piece{
    canMoveTo(position :Position){
        let distance = position.distanceFrom(this.position)
        return distance.Rank < 2 && distance.Raw < 2
    }
}

class Queen extends Piece{
    canMoveTo(position :Position){
        let distance = position.distanceFrom(this.position)
        return distance.Rank < 2 && distance.Raw < 2
    }
}

class Bishop extends Piece{
    canMoveTo(position :Position){
        let distance = position.distanceFrom(this.position)
        return distance.Rank < 2 && distance.Raw < 2
    }
}
// class Knight extends Piece{}
// class Rook extends Piece{}
// class Pawn extends Piece{}