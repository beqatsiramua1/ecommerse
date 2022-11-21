
/*

class DealData{
    constructor(image_link){
        this.image_link = image_link;
    }
}

class DealOfTheWeek{
    deal;
    constructor(){
        this.deal = firebase.firestore();
    }

    async addDealItem (item){
        try{   
            const dealItem = JSON.stringify(item);
            const addDealData = await this.deal.collection("dealdata").add(JSON.parse(dealItem));
        }catch(error){
            console.log(error)
        }
    }
}

const dealDataInfo = new DealOfTheWeek();
const dealDataSrc = new DealData("https://preview.colorlib.com/theme/fashi/img/time-bg.jpg.webp");
dealDataInfo.addDealItem(dealDataSrc);


*/