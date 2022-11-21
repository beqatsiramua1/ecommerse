// "use strict";

// class BlogImage{
//     constructor(image_link){
//         this.image_link = image_link;
//     };
// };

// class AddBlogImage{
//     blogimage;
//     constructor(){
//         this.blogimage = firebase.firestore();
//     };

//     async addBlogImageData(data){
//         const dataUrl = JSON.stringify(data);
//         const dataUrlAdd = await this.blogimage.collection("blogimage").add(JSON.parse(dataUrl));
//     };
// };

// const blogImage = new AddBlogImage();
// const blogImageData = [
//     new BlogImage("https://preview.colorlib.com/theme/fashi/img/xlatest-1.jpg.pagespeed.ic.NWH-yJ0uMS.webp"),
//     new BlogImage("https://preview.colorlib.com/theme/fashi/img/xlatest-2.jpg.pagespeed.ic.BHI3A1KcBK.webp"),
//     new BlogImage("https://preview.colorlib.com/theme/fashi/img/xlatest-3.jpg.pagespeed.ic.oSrw_eGSen.webp"),
// ];

// for (const i of blogImageData){
//     blogImage.addBlogImageData(i);
// }