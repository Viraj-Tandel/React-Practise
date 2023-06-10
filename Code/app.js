import React from "react";
import ReactDOM from "react-dom/client";
// import reactLogo from "./assets/r.png";
// import profile from "./assets/profile.png";
import "../Code/index.css"
// import x from './assets/sample'


const restaruntData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "66593",
      name: "Burger King",
      uuid: "96e88239-15d6-4d52-b1f6-888f119ef87f",
      city: "21",
      area: "Piplod",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: [
        "Burgers",
        "American"
      ],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 15,
      minDeliveryTime: 15,
      maxDeliveryTime: 15,
      slaString: "15 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "burger-king-dumas-road-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Shop no G4, ground floor, international business,center, Dumas road, Piplod, Surat 395007",
      locality: "Rahul Raj Mall",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=7079970~p=1~eid=00000188-9ef0-555a-0a68-b9aa007a0130",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "66593",
        deliveryTime: 15,
        minDeliveryTime: 15,
        maxDeliveryTime: 15,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "70341",
      name: "Radhe Dhokla",
      uuid: "260ce409-ba33-4072-b2d6-0d597b246ccc",
      city: "21",
      area: "Adajan Gam",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "fd19ec4be6a8c261968eba3ec47d382e",
      cuisines: [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 7.099999904632568,
      slugs: {
        restaurant: "radhe-dhokla-adajan-adajan",
        city: "surat"
      },
      cityState: "21",
      address: "Shop Number 23, Darshan Park Society, Opposite Patel Pragati Mandal Ni Wadi, Honey Park Road, Adajan, Surat",
      locality: "Darshan Park Society",
      parentId: 4921,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4200,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 4200,
        message: "",
        title: "Delivery Charge",
        amount: "4200",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6945591~p=16~eid=00000188-9ef0-555a-0a68-b9af007a1067",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "70341",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 7.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "75758",
      name: "Mcdonald's",
      uuid: "ddccc851-6288-404f-b0a1-f91c8aa346eb",
      city: "21",
      area: "Dumas",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      cuisines: [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "mcdonalds-govardhan-haveli-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
      locality: "Valentine Mall",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "75758",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "709287",
      name: "Chandan Omlette Center",
      uuid: "b9f52ffb-7d12-4160-a381-e7a7381713bf",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "1f454beb32785111921906d000b04ee9",
      cuisines: [
        "Indian",
        "Continental",
        "Italian"
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 4.900000095367432,
      slugs: {
        restaurant: "chandan-omlette-center-piplod-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "RS 44/2, Block 125, Kabir House, Opposite Old Jakatnaka, U.M. Road, Bharthana-Vesu, Surat, City Light, Surat 395017",
      locality: "U.M. Road",
      parentId: 423819,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6757630~p=4~eid=00000188-9ef0-555a-0a68-b9ab007a0467",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "4.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "709287",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 4.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: true
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "369113",
      name: "Hari Om Fast Food",
      uuid: "bb2ff76f-8b97-4b5e-b0f4-817c1ffae89e",
      city: "21",
      area: "Vesu",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "wlhtret5weqzyzpxqwap",
      cuisines: [
        "Burgers",
        "Pizzas"
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.100000023841858,
      slugs: {
        restaurant: "hari-om-fast-food-piplod-piplod-2",
        city: "surat"
      },
      cityState: "21",
      address: "SHOP NO.B-2, POOJA ABHISHEK APT., OPP-RELIANCE RETAIL MARKET, VESU, SURAT.",
      locality: "Vesu Main Road",
      parentId: 93828,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "1.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "369113",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.100000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "227677",
      name: "New Gangour Restaurant",
      uuid: "0ce0d923-0bb5-4c0c-905e-71391fac04df",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "rjg3ujhpzm61hjvrxa2t",
      cuisines: [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "new-gangour-restaurant-piplod-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "B-52 Shramjivi Society. Vibhag - 2 opposite passport office. Shardayatan school lane. Umra Gaam,Surat",
      locality: "Umra Gam",
      parentId: 146541,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "227677",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "64771",
      name: "The Belgian Waffle Co.",
      uuid: "41991b94-7ed4-459a-a68f-12c827b81aac",
      city: "21",
      area: "Vesu",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "eyuokljdvxhuweg9exni",
      cuisines: [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      tags: [],
      costForTwo: 27000,
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "the-belgian-waffle-co-udhana-magdalla-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Shop 6, Aagam Emporio, Udhna Magdall Road, Vesu, Surat",
      locality: "Udhna Magdall Road",
      parentId: 2233,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "64771",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "66217",
      name: "La Pino'z Pizza",
      uuid: "c96a564b-211f-4411-a64a-b048b1eca02b",
      city: "21",
      area: "Vesu",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "yicxiximjyxdbtjpuhmx",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "la-pinoz-pizza-vesu-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "G41, Prime Shoppers Opposite Safal Square, U.M Road, Vesu, Surat",
      locality: "Um Road",
      parentId: 4961,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "66217",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "691800",
      name: "The Chinese Cartel",
      uuid: "3959a3f3-c9c4-43bb-9f88-ad869fc83289",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "7ccd1e6014d2d9eec84b08bc3e332c84",
      cuisines: [
        "Thai",
        "Chinese",
        "Pan-Asian",
        "Oriental"
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-chinese cartel-piplod-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "SHOP NO. GF/1, GROUND FLOOR, WHITE HOUSE, OPP. PALM AVENUE, BESIDE BAGHBAN FARM, VIP ROAD, VESU, SURAT",
      locality: "VIP Road",
      parentId: 414526,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=7033572~p=10~eid=00000188-9ef0-555a-0a68-b9ad007a0a0e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "691800",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "--",
      totalRatings: 0,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "94465",
      name: "Jalaram Khichdi",
      uuid: "ba7b003c-8b75-40ff-a4a6-b92c3bab1b36",
      city: "21",
      area: "Vesu",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "pufkkbugspevdmwwhhay",
      cuisines: [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "jalaram-khichdi-vesu-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Shop 8.9,10,11, Ground Floor, Mavella Corridor, Opposite Shyam Baba Temple, New VIP Road, Vesu, Surat",
      locality: "VIP Road",
      parentId: 6010,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6945829~p=19~eid=00000188-9ef0-555a-0a68-b9b0007a1303",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "94465",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "236435",
      name: "Starbucks Coffee",
      uuid: "d5d03548-e303-400e-8b37-19a5c78390d9",
      city: "21",
      area: "Piplod",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 12,
      minDeliveryTime: 12,
      maxDeliveryTime: 12,
      slaString: "12 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "starbucks-coffee-dumas-road-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "G-11/A, International Business Center , Near Big Bazaar, Dumas Road, Surat 395007",
      locality: "Dumas Road",
      parentId: 195515,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "236435",
        deliveryTime: 12,
        minDeliveryTime: 12,
        maxDeliveryTime: 12,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "352546",
      name: "Center Point -Gandhi Smruti",
      uuid: "40e80a9b-83de-4ce0-9aeb-1d2a591a263a",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "eha3nb1wqvs0p00kdeaw",
      cuisines: [
        "Chinese",
        "Burgers",
        "Pizzas"
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 5.900000095367432,
      slugs: {
        restaurant: "center-point-fast-food-athwa-athwa-2",
        city: "surat"
      },
      cityState: "21",
      address: "S-49, KANAKNIDHI COMPLEX, OPP.GANDHI SMRUTI BHAVAN, TIMALIYAWAD, NANPURA, SURAT, Nanpura H.O, Surat Municipal Corporation, Surat Municipal Corporation, Gujarat",
      locality: "Timaliyawad",
      parentId: 56320,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6945730~p=13~eid=00000188-9ef0-555a-0a68-b9ae007a0d4c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "5.9 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "352546",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 5.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "580666",
      name: "Taco Bell",
      uuid: "93596aa8-39e1-4670-b170-697e07ebe041",
      city: "21",
      area: "Piplod",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "e7f40335a66b230f5eda766022dfecbd",
      cuisines: [
        "Mexican"
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: "16 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "taco-bell-dumas-road-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Shop no - 9, Ground floor, International Business Center, Surat Dumas Road, Piplod, Surat-395007",
      locality: "Piplod",
      parentId: 1557,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "580666",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "72592",
      name: "Pizza Hut",
      uuid: "f889d46f-88e2-474e-888e-556566fda42d",
      city: "21",
      area: "Piplod",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      cuisines: [
        "Pizzas"
      ],
      tags: [],
      costForTwo: 65000,
      costForTwoString: "₹650 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "pizza-hut-piplod-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Pizzahut,G7, International Business Center,Near Big Bazar,Piplod,Surat 395007",
      locality: "Piplod",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "72592",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "401650",
      name: "KFC",
      uuid: "df0dd3fb-3134-47e2-a1c2-b8e6858efaf6",
      city: "21",
      area: "Piplod",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      cuisines: [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 13,
      minDeliveryTime: 13,
      maxDeliveryTime: 13,
      slaString: "13 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "kfc-ibc-piplod",
        city: "surat"
      },
      cityState: "21",
      address: "Shop No. GF-6,Ground Floor, International Business Centre, Piplod, Surat Dumas Road,,Surat Municipal Corporation,Gujarat- 395007",
      locality: "International Business Center",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: ""
          },
          {
            name: "time",
            fee: 0,
            message: ""
          },
          {
            name: "special",
            fee: 0,
            message: ""
          }
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0
      },
      sla: {
        restaurantId: "401650",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  }
]


const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent =  () => {
  return (
    <div className="header-wrapper">
      <img className="swiggy-logo" src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png"   alt="Swiggy Logo" />
      <ul className="navbar-wrapper">
        <li>Sign In</li>
        <li>Offers</li>
        <li>Cart <img className="cart-logo" src="https://shorturl.at/iBEFR" alt="cart-logo" /></li>
      </ul>
    </div>
  )
};

const RestaurantCard = (props) => {
  let {cuisines, name, deliveryTime, costForTwoString, avgRating, cloudinaryImageId, uuid} = props;
  console.log(uuid);
  return (
    <div className="restaurant-card-wrapper">
      <div className="resto-image">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}  />
      </div>
      <div className="restarunt-name">{name}</div>
      <div className="cuisines">{cuisines.join(',')}</div>
      <div className="card-footer">
        <div className="resto-rating">
          <i className="fa-solid fa-star"></i><span>&nbsp;{avgRating}</span>
        </div>
        <div className="dot">.</div>
        <div className="arrival-time">{deliveryTime} MIN</div>
        <div className="dot">.</div>
        <div className="costForTwo">{costForTwoString}</div>
      </div>
    </div>
  )
};

const BodyComponent = () => {
  return (
   
  <div className="body-wrapper">
   {restaruntData.map((x) => {
      return <RestaurantCard {...x.data} key={x.data.uuid} />
    })

  }
  </div>
  ) 
}
const FooterComponent = () => {
  // return (
  //   <h1>Footer Component</h1>
  // )
}



const AppComponent = () => {
  return (
    <>
    <HeaderComponent />
    <BodyComponent />
    {/* <FooterComponent /> */}
    </>
  )
};

root.render(<AppComponent />);
