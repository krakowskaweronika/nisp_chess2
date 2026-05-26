// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        const dx = Math.abs(move.sourceX - move.destinationX);
        const dy = Math.abs(move.sourceY - move.destinationY);
        
        // Król może ruszyć się maksymalnie o 1 pole w dowolnym kierunku
        return (dx <= 1 && dy <= 1) && (dx !== 0 || dy !== 0);
    }
}