// Klasa reprezentująca skoczka / konika
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        const dx = Math.abs(move.sourceX - move.destinationX);
        const dy = Math.abs(move.sourceY - move.destinationY);
        
        // Ruch w kształcie litery "L": 2 pola w jednej osi i 1 w drugiej
        return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
    }
}