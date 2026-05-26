// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        const dx = Math.abs(move.sourceX - move.destinationX);
        const dy = Math.abs(move.sourceY - move.destinationY);
        
        // Goniec rusza się po przekątnej (zmiana X równa zmianie Y) i musi wykonać ruch
        return dx === dy && dx !== 0;
    }
}