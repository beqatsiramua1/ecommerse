// "use strict";

// class Partners{
//     constructor(image_link){
//         this.image_link = image_link;
//     };
// };

// class AddPartners{
//     partner;
//     constructor(){
//         this.partner = firebase.firestore();
//     };

//     async addPartnerData(data){
//         const partnerData = JSON.stringify(data);
//         const addpartners = await this.partner.collection("partners").add(JSON.parse(partnerData));
//     }; 
// };

// const newPartner = new AddPartners();
// const partnersArr = [
//     new Partners("https://preview.colorlib.com/theme/fashi/img/logo-carousel/xlogo-1.png.pagespeed.ic.hHd3Ak60Md.webp"),
//     new Partners("https://preview.colorlib.com/theme/fashi/img/logo-carousel/xlogo-2.png.pagespeed.ic.5O9ErUCggC.webp"),
//     new Partners("https://preview.colorlib.com/theme/fashi/img/logo-carousel/xlogo-3.png.pagespeed.ic.fi4-kfQW7Q.webp"),
//     new Partners("https://preview.colorlib.com/theme/fashi/img/logo-carousel/xlogo-4.png.pagespeed.ic.74BR0xCCyN.webp"),
//     new Partners("https://preview.colorlib.com/theme/fashi/img/logo-carousel/xlogo-5.png.pagespeed.ic.XZwig1FcCp.webp"),
// ];

// for(const i of partnersArr){
//     newPartner.addPartnerData(i);
// }