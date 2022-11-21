// "use strict";

// class DownImages{
//     constructor(image_link){
//         this.image_link = image_link;   
//     };
// };

// class AddDownImage{
//     image;
//     constructor(){
//         this.image = firebase.firestore();
//     }

//     async addData(data){
//         const dataUrl = JSON.stringify(data);
//         const addDataUrl = await this.image.collection("downimages").add(JSON.parse(dataUrl));
//     };
// };

// const addDataVar = new AddDownImage();
// const downImageArr = [
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-1.jpg.webp"),
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-2.jpg"),
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-3.jpg.webp"),
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-4.jpg.webp"),
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-5.jpg.webp"),
//     new DownImages("https://preview.colorlib.com/theme/fashi/img/insta-6.jpg.webp"),
// ]

// for (const i of downImageArr){
//     addDataVar.addData(i);
// }