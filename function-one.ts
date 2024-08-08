type Reservation = {
    departureDate: Date;
    rerturnDate: Date;
    departingFrom: string;
    destination: string;
};


type Reserve = {
    (
        departureDate: Date,
        rerturnDate: Date,
        departingFrom: string,
        destination: string
    ) : Reservation;
}