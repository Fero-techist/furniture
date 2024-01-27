function navigateTo(page) {
    if (page === "home") {
        window.location.href = "index.html";
    } else if (page === "brand") {
        window.location.href = "index2.html";
    }

    else if (page === "store") {
        window.location.href = "index3.html";
    }
    else if (page === "cart") {
        window.location.href = "index4.html"
    }
}



const product1 = [
    {
        id: 1,
        name: "LINEN BEACH TOWEL",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702507978/Abbas_Towel_-_Bath_Beach_Towel_iekrtz.jpg",
        btn: "Add to Cart",


    },

    {
        id: 2,
        name: "Square Clear Glass Box",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$70",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308231/Modern_Night_Club_Bar_Furniture_Aquarium_Water_Bubble_Wall_Led_Acrylic_Bar_Counter_-_Buy_Bar_Counter_Night_Club_Bar_Furniture_Night_Club_Bar_Product_on_Alibaba_com_k0wgbk.jpg",
        btn: "Add to Cart",


    },

    {
        id: 3,
        name: "4-pack Small Ceramic Plates",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$27",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308231/Mid_Century_Modern_Rectangular_Coffee_Table_Tempered_Glass_Tabletop_2_Solid_Wood_Drawers_MDF_For_Livingroom_45_66_Dark_Wood_xczej7.jpg",
        btn: "Add to Cart",

    },

    {
        id: 4,
        name: "Large Clear Glass Box",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308231/How_Interior_Colors_Can_Be_Used_To_Create_a_Mood_In_Your_Home_evlfqe.jpg",
        btn: "Add to Cart",

    },
    {
        id: 5,
        name: "Round Jute Placemat",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$80",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308231/Strow_Set_of_2_High_Back_Upholstered_Dining_Chair_Faux_Leather_Gold___Homary_yln0ph.jpg",
        btn: "Add to Cart",


    },
    {
        id: 6,
        name: "Metal Wire Basket",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$54",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1705630142/Poufs_Ottomans___Simons_zewsbf.jpg",
        btn: "Add to Cart",
    },

    {

        id: 7,
        name: "Decor",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$89",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308230/iiiiiiiiii_dkholm.jpg",
        btn: "Add to Cart",
    },

    {
        id: 8,
        name: "BOHO CHIC",
        icon: "https://res.cloudinary.com/duhliidee/image/upload/v1705631385/Group_10_2_hnsmcp.png",
        price: "$98",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702308230/iiiiii_bv7wfq.jpg",
        btn: "Add to Cart",
    },
    
]
const productItems = product1.map((product) => `
<div class ="h-[auto] w-[100%] rounded-xl lg:px-14 md:px-10 px-8" style ="">
<img src= '${product.image}' alt = '' class='h-[200px] w-full rounded-xl'>
<div class= "font-roboto font-bold text-[18px] py-3">${product.name}</div>
<div class = "font-roboto font-bold text-[16px]">${product.price}</div>
</div>`)
const container = document.getElementById('Image')
container.innerHTML = productItems.join("")





const product2 = [


    {
        id: "one",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702397380/Round_Storage_Ottoman_Accent_Footstool_with_Tray_and_Soft_Padding_-_Bed_Bath_Beyond_-_34928912_h1z7gt.jpg",
        name: "Tray with Foot",
        price: "30$",

    },

    {
        id: "two",
        name: "Twill Seat Cushion",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702397245/Rectangle_27_coblsk.png",
        btn: "Add to Cart",


    },

    {
        id: "three",
        name: "2-pack Linen Napkins",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702508301/50_Hemstitch_Linen_Napkins_in_Natural_Color_50x50_Cm_-_Etsy_warb8n.jpg",
        btn: "Add to Cart",


    },

    {
        id: "four",
        name: "Linen Beach Bed",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702397689/48-inch_by_24-inch_Twill_Indoor_Seat_Back_Rocker_Cushion_Cushion_Only_-_48_x_24_evyp25.jpg",
        btn: "Add to Cart",


    },
    {
        id: "five",
        name: "Fluted Beverage Glass",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702397921/AmazonCommercial_Fluted_Highball_Drinking_Glasses_rsshyl.jpg ",
        btn: "Add to Cart",


    },

    {
        id: "six",
        name: "Ceramic Egg Cup",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702398291/Giclee_Print__Egg_Cup_Ceramic___12x9in_git68v.jpg",
        btn: "Add to Cart",


    },
    {
        id: "seven",
        name: "Small Bamboo Box",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702398375/Wicker_Bamboo_Storage_Boxes_Woven_Round_Organiser_Boxes_Straw_Basket_with_Top_Lid_Gift_box_for_Women_Jewelry_Box_Tea_Box_Sewing_Box_skflrh.jpg",
        btn: "Add to Cart",


    },

    {
        id: "Eight",
        name: "Metal Cutlery Basket",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702398516/Next_Bronx_Cutlery_Drainer_-_Black_r0x8ce.jpg",
        btn: "Add to Cart",


    },

    {
        id: "Nine",
        name: "4-pack Ceramic Cups",
        price: "$40",
        image: "https://res.cloudinary.com/duhliidee/image/upload/v1702398609/Ceramic_Coffee_Cups_Coffee_Cup_and_Saucer_Set_Pottery_Coffee_Cups_C_spjt0l.jpg",
        btn: "Add to Cart",


    },



]


const productItem = product2.map((products) => `
    <div class= "h-[auto] w-[100%] lg:px-14 md:px-12 px-8 ">
    <img src= '${products.image}' alt = '' class='h-[300px] w-full rounded-xl'>
    <div class= "font-roboto font-bold text-[18px] py-3">${products.name}</div>
    <div class = "font-roboto font-bold text-[16px]">${products.price}</div>
    
    </div>`)

const containers = document.getElementById('Product')
containers.innerHTML = productItem.join("")






function toggleMenu(){
    const navLinks = document.querySelector('.nav-links')
    navLinks.classList.toggle('hidden')
}

function navigate(page){
    toggleMenu(page);
}