const data = [
  {
    title: "Mens-TopWear",
    url: "mens-topwear",
    description: "Mens TopWear Poster",
    offer: "60-65%",
    img_url:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23136578/2024/3/28/107d2df4-0d15-4bf7-bba7-131d53d5aa8e1711622739977-RARE-RABBIT-Men-Auxfo-Slim-Fit-Button-Down-Collar-Opaque-Cot-6.jpg",
    products_details: [
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_40,w_210,c_limit,fl_progressive/assets/images/26928110/2024/1/15/1ad49b6e-a8a3-46cd-9e6e-1f51ecf013011705308645635PoloRalphLaurenCottonSlim-FitTshirts1.jpg",
        price: "9,999",
        initial_price: "16,665",
        img_alt: "Branded Black T-shirt",
        name: "Polo Ralph Lauren",
        type: "T-shirt",
        color: "black",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26130150/2023/11/29/c208c973-87ef-4844-81c7-9ee664c7f4251701256265224CampusSutraMenTanSuedeWindcheaterOutdoorBikerJacket1.jpg",
        price: "1,849",
        initial_price: "3,599",
        img_alt: "Jacket",
        name: "Campus Satra",
        type: "Wind CheaterJacket",
        color: "brown",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21223034/2022/12/16/9447d00f-8277-4da8-b257-6948c8799c281671203984422VincentGreyShirt1.jpg",
        price: "799",
        initial_price: "1,499",
        name: "Snitch",
        type: "Fit Casual Shirt",
        color: "black",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29092288/2024/4/20/dfa54782-b89c-425c-964c-58ad453405a81713620419628AldenoMenSlimFitOpaqueFormalShirt1.jpg",
        price: "1,599",
        initial_price: "3,999",
        name: "Aldeno",
        type: "Formal Shirt",
        color: "gray",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_40,w_210,c_limit,fl_progressive/assets/images/29610230/2024/5/17/fc3edbe8-e401-44c3-a087-1fa1796ef5c31715933228422HACKETTLONDONMenHighNeckPocketsT-shirt1.jpg",
        price: "6,250",
        name: "Hackeet London",
        type: "Cotton Slim Fit",
        initial_price: "13,950",
        color: "white",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23855852/2023/7/3/427f9037-8836-4d17-a2dc-59908d02acb81688383549132SnitchMenPurpleClassicSlimFitOpaqueCasualShirt1.jpg",
        price: "1,499",
        initial_price: "2,999",
        name: "Snitch",
        type: "Cotton Casual Shirt",
        color: "pink",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27492330/2024/4/10/2eb91140-712f-4f49-881d-397a1c1d01811712747736203AllenSollyMenSlimFitOpaqueFormalShirt1.jpg",
        price: "3,299",
        initial_price: "4,099",
        name: "Allen Solly",
        type: "Formal Shirt",
        color: "black",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28103876/2024/3/8/35bb01aa-dc35-4f87-88a3-33e04362d6951709890250122RamrajMenOpaqueFormalShirt1.jpg",
        price: "658",
        initial_price: "1,299",
        name: "Ramraj",
        type: "Formal Shirt",
        color: "white",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/27918508/2024/2/28/4881512c-ccfe-4f71-85b2-69848f0fd1691709109004190AllenSollyMenSlimFitOpaqueStripedFormalShirt1.jpg",
        price: "2,999",
        initial_price: "3,599",
        name: "Allen Solly",
        type: "Fit Formal Shirt",
        color: "pink",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18666670/2023/8/28/76f3e6fa-57ae-4baf-b16c-0112a0a3a3991693219355019-Reebok-Men-Jackets-1781693219354491-1.jpg",
        price: "1,679",
        initial_price: "2,740",
        img_alt: "Blue Jacket",
        name: "Reebok",
        type: "Training Jacket",
        color: "sky blue",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28091742/2024/3/7/c796f0b4-9216-4ef3-a3e5-0b43f3c9ddd21709805745543MenWhiteKnitOxfordShirt1.jpg",
        price: "1,979",
        initial_price: "2,740",
        img_alt: "white shirt",
        name: "Polo Ralph Lauren",
        type: "Shirt",
        color: "white",
        unique_count:0,
      },
    ],
    brands: [
      "Polo Ralph Lauren",
      "Campus Satra",
      "Snitch",
      "Aldeno",
      "Hackeet London",
      "Allen Solly",
      "Ramraj",
      "Reebok",
    ],
    colors: [
      "pink",
      "white",
      "black",
      "grey",
      "orange",
    ],
  },
  {
    title: "Mens-BottomWear",
    url: "mens-bottomwear",
    description: "Mens BottomWear Poster",
    offer: "60-65%",
    img_url:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15313744/2021/9/27/1bd297b1-86eb-4925-91ac-3f9c26e893a91632741102814-The-Indian-Garage-Co-Men-Jeans-7811632741102021-1.jpg",
    products_details: [
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22123524/2023/2/25/aa33c3b0-a647-4fd1-be0b-3e58665e6f9d1677318834525HERENOWMenBlackSmartSlimFitStretchableJeans4.jpg",
        price: "899",
        initial_price: "1,665",
        img_alt: "Fit_pant",
        name: "Here&Now",
        type: "Men Slim Fit",
        color: "black",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29315220/2024/5/22/e9defd10-0332-4583-a1cb-2149703920591716372799027-Raymond-Men-Trousers-6511716372798308-1.jpg",
        price: "1,149",
        initial_price: "1,499",
        img_alt: "Trouser",
        name: "Raymond",
        type: "Men Slim Fit",
        color: "cement",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30015184/2024/6/21/646efeeb-dd33-49a1-83df-6f2213cc41131718981773154TrackPants1.jpg",
        price: "1,599",
        initial_price: "3,999",
        name: "Aldeno",
        type: "Formal Shirt",
        color: "gray",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29315150/2024/5/22/08ee3b0c-1fb5-41ec-b2d9-d146bb0779541716367730429-Raymond-Men-Slim-Fit-Trousers-8631716367729803-1.jpg",
        price: "1,034",
        initial_price: "2,299",
        name: "Raymond",
        type: "Men slim fit trouses",
        color: "cement",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12919402/2021/5/7/5bd0a7df-e295-4374-9148-3d6c2ee037931620389850803-Roadster-Men-Trousers-4281620389849587-1.jpg",
        price: "2,799",
        initial_price: "559",
        name: "Roadster",
        type: "Men Regular ft cargos",
        color: "gray",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9838395/2019/7/12/8eb1f6ac-8058-4fed-9a5e-177a3b75dae11562927713397-HIGHLANDER-Men-Navy-Blue-Solid-Slim-Fit-Track-Pants-94515629-1.jpg",
        price: "329",
        initial_price: "9,99",
        name: "HIGHLANDER",
        type: "Men Slim fit Track",
        color: "blue",
        unique_count:0,
      },
      {
        img_url:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26869882/2024/1/11/f809f741-a4e6-49b1-b56d-e95c774d9d7b1704974200167BonkersCornerMenStraightFitTrackPants1.jpg",
        price: "1,308",
        initial_price: "1,699",
        img_alt: "Bonkers corner",
        name: "Nike",
        type: "Men Fit Track ",
        color: "black",
        unique_count:0,
      },
    ],
    brands: [
      "Nike",
      "HIGHLANDER",
      "Roadster",
      "Aldeno",
      "Raymond",
      "Here&Now",
    ],
    colors: [
      
      "white",
      "blue",
      "black",
      "cement",
      "grey",
      "sky blue",
    ],
  },
  {
    title: "Watches",
    url: "Watches",
    description: "wathches poster",
    offer: "60-65%",
    img_url:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15482636/2021/11/9/b5268455-3821-45e5-b097-d26e174f52091636435555513-Samsung-Galaxy-Watch4-Classic-Bluetooth-46mm-Black-Compatibl-1.jpg",
      products_details: [
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15482636/2021/11/9/b5268455-3821-45e5-b097-d26e174f52091636435555513-Samsung-Galaxy-Watch4-Classic-Bluetooth-46mm-Black-Compatibl-1.jpg",
          price: "17,999",
          initial_price: "32,999",
          img_alt: "Classic Lte",
          name: "Samsung",
          type: "Classic Smart Watch",
          color: "black",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22598998/2023/3/31/010adc0b-a691-43c6-8ef9-07246027b61a1680264517642Watches1.jpg",
          price: "20,149",
          initial_price: "28,499",
          img_alt: "Casio",
          name: "Casio",
          type: "Men Stainless Watch",
          color: "black",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/258013/2023/2/23/c99c5bb7-8e0e-40ad-8a75-d1882e32264e1677143385280TitanMenSilverTonedDialWatchNF1639SM011.jpg",
          price: "1,799",
          initial_price: "2,999",
          img_alt:"watch image",
          name: "Titan",
          type: "Men Ton dail",
          color: "cement",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9770175/2023/2/23/b3508d00-6576-405d-972e-fd106e7c3cda1677148127309FastrackMenWhiteAnalogueLeatherWatch1.jpg",
          price: "1,995",
          initial_price: "2,299",
          name: "Fastrack",
          type: "Men leather watch",
          color: "white",
          img_alt:"watch leather",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/308545/2023/2/23/eaff5887-274b-459c-98b8-08ce08566aaa1677143148402TitanMenSilver-TonedDialWatch1648YM011.jpg",
          price: "1,799",
          initial_price: "1,999",
          name: "Titan",
          type: "Watches",
          color: "gold",
          img_alt:"watches",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26207570/2024/1/5/e567ae28-bf0e-4208-a635-e7f474ea1d9e1704453706251-Timex-Men-Brass-Dial--Stainless-Steel-Bracelet-Style-Straps--1.jpg",
          price: "2,222",
          initial_price: "2,499",
          name: "Timex",
          type: "Men Watch",
          color: "black",
          unique_count:0,
          img_alt:"watches"
        },
      ],
    brands: [
      "Samsung",
      "Timex",
      "Casio",
      "Fastrack",
      "Titan",
      "firebolt",
    ],
    colors: [
      
      "white",
      "sky blue",
      "black",
      "violet",
      "gold",
      "cement",
      
    ],
  },
  {
    title: "FootWear",
    url: "footwear",
    description: "footwear poster",
    offer: "60-65%",
    img_url:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16530968/2022/3/16/e145cfd8-bc3a-43b1-86da-ba948284600b1647405987726-Puma-Unisex-White-Duke-Sneakers-4711647405987421-1.jpg",
      products_details: [
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23725800/2023/8/11/3c968876-5da5-45e7-9b07-1ece9266b3771691736362925FlyingMachineMenGarnettSneakers1.jpg",
          price: "19,99",
          initial_price: "3,199",
          img_alt: "Sneakers",
          name: "Flying Machince",
          type: "Men Sneaker",
          color: "white",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11391306/2024/6/21/0862c475-60bd-4566-8e87-4088922a15d91718947588120-US-Polo-Assn-Men-White--Black-Colourblocked-PANAL-Sneakers-6-1.jpg",
          price: "1,349",
          initial_price: "28,499",
          img_alt: "uspolo sneakers",
          name: "US Polo",
          type: "Men Sneaker",
          color: "white",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10339033/2023/8/28/cddbcb00-a90c-43a9-8c63-d69dbaa0b2bb1693219412898-US-Polo-Assn-Men-White-Clarkin-Sneakers-6251693219412794-6.jpg",
          price: "1,499",
          initial_price: "2,999",
          img_alt:"sneakers",
          name: "US Polo",
          type: "Men sneakers",
          color: "white",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16530968/2022/3/16/e145cfd8-bc3a-43b1-86da-ba948284600b1647405987726-Puma-Unisex-White-Duke-Sneakers-4711647405987421-1.jpg",
          price: "1,999",
          initial_price: "3,299",
          name: "Puma",
          type: "unisex duke",
          color: "white",
          img_alt:"puma sneakers",
          unique_count:0,
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28873032/2024/6/25/77af0754-2f33-41ac-8dfb-fdeb5a17b9d01719313802951-Lee-Cooper-Men-Comfort-Sandals-4461719313802678-1.jpg",
          price: "1,199",
          initial_price: "1,599",
          name: "Lee Copper",
          type: "Men Sandal",
          color: "black",
          unique_count:0,
          img_alt:"sandals"
        },
        {
          img_url:
            "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29952422/2024/6/12/bb2d1a97-0c6b-45b0-b0bc-4372761fb95d1718212474959Sandals1.jpg",
          price: "799",
          initial_price: "999",
          name: "Bata",
          type: "Men casual sandals",
          color: "cement",
          unique_count:0,
          img_alt:"sandals"
        },
        {
        img_url:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/29341862/2024/5/3/18244753-fbfe-4352-9e08-9e374ea1a5111714746344111RoadsterMensActiveGraphicsPrintedSliders1.jpg",
      price: "799",
      initial_price: "999",
      name: "Roadster",
      type: "Men flipflop",
      color: "black",
      unique_count:0,
      img_alt:"flipflops"
        
    },
      ],
    brands: [
      "Roadster",
      "Puma",
      "US Polo",
      "Lee Copper",
      "Flying Machince",
      "firebolt",
    ],
    colors: [
      
      "white",
      "black",
      "pink",
      "cement",
      
    ],
  },
  {
    title: "Sarees",
    url: "saree",
    description: "saree poster",
    offer: "60-65%",
    img_url:
      "https://m.media-amazon.com/images/I/71RVuBs3q9L._AC_UY218_.jpg",
      products_details: [
        {
          img_url:
            "https://m.media-amazon.com/images/I/71RVuBs3q9L._AC_UY218_.jpg",
          price: "1,24,999",
          initial_price: "1,34,099",
          img_alt: "S24 ultra",
          name: "Samsung galaxy s24 ultra",
          type: "AI Smartphone",
          color: "black",
          unique_count:0,
        },
        {
          img_url:
            "https://m.media-amazon.com/images/I/71ez69tPl4L._AC_UY218_.jpg",
          price: "56,149",
          initial_price: "74,499",
          img_alt: "S24 ultra",
          name: "Samsung galaxy s24",
          type: "AI Smartphone",
          color: "yellow",
          unique_count:0,
        },
        {
          img_url:
            "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY218_.jpg",
          price: "1,51,700",
          initial_price: "1,54,000",
          img_alt:"iphone max",
          name: "iphone 15 pro max",
          type: "256",
          color: "black",
          unique_count:0,
        },
        {
          img_url:
            "https://m.media-amazon.com/images/I/81CgtwSII3L._AC_UY218_.jpg",
          price: "1,37,699",
          initial_price: "1,39,899",
          name: "iphone 15 pro",
          type: "256",
          color: "Titanium",
          unique_count:0,
          img_alt:"phone max"
        },
        {
          img_url:
            "https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY218_.jpg",
          price: "59,999",
          initial_price: "64,999",
          name: "Oneplus 12",
          type: "256g, 12gb ram",
          color: "black",
          unique_count:0,
          img_alt:"oneplus"
        },
        {
          img_url:
            "https://m.media-amazon.com/images/I/61LI5G00UNL._AC_UY218_.jpg",
          price: "45,760",
          initial_price: "51,999",
          name: "Vivo v30 pro",
          type: "512gb,12gb ram",
          color: "blue",
          img_alt:"vivo pro"
        },
        {
        img_url:
        "https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg",
      price: "21,998",
      initial_price: "27,999",
      name: "iQOO Z7 pro",
      type: "256gb,8gb ram",
      color: "blue",
      unique_count:0,
      img_alt:"iq"
        
    },
      ],
    brands: [
      "iQOO Z7 pro",
      "Vivo v30 pro",
      "Oneplus 12",
      "iphone 15 pro max",
      "iphone 15 pro",
      "Samsung galaxy s24",
      "Samsung galaxy s24 ultra"
    ],
    colors: [
      
      "white",
      "black",
      "blue",
      "Titanium",
      "yellow"
      
    ],
  },
];
export default data;
