class Airplane {
    colGroups = 2;
    colGroupSpacing = 16;
    seatsEachColGroup = 3;
    rowGap = 16;
    colGap = 2;
    rows = 8;
    seats: AirplaneSeat[] = [];

    constructor() {
        this.generate();
    }

    generate() {
        this.seats = [];
        
        const seatRef = new AirplaneSeat();
        
        const totalSeatsWidth = (this.colGroups * this.seatsEachColGroup) * seatRef.width;
        const totalSpacingWidth = (this.colGroups - 1) * this.colGroupSpacing;
        const contentWidth = totalSeatsWidth + totalSpacingWidth;

        const contentHeight = (this.rows * seatRef.height) + ((this.rows - 1) * this.rowGap);

        const offsetX = (width - contentWidth) / 2;
        const offsetY = (height - contentHeight) / 2;

        for (let colGroup = 0; colGroup < this.colGroups; colGroup++) {
            for (let seatNum = 0; seatNum < this.seatsEachColGroup; seatNum++) {
                for (let row = 0; row < this.rows; row++) {
                    const seat = new AirplaneSeat();
                    
                    seat.x = offsetX + (colGroup * (this.seatsEachColGroup * seat.width + this.colGroupSpacing)) + (seatNum * seat.width) + (seatNum * this.colGap);
                    seat.y = offsetY + (row * (seat.height + this.rowGap));
                    
                    this.seats.push(seat);
                }
            }
        }
    }

    draw() {
        for (const seat of this.seats) {
            seat.draw();
        }
    }
}