import User from "./User";
import {Company} from "./Company";


export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom: 1,
            center:{
                lat:0,
                lng: 0
            }
        })
    }

    addUserMarker(user: User): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        })
        marker.addListener("click",() => {
            const infoWindow = new google.maps.InfoWindow({
                content: `${user.name} is the name of the user`
            })
            infoWindow.open(this.googleMap,marker)
        })
    }

    addCompanyMarker(company: Company): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: company.location.lat,
                lng: company.location.lng
            }
        })
        marker.addListener("click",() => {
            const infoWindow = new google.maps.InfoWindow({
                content: `${company.companyName} is the name of the company, and their catch phrase is ${company.catchPhrase}`
            })
            infoWindow.open(this.googleMap,marker)
        })
    }






}