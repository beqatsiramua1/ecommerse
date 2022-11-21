/*


class Clothes{
    constructor(category, image_link, product_name, product_descr, product_price, gender, type){
        this.category = category;
        this.image_link = image_link;
        this.product_name = product_name;
        this.product_descr = product_descr;
        this.product_price = product_price;
        this.gender = gender;
        this.type = type;
    };
};

class AddAllClothes{
    clothes;
    constructor(){
        this.clothes = firebase.firestore();   
    };

    async addClothes(cloth){
        try{
            const newClotheData = JSON.stringify(cloth);
            const addedNeCloth = await this.clothes.collection("clothes").add(JSON.parse(newClotheData));
        }catch(error){
            console.log(error)
        }
    }
};


const clothesData = [
    // WOMEN
    // Activewear
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/541663a4-5e79-4c2e-abd1-b03d349eeadb.jpeg?h=365&w=240&dpr=2", "Zella", "Studio Lite High Waist Print 7/8 Leggings", 26.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e52b3d19-7611-4b25-9342-f46ce7a75975.jpeg?h=365&w=240&dpr=2", "Vuori", "Performace Joggers", 94.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ee29c0a1-326e-47f1-ba35-40bc0bfad621.jpeg?h=365&w=240&dpr=2", "Zella", "Live in Pocket Joggers", 65.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/dbda036d-648f-40e8-983f-549ae4cb5a82.jpeg?h=365&w=240&dpr=2", "Alo", "Gather Long Sleeve Rib Crop Top", 62.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4f887697-4981-4379-ac01-7434dc01afd4.jpeg?h=365&w=240&dpr=2", "Zella", "Studio Lite Crop Leggings", 22.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/532f599c-3846-476d-a41f-7863625b22fa.jpeg?h=365&w=240&dpr=2", "Zella", "Live In High Waist Leggings", 59.99, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/dedbf53e-d4b9-4ccc-b07f-2d06a502ecf5.jpeg?h=365&w=240&dpr=2", "Zella", "Cara Pocket Joggers", 29.50, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6556bbf2-b69b-404e-93e2-0b9241b31dd6.jpeg?h=365&w=240&dpr=2", "Alo", "Airlift High Waist Leggings", 119.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/896f2309-0150-4fca-b4fe-163347f2aba2.jpeg?h=365&w=240&dpr=2", "Zella", "Relaxed Long Sleeve T-shirt", 45.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e6dbf543-f8b2-4976-a16e-308285f889f4.jpeg?h=365&w=240&dpr=2", "Zella", "Recycled Live In Pocket Leggings", 24.99, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/33e73374-78af-477a-a427-25daa1262438.jpeg?h=365&w=240&dpr=2", "Nike", "Indy Mesh Inset Sports Bra", 15.75, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?h=365&w=240&dpr=2", "Zella", "Live In High Waist Pocket 7/8 Leggings", 59.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/08e1d2b9-3a73-48f8-8da4-a954dc14f994.jpeg?h=365&w=240&dpr=2", "Zella", "Live In High Waist Pocket Flare Pants", 69.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5aed9bee-ea13-41fe-a4b4-c817262819ea.jpeg?h=365&w=240&dpr=2", "Glamorise", "No-Bounce Camisole Sports Bra", 44.00, "women", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9c1bfdc2-3c89-45b2-97ef-2d05fe661d5d.jpeg?h=365&w=240&dpr=2", "Zella", "Restore Soft Pocket Leggings", 26.00, "women", "activewear"),



    // Suits
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ae346cfa-051d-4c9f-858d-9ce4668b245e.jpeg?h=365&w=240&dpr=2", "Open Edit", "Relaxed Fit Blazer", 79.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/c385105d-e991-47f0-adf5-49cc99a0d47b.jpeg?h=365&w=240&dpr=2", "Avec Les Fillers", "Velvet Collar Double Breasted Wool Blend Blazer", 169.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6dbe2a6a-f928-458f-84b7-5cacf4e56f8e.jpeg?h=365&w=240&dpr=2", "https://n.nordstrommedia.com/id/sr3/6dbe2a6a-f928-458f-84b7-5cacf4e56f8e.jpeg?h=365&w=240&dpr=2", "Vince Camuto", "Nina Classic Notched Collar Blazer", 129.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3a3da7f2-8609-4b69-8f01-caea4aff5dfa.jpeg?h=365&w=240&dpr=2", "Vince Camuto", "Nina Notched Collar Blazer", 129.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ee88c0e5-8835-4599-815d-5a3dd0f600e7.jpeg?h=365&w=240&dpr=2", "Open Edit", "Sequin Blazer", 98.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bbfdcb61-0285-4925-90ec-45025208513f.jpeg?h=365&w=240&dpr=2", "Eliza J", "Velvet Blazer", 118.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f50655fc-fcf9-4c48-a781-cef26fc5750d.jpeg?h=365&w=240&dpr=2", "Steve Madden","Ivy Faux Leather Blazer", 99.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/c375e00e-c6db-4931-a47b-26cce621af33.jpeg?h=365&w=240&dpr=2", "Avec Les Filles", "Oversized Retro Tweed Blazer", 159.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4c894cb3-df02-43a7-9840-037bb8da15e8.jpeg?h=365&w=240&dpr=2", "BB Dakota by Steve Madden", "Singled Out Faux Leather Blazer", 99.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/80a414d3-67bb-4570-80d1-f427f4d5e320.jpeg?h=365&w=240&dpr=2", "Halogen", "Open Front Long Blazer", 35.97, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b09ab12b-00aa-4205-8c61-d30725192ed7.jpeg?h=365&w=240&dpr=2", "1.STATE", "One-Button Stretch Crepe Blazer", 129.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/50c80159-49d4-41cd-bbb0-66f764b7582c.jpeg?h=365&w=240&dpr=2", "Treasure & Bond", "Plaid Two Button Blazer", 99.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3a1a5680-f7f7-4257-9d2e-93ec3bf622b0.jpeg?h=365&w=240&dpr=2", "Rag & Bone", "ICONS Slade Slim Fit Blazer", 575.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b7649fbc-69d8-422b-8d8a-b70edf04b246.jpeg?h=365&w=240&dpr=2", "Topshopt", "Women's Knit Blazer", 84.00, "women", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/cee30ea8-7029-4da9-8848-6d6ea0710fa8.jpeg?h=365&w=240&dpr=2", "BLANKNYC", "Oversize One-Button Faux Leather Blazer", 98.00, "women", "suit"),



    // dress
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/284f1e75-2f9c-4707-ab4b-7a15143846cf.jpeg?h=365&w=240&dpr=2", "SKIMS", "Lounge Ribbed Long Sleeve Maxi Dress (Regular & Plus Size)", 88.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e68bf888-e9c3-4d1e-b29b-eaab006ceb78.jpeg?h=365&w=240&dpr=2", "Eliza J", "Long Sleeve Tuxedo Gown", 168.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a2a45393-3c6d-432f-af63-8e1459ee8532.jpeg?h=365&w=240&dpr=2", "SKIMS", "Ribbed Long Slipdress (Regular & Plus Size)", 78.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/cbfc0a23-dcd5-4df5-8559-39320ad722d0.jpeg?h=365&w=240&dpr=2", "Karen Kane", "Draped Long Sleeve Sweater Dress", 108.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0a63ee11-5766-41d6-85ed-f70d8eadc086.jpeg?h=365&w=240&dpr=2", "Caslon", "Sleeveless Maxi Dress", 39.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8565813b-8196-4fda-86af-1075136bf2d3.jpeg?h=365&w=240&dpr=2", "Treasure & Bond", "Oversize Long Sleeve Sweater Dress", 69.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/692ccb85-dbf7-4ab4-b12d-d431f203dfd4.jpeg?h=365&w=240&dpr=2", "Steve Madden", "Rosie Mock Neck Long Sleeve Sweater Dress", 39.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2ff59b4a-0ef0-4088-b7ad-0d646d113c44.jpeg?h=365&w=240&dpr=2", "Dress The Population", "Sloane Sleeveless Sheath Dress", 128.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/891916ec-32a8-4883-8ef5-d4cf8730eb59.jpeg?h=365&w=240&dpr=2", "Eliza J", "Floral Metallic Detail Long Sleeve Body-Con Chiffon Dress", 168.00, "women", "dress"),
    new Clothes("https://n.nordstrommedia.com/id/sr3/64117156-6679-478f-8637-dfcd5669e929.jpeg?h=365&w=240&dpr=2", "Topshop", "Boxy Ribbed Funnel Neck Long Sleeve Dress (Petite)", 74.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5c51a7e6-0d24-4df7-9d4b-9a8cd9f4b0c1.jpeg?h=365&w=240&dpr=2", "CeCe", "Bow Neck Short Sleeve Dress", 129.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/26d80e0c-0540-4c51-b803-4bb4101bdf74.jpeg?h=365&w=240&dpr=2", "Charles Henry", "Square Neck Tie Back Puff Long Sleeve Sweater Dress", 89.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/dfb8d9d9-d53b-4988-bd3b-792a69c5545d.jpeg?h=365&w=240&dpr=2", "Eliza J", "Ruffle Front Gown", 188.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8de26c26-cfa1-44d9-8066-5db3ecb3ec78.jpeg?h=365&w=240&dpr=2", "Eliza J", "Fit & Flare Sweater Dress", 138.00, "women", "dress"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/62dcc348-bb26-415a-a68c-90068ccf702a.jpeg?h=365&w=240&dpr=2", "Steve Madden", "Helena Long Sleeve Sweater Dress", 39.00, "women", "dress"),


    // Jeans
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/51a8e341-56a4-4e85-9729-6cef2cdfe4e7.jpeg?h=365&w=240&dpr=2", "Wit & Wisdom", "Ab-Solution High Waist Itty Bitty Bootcut Jeans (Regular & Petite) (Nordstrom Exclusive)", 88.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e053c863-1976-44d2-a91b-26638bd7d9b2.jpeg?h=365&w=240&dpr=2", "'Ab'Solution Itty Bitty Bootcut Jeans (Regular & Petite) (Nordstrom Exclusive)", 88.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0bf3e220-3276-4d47-88b7-4cc2da46ddb0.jpeg?h=365&w=240&dpr=2", "NYDJ", "Marilyn Straight Leg Jeans", 99.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bf6ff19e-784f-4757-b0c6-3c8a94bb08fb.jpeg?h=365&w=240&dpr=2", "NYDJ", "Marilyn Straight Leg Jeans", 74.40, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/48bc77e0-b3c5-41c0-a728-d7b7a53b6735.jpeg?h=365&w=240&dpr=2", "AG", "Ex-Boyfriend Slouchy Slim Jeans (5 Years Network)", 150.75, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ed01e711-8b32-4a1b-bf97-1bd4cf7386d0.jpeg?h=365&w=240&dpr=2", "Wit & Wisdom", "Ab-solution High Waist Ankle Skinny Jeans (Regular & Petite) (Nordstrom Exclusive)", 74.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bf8ae87c-4dae-4990-bb3b-bba5bcd15a72.jpeg?h=365&w=240&dpr=2", "NYDJ", "Marilyn Straight Leg Jeans (Regular & Petite)", 99.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f4bd6126-c75f-4df6-9341-9cc40238aaaf.jpeg?h=365&w=240&dpr=2", "NYDJ", "Sheri Slim Jeans", 36.34, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6535c596-3d41-4531-a73e-5d61dff37d79.jpeg?h=365&w=240&dpr=2", "Wit & Wisdom", "'Ab'Solution Skinny Ankle Jeans (Regular & Petite) (Nordstrom Exclusive)", 78.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f4bd6126-c75f-4df6-9341-9cc40238aaaf.jpeg?h=365&w=240&dpr=2", "NYDJ", "Sheru Slim Jeans", 36.34, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/fa2954cd-06f9-40e4-a474-e5bb0766ab5d.jpeg?h=365&w=240&dpr=2", "Madewell", "The Perfect Vintage Jean (Lunar Wash)", 128.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/54c450f4-254d-4946-9200-c1004e286433.jpeg?h=365&w=240&dpr=2", "Good American", "Good Straight Coated Jeans (Regular & Plus Size)", 111.00, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/749ce6b3-72d2-4a5b-9eca-25435a6b546c.jpeg?h=365&w=240&dpr=2", "KUT frrom the Kloth", "Diana Fab Ab High Waist Skinny Jeans (Buoyant) (Regular & Petite)", 59.49, "women", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e4d48fb2-0dcb-4071-9243-b175dec76fae.jpeg?h=365&w=240&dpr=2", "NYDJ", "Barbara High Waist Stretch Bootcut Jeans", 69.40, "women", "jeans"),


    
    // Shoes
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/1857b734-3c60-450e-a29e-370982e41179.jpeg?h=365&w=240&dpr=2", "UGG", "UGG Classic Mini II Genuine Shearling Lined Boot (Women)", 150.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9c43d353-53d2-423c-9336-cb3bff087db5.jpeg?h=365&w=240&dpr=2", "UGG", "Tasman Slipper (Women)", 100.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2bd75271-056d-4eb2-95d1-6c269eb8e2bf.jpeg?h=365&w=240&dpr=2", "UGG", "Ultra Mini Classic Boot (Women)", 140.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/42db14d5-c7c2-475f-b187-e9a4af20fb4c.jpeg?h=365&w=240&dpr=2", "SOREL", "Lennox Waterproof Lace-Up Boot", 190.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4c0a8885-8137-40f2-b810-1b6fc529f1ae.jpeg?h=365&w=240&dpr=2", "Sam Edelman", "Laguna Waterproof Lug Sole Chelsea Boot (Women)", 118.99, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f07dbade-1621-4bd0-8b56-5a344aa67b86.jpeg?h=365&w=240&dpr=2", "UGG", "Fluff Yeah Faux Fur Slingback Sandal (Women)", 100.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/13c5bb3c-7993-4a23-8fcc-6ee754a2e754.jpeg?h=365&w=240&dpr=2", "HOKA", "Clifton 8 Running Shoe (Women)", 140.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/717f062e-2138-4be5-a808-251800e90b39.jpeg?h=365&w=240&dpr=2", "Marc Fisher LTD", "Latika Platform Loafer", 175.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a151c7e8-ea7d-49e2-a65f-f6f90eacc6df.jpeg?h=365&w=240&dpr=2", "UGG", "Disquette Slipper (Women)", 100.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7778324d-a695-4559-a85e-689b37e8b04b.jpeg?h=365&w=240&dpr=2", "Blondo", "Dahlia Waterproof Bootie (Women)", 99.99, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2f380a44-e4b0-47a3-861f-68a338a5511e.jpeg?h=365&w=240&dpr=2", "Converse", "Chuck Taylor® All Star® Lift High Top Platform Sneaker (Women)", 75.00, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ec1bdf4b-9687-46ea-8ab3-7006ba97a1fe.jpeg?h=365&w=240&dpr=2", "On", "Cloud 5 Running Shoe (Women)", 139.99, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5f123ba8-07a9-4e62-b8eb-177fa0e8a1f1.jpeg?h=365&w=240&dpr=2", "On", "Cloud X Training Shoe (Women)", 139.99, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8eb770ee-6548-4bc6-bd43-da2ffde3c3a4.jpeg?h=365&w=240&dpr=2", "UGG", "Scuffita Genuine Shearling Slide Slipper (Women)", 68.99, "women", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/81fc6d7e-7966-46cf-b06c-52d0c889e771.jpeg?h=365&w=240&dpr=2", "Sam Edelman", "Hazel Pointed Toe Pump (Women)", 160.00, "women", "shoes"),



    // Jewelry
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f114a1fe-ae05-4a6f-b4e9-c83983fa5392.jpeg?h=365&w=240&dpr=2", "Panacea", "Large Multiband Wrist Cuff", 32.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/d52c6953-970b-4d74-9eb3-9c3858fce2c8.jpeg?h=365&w=240&dpr=2", "BaubleBar", "Pisa Pavé Initial Bracelet", 28.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/61145869-2762-46e5-be09-85940cd6fbd1.jpeg?h=365&w=240&dpr=2", "Kendra Scott", "Elaina Birthstone Bracelet", 65.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/daf15efe-ad61-468f-b785-8b400d3e993e.jpeg?h=365&w=240&dpr=2", "Nordstrom", "4ct tw Cubic Zirconia Earrings", 50.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/31039582-70e4-438f-a1e0-a06a5707bb7d.jpeg?h=365&w=240&dpr=2", "Nordstrom", "2ct tw Cubic Zirconia Earrings", 46.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/29e30707-f339-4293-9d1b-c800096d2233.jpeg?h=365&w=240&dpr=2", "Nadri", "Leah Statement Hoop Earrings", 100.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3fccb8b9-531c-45e6-9a6b-9bbfa5e8f24d.jpeg?h=365&w=240&dpr=2", "Bracha", "Initial Pednadn Necklace", 50.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8a653139-8912-4af4-b82c-464dbdfbbea8.jpeg?h=365&w=240&dpr=2", "Madewell", "Story Set of 3 Layered Necklaces", 19.97, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9e89f0b4-e153-495a-9cda-282a58fa6255.jpeg?h=365&w=240&dpr=2", "Tory Burch", "Miller Pendant Necklace (Nordstrom Exclusive)", 80.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a14610d5-4e75-404d-9875-6554a8ff8e9f.jpeg?h=365&w=240&dpr=2", "Nashelle", "Complete Heart Ring", 39.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/51e72e7a-dade-4d61-8f65-d3280a45852b.jpeg?h=365&w=240&dpr=2", "David Yurman", "X Crossover Ring", 350.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b397e21f-15c2-4ac7-919f-de64bed4f5b9.jpeg?h=365&w=240&dpr=2", "Tory Burch", "Miller Stud Ring", 98.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ef6cbb25-7e20-45a3-970b-a711f3ae5742.jpeg?h=365&w=240&dpr=2", "Tory Burch", "The Kira Leather Band for Apple® Watch, 38mm/40mm", 115.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a186c0a3-00cf-4e1b-b262-d8d74ec6a409.jpeg?h=365&w=240&dpr=2", "Tory Burch", "Miller Leather Apple Watch® Watchband, 38mm/40mm (Nordstrom Exclusive)", 115.00, "women", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e82dca88-7f7e-45be-a45d-ea6c0c584f47.jpeg?h=365&w=240&dpr=2", "Longines", "DolceVita Bracelet Watch, 23mm x 37mm", 1350.00, "women", "jewelry"),







    // MEN

    // Activewear
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/d7e22c74-3cf7-4f36-9482-ab2ffe5349f4.jpeg?h=365&w=240&dpr=2", "Zella", "Pyrite Slim Fit Pocket Joggers", 59.99, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2", "Zella", "Seamless Performance T-Shirt", 39.99, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0e7a86ca-93f3-4d95-a0bc-bc2561f942c0.jpeg?h=365&w=240&dpr=2", "The North Face", "Aconagua 2 Down Vest", 139.99, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5a13388e-7669-4353-82da-54695355d1e4.jpeg?h=365&w=240&dpr=2", "Nike", "Men's 2-Pack Dri-FIT Stretch Cotton Crewneck T-Shirts", 42.50, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4414f97d-cadf-41a4-ba5b-9aa8e5a0a580.jpeg?h=365&w=240&dpr=2", "Vuori", "Sunday Performance Jogger Sweatpants", 98.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/96d4f35b-ceb1-4788-a87f-97b7fa26ddcb.jpeg?h=365&w=240&dpr=2", "Adidas Originals", "Essentials Sweatpants", 55.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3957ed49-01ef-4c25-8d11-703cfc582628.jpeg?h=365&w=240&dpr=2", "Nike", "Sportswear Club Hoodie", 55.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/543a7a80-69a5-4f84-91cc-1815069c8dee.jpeg?h=365&w=240&dpr=2", "Adidas Original", "Men's SST Tricot Track Jacket", 80.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7ec58b1d-4126-40eb-adc7-2b50f7b18325.jpeg?h=365&w=240&dpr=2", "Zella", "Men's Seamless Quarter Zip Pullover", 29.40, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7b5faf0c-8f8e-496e-bdb3-ec16ad0c592b.jpeg?h=365&w=240&dpr=2", "Fear Owned/Founder", "Essentials Cotton Blend Sweatpants", 90.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3a40b600-4171-40cd-8069-4beacf0d782c.jpeg?h=365&w=240&dpr=2", "Zella", "Pyrite Lite Pullover Hoodie", 19.60, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f61cc0d3-ab77-472b-92f6-ad45bd1af556.jpeg?h=365&w=240&dpr=2", "Reiss", "Jasper Zip Polo", 160.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/79ad1216-7abc-4719-8c75-3e31f44364bf.jpeg?h=365&w=240&dpr=2", "The North Face", "Men's Nuptse® 1996 Packable Quilted Down Jacket", 320.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2827fae8-dc81-4786-bb2a-c81e864c03a7.jpeg?h=365&w=240&dpr=2", "The North Face", "Cuchillo Water Resistant Full Zip Hoodie", 179.00, "men", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5070e1aa-34f1-465c-9c67-ac82b015e00c.jpeg?h=365&w=240&dpr=2", "Nike", "Sportswear Tech Fleece Zip Hoodie", 155.00, "men", "activewear"),



    // Suits
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7bc017da-6f91-46e1-8737-91660e23afd7.jpeg?h=365&w=240&dpr=2", "Open Edit", "Solid Extra Trim Wool Blend Sportcoat", 129.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4823ee81-876b-4928-adc0-ca59fe5bda59.jpeg?h=365&w=240&dpr=2", "Peter Miller", "Flynn Classic Fit Wool Suit", 845.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/1155e5e4-7dd2-4d62-ac00-79da1507d9e8.jpeg?h=365&w=240&dpr=2", "OppoSuits", "'Black Knight' Trim Fit Two-Piece Suit with Tie", 99.99, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3820a14b-3618-4cb3-8272-01ab573538e4.jpeg?h=365&w=240&dpr=2", "BOSS", "Genius Trim Fit Solid Wool Suit", 845.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3c724829-e6da-41de-8c5b-46ca18b8154e.jpeg?h=365&w=240&dpr=2", "Peter Miller", "Classic Fit Wool Suit", 845.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/15756ff7-e487-4012-91a4-8ae6b55fc137.jpeg?h=365&w=240&dpr=2", "Ted Baker London", "Jones Trim Fit Solid Wool Suit", 848.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e386af60-52c5-44ce-a952-1875f61fc685.jpeg?h=365&w=240&dpr=2", "OppoSuits", "'Navy Royale' Trim Fit Two-Piece Suit with Tie", 99.99, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/43aaba27-29e5-45d1-a9c7-a9540608de22.jpeg?h=365&w=240&dpr=2", "OppoSuits", "Blazing Burgundy Two-Piece Suit with Tie", 99.99, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b556fb09-66a4-4293-bf6f-ea05af9a2a0a.jpeg?h=365&w=240&dpr=2", "Topman", "Skinny Fit Textured Suit Jacket", 121.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3c724829-e6da-41de-8c5b-46ca18b8154e.jpeg?h=365&w=240&dpr=2", "Peter Miller", "Classic Fit Wool Suit", 845.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2cbff122-dff6-4fc7-89c2-2ef2c5d20c0f.jpeg?h=365&w=240&dpr=2", "SOFT CLOTH", "Studio Soft City Twill Sport Coat", 298.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9ec8ed35-3bc6-416a-bfe8-de79705185ea.jpeg?h=365&w=240&dpr=2", "Nordstrom", "Tech-Smart Trim Fit Stretch Wool Sport Coat (Regular, Big & Tall)", 299.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5886520f-b1a0-4044-8cb6-d3d9ab751cd5.jpeg?h=365&w=240&dpr=2", "Nordstrom", "Trim Fit Tech Stretch Travel Sport Coat", 249.00, "men", "suit"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0a6f42ec-77eb-4ae7-8324-72881ec3e918.jpeg?h=365&w=240&dpr=2", "SOFT CLOTH", "Studio Plaid Wool Blend Bouclé Sport Coat", 298.00, "men", "suit"),



    // coat
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0e7a86ca-93f3-4d95-a0bc-bc2561f942c0.jpeg?h=365&w=240&dpr=2", "The North Face", "Aconagua 2 Down Vest", 139.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/603baeb0-804c-4585-8da8-00038d1500cf.jpeg?h=365&w=240&dpr=2", "Topman", "Icon Bomber Jacket", 65.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3aebf820-180c-4271-95d7-f7e82fd02127.jpeg?h=365&w=240&dpr=2", "The North Face", "Stover Jacket", 210.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9dc70551-d2eb-48a4-b2b0-7d86606ee21f.jpeg?h=365&w=240&dpr=2", "Barbour", "Hitchen Quilted Jacket", 300.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/79ad1216-7abc-4719-8c75-3e31f44364bf.jpeg?h=365&w=240&dpr=2", "The North Face", "Men's Nuptse® 1996 Packable Quilted Down Jacket", 320.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bca32a4b-67ae-4247-9c7d-b57732133396.jpeg?h=365&w=240&dpr=2", "Nordstrom" ,"Lightweight Quilted Jacket", 99.50, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2827fae8-dc81-4786-bb2a-c81e864c03a7.jpeg?h=365&w=240&dpr=2", "The North Face", 'Cuchillo Water Resistant Full Zip Hoodie', 179.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7460aad1-f872-45fd-af24-31595c6fa5f8.jpeg?h=365&w=240&dpr=2", "The North Face", "Men's Gordon Lyons Full Zip Jacket", 99.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7aa8c980-4381-4be2-bd39-757488d044a6.jpeg?h=365&w=240&dpr=2", "'Powell' Regular Fit Quilted Jacket", 300.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/965f27f5-21bf-42ec-83f1-62bc4a5c3f2b.jpeg?h=365&w=240&dpr=2", "The North Face", "Aconcagua 2 Water Repellent 550-Fill Down Jacket", 179.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a3acf020-2f68-4d47-b69f-697828ae62c9.jpeg?h=365&w=240&dpr=2", "The North Face", "Thermoball™ Eco Packable Jacket", 199.00, "men", "coat"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/54af7908-b90f-4107-b376-f1fa75d3a906.jpeg?h=365&w=240&dpr=2", "Peter Miller", "Suffolk Quilted Car Coat", 248.00, "men", "coat"),


    // Jeans
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/94967737-7fbb-4ced-b166-def91aa898ce.jpeg?h=365&w=240&dpr=2", "PURPLE BRAND", "PURPLE Blowout Slim Jeans", 188.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a99d75be-425d-43de-833d-62aa6c264340.jpeg?h=365&w=240&dpr=2", "PAIGE", "Transcend Federal Men's Slim Straight Leg Jeans (Doncaster)", 199.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/c23b9489-d4d7-44b1-9e92-c33296224a91.jpeg?h=365&w=240&dpr=2", "Lucky Brand", "223 Straight Leg Jeans", 99.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3a23b94a-3b75-4b8b-8968-21026c3f7c78.jpeg?h=365&w=240&dpr=2", "ZEGNA", "Stretch Denim City Fit Jeans", 690.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/71c8ecd3-c0b7-442c-8bf1-59ca670ac0e2.jpeg?h=365&w=240&dpr=2", "Lucky Brand", "410 Athletic Slim Fit CoolMax® Jeans (Hula)", 129.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b76b50f1-8b54-494b-b79c-4002c8483efc.jpeg?h=365&w=240&dpr=2", "Devil-Dog Dungarees", "Athletic Fit Jeans (Buckhorn) (Regular & Tall)", 79.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f305d54f-b29d-44cd-b946-8667a0964ab6.jpeg?h=365&w=240&dpr=2", "PAIGE", "Federal Slim Straight Leg Jeans (Cellar)", 199.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bf62c12f-2694-476f-b2a2-f8b4a290ae40.jpeg?h=365&w=240&dpr=2", "PURPLE BRAND", "PURPLE Ripped Slim Jeans (Light Indigo Blowout)", 188.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8d111acd-7012-46e8-abc3-f444f77b3da6.jpeg?h=365&w=240&dpr=2", "AG", "Everett Slim Straight Leg Jeans (Arroyo Seco)", 225.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/beab6979-c309-4bd5-963e-071c830d84c8.jpeg?h=365&w=240&dpr=2", "PAIGE", "Vintage Federal Slim Straight Leg Jeans (Peterson)", 209.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/3aa1d79c-f65e-48e3-abf1-ce19d634d788.jpeg?h=365&w=240&dpr=2", "AG", "Tellis Slim Fit Jeans", 225.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/87512320-11e5-4847-830a-c39097a40d58.jpeg?h=365&w=240&dpr=2", "Mavi Jeans", "Matt Relaxed Fit Jeans (Deep Stanford Comfort)", 98.00, "men", "jenas"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9b92346d-c3fb-42e5-b7d9-64920c6fedbb.jpeg?h=365&w=240&dpr=2", "PURPLE BRAND", "PURPLE Skinny Jeans (Black Resin)", 188.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/d90edbf9-a66e-4c5f-a494-e905b7689901.jpeg?h=365&w=240&dpr=2", "AG", "Graduate Straight Leg Jeans (Yesterday) (Regular & Big) (Nordstrom Exclusive)", 200.00, "men", "jeans"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/88ec024d-aa92-4828-b8ac-0010b3875252.jpeg?h=365&w=240&dpr=2", "BP", "Men's Slim Fit Patch Distressed Jeans (Indigo Patchwork)", 59.00, "men", "jeans"),



    // Shoes
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a1aa2fc0-44b0-48e9-8e39-5cd8f0aef5fb.jpeg?h=365&w=240&dpr=2", "SOFT CLOTH", "Sunset Pro Sneaker", 198.00, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8222eb9e-2d38-46ff-b6c7-1b8fa53b1eb5.jpeg?h=365&w=240&dpr=2", "UGG", "Hyde Slide Slipper (Men)", 100.00, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/e1f5bfee-ee4f-439a-a7ff-5270d7825de0.jpeg?h=365&w=240&dpr=2", "Nike", "Air Force 1 '07 Sneaker (Men)", 110.00, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/27936b73-6ef7-460f-962e-7f3883a35338.jpeg?h=365&w=240&dpr=2", "Vans", "U Era Low-Top Sneaker (Unisex)", 59.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/d07e42ea-1e66-4f41-b64c-81869eba44f3.jpeg?h=365&w=240&dpr=2", "Vans", "Old School Sneakers", 74.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/03251e23-b324-4c5f-b59d-dd8bc5888a07.jpeg?h=365&w=240&dpr=2", "On", "Cloud 5 Waterproof Running Shoe (Men)", 169.99, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6a2bdfa8-b9c1-4350-a531-1eeb5ce25c4b.jpeg?h=365&w=240&dpr=2", "On", "Cloud 5 Running Shoe (Men)", 139.99, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/18948604-5de1-45cb-bcaf-447d2223fdb3.jpeg?h=365&w=240&dpr=2", "UGG", "Ascot Slipper (Men)", 110.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/a092d06f-d2ed-477f-b919-51655c907df5.jpeg?h=365&w=240&dpr=2", "Birkenstock", "Boston Soft Clog (Men)", 155.00, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9480ddaa-26ad-4f69-b7b3-bcaadbaf9f30.jpeg?h=365&w=240&dpr=2", "On", "Cloudswift Running Shoe (Men)", 149.99, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/dc76efc5-606e-498c-8110-aec83c3f8517.jpeg?h=365&w=240&dpr=2", "BP.", "Water Resistant Chelsea Boot (Men)", 99.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6897498f-a70b-4bb2-9603-49eb68a05f72.jpeg?h=365&w=240&dpr=2", "Vans", "Classic Sneaker (Unisex)", 64.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2772a097-d638-45a1-a6da-ca6c883030a4.jpeg?h=365&w=240&dpr=2", "Florsheim", "Heist Sneaker", 120.00, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6d31ff85-e6e6-49c4-b7be-cdcff99bfc20.jpeg?h=365&w=240&dpr=2", "Zella", "Electrify Sneaker (Men)", 74.95, "men", "shoes"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8da424d5-b56c-4cbd-99de-f0ee342b6146.jpeg?h=365&w=240&dpr=2", "Nike", "Blazer Mid '77 Premium Sneaker (Men)", 105.00, "men", "shoes"),




    // Jewelry
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/40662877-7e80-4d5e-b120-d175b280d06a.jpeg?h=365&w=240&dpr=2", "The Posh Tech", "Claire Tortoise Apple Watch® SE & Series 7/6/5/4/3/2/1 Bracelet Watchband", 40.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b3017b5c-b394-4dca-9a0d-5ef4349c63ed.jpeg?h=365&w=240&dpr=2", "The Posh Tech", "Beaded Apple Watch® SE & Series 7/6/5/4/3/2/1 Bracelet Watchband", 45.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/26fc404f-5917-4d94-a195-cea60dd19cb8.jpeg?h=365&w=240&dpr=2", "MYMT", "Chronograph Bracelet Watch, 45mm", 158.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/2030c50b-4719-4ea1-b0a6-dc4b4edb6461.jpeg?h=365&w=240&dpr=2", "Tissot", "Chrono XL Collection Chronograph Leather Strap Watch, 45mm", 425.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/68b60585-eec1-4280-a4e5-cbf6914296b1.jpeg?h=365&w=240&dpr=2", "The Posh Tech", "Leather Apple Watch® SE & Series 7/6/5/4/3/2/1 Watchband", 35.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/f41aabd5-6b91-4139-8670-36fcde814190.jpeg?h=365&w=240&dpr=2", "The Posh Tech", "POSH TECH Rainey Silver/Gold Stainless Steel Band for Apple Watch", 40.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/db64c08b-a528-448e-b684-1da84f0a5fce.jpeg?h=365&w=240&dpr=2", "VERSUS Versace", "Lion Chronograph Bracelet Watch, 45mm", 350.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0b7ec891-e5a7-4433-82ca-96ffc90e9d37.jpeg?h=365&w=240&dpr=2", "Longines", "HydroConquest Automatic Bracelet Watch, 43mm", 1700.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bec66f6f-8457-421f-9a9d-38d295e07a8c.jpeg?h=365&w=240&dpr=2", "Tissot", "T-Classic Gentleman Bracelet Watch, 40mm", 375.00, "men", "jewelry"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7b91458f-bf63-4c63-abc5-0cb234c28013.jpeg?h=365&w=240&dpr=2", "LAGOS", "Smart Caviar Sterling Silver Link Band for Apple Watch®", 1000.00, "men", "jewelry"),









    // Kid
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/7fd3f7ea-1536-47f0-bc0a-b3d71590e31f.jpeg?h=365&w=240&dpr=2", "Nike", "Sportswear Club Fleece Sweatpants (Big Boy)", 40.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/46c1378e-84a0-4838-bb80-f4b43f9db742.jpeg?h=365&w=240&dpr=2", "The North Face", "Kids' Mount Chimbo Water Repellent Reversible Hooded Jacket (Toddler & Little Kid)", 89.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/33223e5b-c01b-4f78-bc1a-f996490b1804.jpeg?h=365&w=240&dpr=2", "The North Face", "Baby Bear Full-Zip Hoodie (Baby)", 59.99, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/6381bce7-4cd4-458c-b362-ecd423619a8c.jpeg?h=365&w=240&dpr=2", "The North Face", "Baby Bear One Piece Snowsuit (Baby)", 79.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/379a35f5-c7f3-4396-90ba-aa91a001bb27.jpeg?h=365&w=240&dpr=2", "The North Face", "Kids' Mount Chimbo Reversible Water Repellent Recycled Polyester Jacket (Little Kid & Big Kid)", 115.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/b75ae4ec-2029-43b2-83e7-c9b5afc4bb38.jpeg?h=365&w=240&dpr=2", "Mini Boden", "Kids' High Pile Fleece Reversible Hooded Vest (Toddler, Little Kid & Big Kid)", 64.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/8243a279-1c64-4e46-ba53-19d54b2e89df.jpeg?h=365&w=240&dpr=2", "L.L.Bean", "High Pile Fleece Bunting (Baby)", 49.95, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/9aedef43-5920-4fe2-b44c-86bca8de7406.jpeg?h=365&w=240&dpr=2", "The North Face", "Kids' Moondoggy Water Repellent Down Jacket (Toddler & Little Boy)", 109.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/4aa182ac-9865-44b9-a7d9-104524abec18.jpeg?h=365&w=240&dpr=2", "The North Face", "Kids' Glacier Full Zip Hoodie (Toddler & Little Kid)", 40.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/bd54c882-9af9-4d62-abeb-66abf06e522e.jpeg?h=365&w=240&dpr=2", "The North Face", "North 600 Fill Power Down Jacket (Baby)", 99.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5a56f69f-e530-44a8-bb34-7273492bf774.jpeg?h=365&w=240&dpr=2", "The North Face", "Kids' Perrito Reversible Water Repellent Jacket (Toddler & Little Kid)", 89.00, "kid", "activewear"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/dc3c1812-ff26-49b7-ade8-cbf68657ce58.jpeg?h=365&w=240&dpr=2", "Jellycat", "Amuseable Snowball Plush Toy", 12.00, "kid", "toy"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/23d33fca-c93f-4133-88d2-1e53849c663e.jpeg?h=365&w=240&dpr=2", "Jellycat", "'Bashful' Puppy", 25.00, "kid", "toy"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/ddea75c9-ab84-4ab3-aefe-79087b6cea88.jpeg?h=365&w=240&dpr=2", "Jellycat", "Little Amuseable Snowflake Plush Toy", 17.50, "kid", "toy"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/0836d4dd-cce4-43ab-8ff7-3e98d5df8f64.jpeg?h=365&w=240&dpr=2", "Skip Hop", "Zoo Crew Memory Game", 10.00, "kid", "toy"),
    new Clothes("clothes", "https://n.nordstrommedia.com/id/sr3/5c91740a-1410-41d9-be65-da8c3d78740a.jpeg?h=365&w=240&dpr=2", "Skip Hop", "Zoo Let's Brunch Play Set", 18.00, "kid", "toy")

];

const clothesBase = new AddAllClothes();
for(const i of clothesData){
    clothesBase.addClothes(i);
}

*/