// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dx = Math.abs(move.sourceX - move.destinationX);
        const dy = Math.abs(move.sourceY - move.destinationY);
        
        // Ruch poziomy/pionowy (Rook) lub po przekątnej (Bishop)
        const isRookMove = (dx === 0 && dy > 0) || (dy === 0 && dx > 0);
        const isBishopMove = (dx === dy && dx !== 0);
        
        return isRookMove || isBishopMove;
    }
}