import faker from "faker";


class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.name.firstName();
        console.log(this.location)
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())

        };
    }
}


export default User;
