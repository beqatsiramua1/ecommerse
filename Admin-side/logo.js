/*

class Logo {
    constructor(logo_image){
        this.logo_image = logo_image;
    };
};

class SiteLogo{
    logo;
    constructor(){
        this.logo = firebase.firestore();
    }

    async addLogo(logo){
        const logoImage = JSON.stringify(logo);
        const logoImageData = await this.logo.collection("logo").add(JSON.parse(logoImage));
    };
};

const logoAdd = new SiteLogo();
const logoImageSrc = new Logo("data:image/webp;base64,UklGRiIBAABXRUJQVlA4TBYBAAAvV4AFEI9AkG1Tmale/QoCgSSZ/R0mEwikOIsJJsi2me3sd4QnqI+dXRCQJElyImW2pBoadv7/3BKoVceI/k8AXplJUhCvJJkR3Xky/1cJnn3JhT/LXEjWgU6S3ZiSSBbZQ6OS7NPIJCl3Ce0aafTb7lXa8zErT6rGqDjBfEtww5EumIym4xzXhwh1nRjJG6pMTCns8OrEYshDisoAsJ3o0Nv00gEgqf6QpEShOFORVQZMowNAVe0OQZB6NZqDxdB99yRQn3Fcg1Ecpv0tMMQoAQBDimK76/Nlfi4oqqiNnkzoI5NMrxHFNjGydyQWWYE1keRrdiPagcFweQ3kghob78Hi1O6MHBG8CFsnWQc8YJWssux4DA==");
logoAdd.addLogo(logoImageSrc);


*/