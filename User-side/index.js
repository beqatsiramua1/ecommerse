"use strict";


const fourthSection = document.querySelector(".fourth-section")
const owlItem = document.querySelector(".iwl-item");
const seventhSectionContainer = document.querySelector(".seventh-section-container");
const eigthSection = document.querySelector(".eight-section");
const eleventhSection = document.querySelector(".eleventh-section");




class GetFridaySaleData{
    fridayData;
    constructor(){
        this.fridayData = firebase.firestore();
    }

    async getFridayData(){
        try{
            const arr = []
            const data = await this.fridayData.collection("firdaySale").get()
            data.forEach(el=>{
                const element = el.data();
                arr.push(element);
            })
            return arr
        } catch(error){
            console.log(error);
        }
    }
}


const fridaySaleData = new GetFridaySaleData();
const fridaySaleDataResult = fridaySaleData.getFridayData();
fridaySaleDataResult.then(data=>{
    const carousel = `
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${data[0].image_link}" class="w-100 d-block" alt="...">
        <div class="carousel-caption carousel-data">
            <span>BAG,KIDS</span>
            <h2>Black Friday</h2>
          <p>Some representative placeholder content for the first slide.</p>
          <button class="shop-now">SHOP NOW</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${data[1].image_link}" class="carousel-item-data" alt="...">
        <div class="carousel-caption carousel-data">
        <span>BAG,KIDS</span>
          <h2>Black Friday</h2>
          <p>Some representative placeholder content for the third slide.</p>
          <button class="shop-now">SHOP NOW</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
    `

    fourthSection.innerHTML += carousel;
})



class GetDealOfTheWeek{
    dealData;
    constructor(){
        this.dealData = firebase.firestore();
    }

    async getdata(){
        const arr = [];
        const recievedData = await this.dealData.collection("dealdata").get();
        recievedData.forEach(el=>{
            const data = el.data();
            arr.push(data);
        })
        return arr
    }
}


const dealWeekData = new GetDealOfTheWeek()
const weekData = dealWeekData.getdata();
weekData.then(el=>{
    seventhSectionContainer.style.backgroundImage = `url('${el[0].image_link}')`;
})


$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoWidth:true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        100:{
            items:3
        }
    }
})



class GetAllDownImages {
  downimage;
  constructor(){
    this.downimage = firebase.firestore();
  }

  async getDownImages (){
    const arr = []
    const imageData = await this.downimage.collection("downimages").get();
    imageData.forEach(el=>{
      const elData = el.data();
      arr.push(elData);
    })
    return arr;
  }
}


const getDownImageData = new GetAllDownImages();
const dataOfDownImage = getDownImageData.getDownImages();
dataOfDownImage.then(el=>{
  for(const i of el){
    const imageEl = document.createElement("img");
    imageEl.src = i.image_link;
    eigthSection.appendChild(imageEl);
  }
})


class GetPartners{
  partner;
  constructor(){
    this.partner = firebase.firestore();
  };

  async getPartnerData(){
    const arr = [];
    const data = await this.partner.collection("partners").get();
    data.forEach(el=>{
      const elData = el.data();
      arr.push(elData);
    });
    return arr;
  };
};

const getPartnerInfo = new GetPartners();
const partners = getPartnerInfo.getPartnerData();
partners.then(el=>{
  console.log(el);
  for(const i of el){
    const img = document.createElement("img");
    img.classList.add(".eleventh-section-item");
    img.src = i.image_link
    eleventhSection.appendChild(img);
  }
})