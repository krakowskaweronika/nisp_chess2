// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        const dx = Math.abs(move.sourceX - move.destinationX);
        const dy = Math.abs(move.sourceY - move.destinationY);
        
        // Zmienia się tylko X lub tylko Y
        return (dx === 0 && dy > 0) || (dy === 0 && dx > 0);
    }
}