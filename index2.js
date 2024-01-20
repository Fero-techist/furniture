// function navigateTo(page) {
//     if (page === "home") {
//         window.location.href = "index.html";
//     } else if (page === "brand") {
//         window.location.href = "index2.html";
//     }

//     else if (page === "store") {
//         window.location.href = "index3.html";
//     }
// }


// const product3 = [

//     {
//         id : "i",
//         name : "Velvet Covered",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509269/Womens_Superdry_Essential_Ribbed_Scarf_-_Black_nl2hme.jpg",
//         price : "$60",



//     },

//     {

//         id : "ii",
//         name : "Candle in Glass Holder",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509269/Frosted_Candle_-_Select_your_scent_ytpfu8.jpg",
//         price : "$78",

//     },

//     {
//         id : "iii",
//         name : "Metal Photo Frame",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509273/Vintage_Brass_Metal_Picture_Frame_Metal_Picture_Frame_Oval_-_Etsy_oyayqu.jpg",
//         price : "$90"

//     },

//     {

//         id : "iv",
//         name : "Round floor mat",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509272/Photo_Gallery_-_3D_Flower_Printed_Round_Fleece_Floor_Mat_co3gcd.jpg",
//         price : "$76",
//     },

//     {
//         id  : "v",
//         name : "Class light holder",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509271/Candle_Holders__Modern_Candle_Holders_Candlesticks___Crate_Barrel_d3k0lv.jpg",
//         price: "$398",
//     },
//     {
//         id : "vi",
//         name : "Flannel Duvet Cover Set",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509270/Flannel_Velvet_Duvet_Cover_-_Blackbrdstore_oqb4si.jpg",
//         price :"$900",
//     },

//     {
//         id : "vii",
//         name :  "Fitted Cotton Sheet",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509270/Egyptian_Cotton_Glamorous_Split_Sheet_Set_5_Pcs_1000_Tc_Stripe_Pattern_King_Size_f25ir3.jpg",
//         price : "$879"
//     },

//     {
//         id : "viii",
//         name : "Small Candle in a Small Jar",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509270/Glass_Lamp_Tea_Light_Holder_-_Set_of_2_dhk2qe.jpg",
//         price : "$78",
//     },


//     {

//         id : "ix",
//         name : "Checked Duvet Cover Set",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509270/Gaveno_Cavailia_Waverly_Check_Duvet_Cover_Set_-_Red_xfv0hb.jpg",
//         price : "$78",

//     },

//     {
//         id : "x",
//         name : "Washed Linen Pillowcase",
//         image : "https://res.cloudinary.com/duhliidee/image/upload/v1702509271/Rustic_Pinstripe_heavyweight_natural_linen_pillow_case__Rustic_stonewashed_linen_bedding_pkpq6o.jpg",
//         price : "$78",
//     },

//     {
//         id : "xi",
//         name : "Ribbed Wool-blend Throw",
//         image: "https://res.cloudinary.com/duhliidee/image/upload/v1702510545/Vista_Stripe_Alpaca_Wool-Blend_Blanket_lgpbqz.jpg",
//         price :"$908",
//     },


//     {
//         id : "xii",
//         name : "Mini Porcelain Dish",
//         image: "https://res.cloudinary.com/duhliidee/image/upload/v1702510711/Marble_Tray_curated_on_LTK_vvu13v.jpg",
//         price :"$908",
//     },


// ]

// const BrandItem = product3.map((product) => `
//     <div class= "h-[auto] w-[100%] lg:px-14 md:px-12 px-8 ">
//     <img src= '${product.image}' alt = '' class='h-[300px] w-full rounded-xl'>
//     <div class= "font-roboto font-bold text-[18px] py-3">${product.name}</div>
//     <div class = "font-roboto font-bold text-[16px]">${product.price}</div>
    
//     </div>`)

// const brands = document.getElementById('brandimage')
// brands.innerHTML = BrandItem.join("")




