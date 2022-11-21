const navMenu = document.querySelector(".third-section-content-bottom-menu");
const thirdSection = document.querySelector(".third-section");
const thirdSectionContent = document.querySelector(".third-section-content");
const newUl = document.querySelector(".new-ul");
const newCollection = document.querySelector(".new-collection");
const newUlCollection = document.querySelector(".new-ul-collection");


let counter = 1;
navMenu.addEventListener("click", ()=>{
    counter++;
    if(counter%2 == 0){
        thirdSection.style.height = "370px";
        thirdSectionContent.style.height = "370px";
        newUl.style.display = "flex";
    } else {
        thirdSection.style.height = "110px";
        thirdSectionContent.style.height = "110px";
        newUl.style.display = "none";
    }
})
let counter2 = 1;
newCollection.addEventListener("click", ()=>{
    counter2++
    if (counter2%2 == 0){
        newUlCollection.style.display = 'block'
    } else {
        newUlCollection.style.display = 'none'
    }
    console.log(counter)
})


const logoSrc = document.querySelector(".logoSrc");

class GetLogoSrc{
    logoSrc;
    constructor(){
        this.logoSrc = firebase.firestore();
    }

    async getLogoData (){
        try{
            const logoData = [];
            const dataResult = await this.logoSrc.collection("logo").get();
            dataResult.forEach(el=>{
                const data = el.data();
                logoData.push(data);
            })
            return logoData;
        }catch(error){
            console.log(error);
        }
    }
};

const getLogoDataSrc = new GetLogoSrc;
const logosrc = getLogoDataSrc.getLogoData();
logosrc.then(data=>{
    for (const i of data){
        const {logo_image} = i;
        logoSrc.src = `${logo_image}`;
    }
})