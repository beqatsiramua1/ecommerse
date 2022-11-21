"use strict";

const cards = document.querySelector(".shop-main-container-right");
const gender = document.querySelector(".gender");


class GetClothes{
    clothes;
    constructor(){
        this.clothes = firebase.firestore();
    };

    async getClothData(){
        try{
            const arr = [];
            const data = await this.clothes.collection("clothes").get();
            data.forEach(el=>{
                const dataEl = el.data();
                arr.push(dataEl);
            })
            return arr;
        } catch(error){
            console.log(error)
        }
    }
}


const getClothInfo = new GetClothes();
const clothesData = getClothInfo.getClothData();

clothesData.then(data=>{
    const menData = data.filter(el=> el.gender == "men" && el.category == "clothes");
    for (const i of menData){
        const card = `
        <div class="card" style="width: 18rem;">
            <img src="${i.image_link}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.product_name}</h5>
                <p class="card-text">${i.product_descr}</p>
                <p class="price">$${i.product_price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        cards.innerHTML += card;
    }
})

gender.addEventListener("change", function(){
    cards.innerHTML = "";
    if (gender.value == "men"){
        clothesData.then(el=>{
            const menData = el.filter(el=> el.gender == "men" && el.category == "clothes");
            for (const i of menData){
                console.log(i);
                const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${i.image_link}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${i.product_name}</h5>
                        <p class="card-text">${i.product_descr}</p>
                        <p class="price">$${i.product_price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                cards.innerHTML += card;
            }
        })
    } else if (gender.value === "women"){
        clothesData.then(el=>{
            const menData = el.filter(el=> el.gender == "women" && el.category == "clothes");
            for (const i of menData){
                console.log(i);
                const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${i.image_link}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${i.product_name}</h5>
                        <p class="card-text">${i.product_descr}</p>
                        <p class="price">$${i.product_price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                cards.innerHTML += card;
            }
        })
    } else if (gender.value == "kid"){
        clothesData.then(el=>{
            const menData = el.filter(el=> el.gender == "kid" && el.category == "clothes");
            for (const i of menData){
                console.log(i);
                const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${i.image_link}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${i.product_name}</h5>
                        <p class="card-text">${i.product_descr}</p>
                        <p class="price">$${i.product_price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                cards.innerHTML += card;
            }
        })
    }
});