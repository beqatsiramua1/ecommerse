/*

class fridaySail{
    constructor(image_url){
        this.image_link = image_url;
    }
}

class AddFridaySale{
    fridaySale;
    constructor(){
        this.fridaySale = firebase.firestore();
    }

    async addFridaySailData (data){
        const sale = JSON.stringify(data);
        const saleData = await this.fridaySale.collection("firdaySale").add(JSON.parse(sale));
    }
}

const fridaySaleCont = new AddFridaySale();
const fridaySaleData = [
    new fridaySail("https://preview.colorlib.com/theme/fashi/img/hero-1.jpg.webp"),
    new fridaySail("https://preview.colorlib.com/theme/fashi/img/hero-2.jpg.webp"),
]

for (const i of fridaySaleData){
    fridaySaleCont.addFridaySailData(i);
}

*/