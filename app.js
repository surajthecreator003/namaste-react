import React from "react";
import ReactDOM from "react-dom/client";

// const newLocal = "Namaste React ";
// const heading=React.createElement("h1",{class:"clr"},["helllllo Mfers"]);

// console.log(heading);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const root=ReactDOM.createRoot(document.getElementById("root"));





// const Headingjsx=React.createElement("h1",{class:"clr"},"React Element");
// console.log(Headingjsx);

// const Headingjsx1=()=> <h2 className="clr">React Component</h2>;
// console.log(Headingjsx1);

// const TrailReactelement=()=> React.createElement("h2",{class:"clr"},"React Element Returned by arrow Function");
// console.log(TrailReactelement);

// function Lol(){
// return React.createElement("h2",{class:"clr"},"React Element Returned by Normal  Function");
// }
// console.log(Lol);

// const a1=<h1 class="clr">helllo</h1>;


// const Jsxinsidereact=()=>React.createElement("div",{class:"clr"},"From insiide arrow function returning rect element will it be a functional component");
// console.log(Jsxinsidereact);//gets printed as js object

// const val="{using }";
// const elm= <h1>Lets {val} <Headingjsx1/> </h1>;

// const A2=()=><h1 className="clr">heyyy Non functional jsx element</h1>;
// const r=React.createElement("h1",{},<A2/>);
const stylecard={color:"#f0f0f0",};


//data from swigy see all all cards
const reslist=[
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "240178",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "c453c57d-6e43-44c7-8905-fe1d95c2e0e0",
        "city": "1",
        "area": "JP Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "onhkq8nwfxrje79dfhe9",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "leon-grill-jp-nagar-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Ground Floor no.13, 24th Main , Sarakki  Kere, opp Allahabad Bank, JP Nagar, 5th Phase , Bangalore- 560078",
        "locality": "5th Phase",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6485155~p=7~eid=00000187-8b99-7b54-1b9f-93e200b10742",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "240178",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "448197",
        "name": "Momo Zone - The Momo Company",
        "uuid": "ce321d3d-4049-42c5-840c-2aa6ceb95c4c",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "z0ojpg78cj8pw2gget4n",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "momo-zone-–-the-momo-company-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6D, 3rd Floor, Aishwarya Arcade, Hanuman Nagar, BTM Layout, Sir M Vishveshwaraya Road, Opp Nano Hospital, Arekere, Bangalore, 560076",
        "locality": "Hanuman Nagar",
        "parentId": 382343,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 4100,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "448197",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "515983",
        "name": "PUNJAB KITCHEN",
        "uuid": "88b517b5-6648-4b61-9459-07110974f3b4",
        "city": "1",
        "area": "BTM",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "siqdm0h2orkg6jcgmqdc",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "punjab-kitchen-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "29TH MAIN RD , 10TH CROSS HOUSE NUMBER 533 NEAR BY MANJUNATH HP GAS AGENCY BTM 2ND STAGE BANGALORE ,,BTM Layout ,B.B.M.P South,Karnataka-560076",
        "locality": "BTM 2nd stage",
        "parentId": 162022,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "515983",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "387582",
        "name": "Kouzina Kafe - The Food Court",
        "uuid": "5664f2ae-bbe6-4c6e-8eb0-b16ba1f8d1bd",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "fp6yex3mlwlpoasm7avc",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "kouzina-kafe-–-the-food-court-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6D, 3rd Floor, Aishwarya Arcade, Hanuman Nagar, BTM Layout, Sir M Vishveshwaraya Road, Opp Nano Hospital, Arekere, Bangalore, 560076",
        "locality": "Sir M Visvesvaraya Road",
        "parentId": 249027,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 4100,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "387582",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "676007",
        "name": "Shawarma On Wheels",
        "uuid": "f657cfdc-18be-4d45-b350-2a1a0428675b",
        "city": "1",
        "area": "Jayanagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "bfd4d6e0a615ea5bb5b1a515a2ddf8fe",
        "cuisines": [
          "Arabian",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "shawarma-on-wheels-jayanagar-rr-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No . 365, 26th Main, 38th Cross, 9th Block, Jayanagar, Bangalore560041",
        "locality": "9th Block",
        "parentId": 396759,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "676007",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "335687",
        "name": "Shanghai House",
        "uuid": "4befd3cf-65a9-40b3-8ebb-7945b4336c66",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "aj3z8l1y7zhp3ir38dtf",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Healthy Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "say-noodles-banashankari-banashankari",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.805/A, 16th Main, 7th Cross Rd, near Icici Bank, Stage 2, BTM Layout, Bengaluru, Karnataka 560076",
        "locality": "2nd Stage",
        "parentId": 17040,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT150 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹150 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6468703~p=10~eid=00000187-8b99-7b54-1b9f-93e300b10a6a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "335687",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "45757",
        "name": "Pipabu",
        "uuid": "2f09bae1-0f0a-40fc-b31a-2e9be0d6b1c2",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "xrwawhachqi8m410tvvp",
        "cuisines": [
          "Pizzas",
          "Italian",
          "American",
          "Continental",
          "Salads",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 5.699999809265137,
        "slugs": {
          "restaurant": "pipabu-koramanagala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#418/2, Green Leaf Layout, 80ft Road, 4th Block, Koramangala, Bangalore-560034",
        "locality": "4th Block",
        "parentId": 6889,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 5900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "45757",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 5.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "174803",
        "name": "Crown Restaurant",
        "uuid": "98cfa1fc-5411-48a5-b03b-a33a2236ebcc",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "cx5rwlrxg6y7tlzxsskx",
        "cuisines": [
          "Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
          "restaurant": "crown-restaurant-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Arekere Main Road, Bannerghatta Road, Bangalore",
        "locality": "Shantiniketan Layout",
        "parentId": 66356,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "174803",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 2.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "217048",
        "name": "Chinese BAE",
        "uuid": "f053c092-04d2-4551-b081-4449cf1a559f",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "n2lfnd2v4jf4x6l7rnos",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Combo",
          "Healthy Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "chinese-bae-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO.805/A, 1ST FLOOR, 7TH CROSS, BTM LAYOUT 2ND STAGE, MICO LAYOUT, BANGALORE., B.B.M.P South (Karnataka) - 560076",
        "locality": "2nd Stage",
        "parentId": 9769,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT150 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹150 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6468700~p=13~eid=00000187-8b99-7b54-1b9f-93e400b10d76",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "217048",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "477963",
        "name": "The Belgian Waffle Co.",
        "uuid": "cb23d76d-735a-415e-8fb3-1a026bc01f5c",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "lp30qbnrxzoyvsrwtt4f",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "the-belgian-waffle-co-mico-layout-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "799, 7th cross 15th main road,mico layout,stage 2,BTM layout,Near Madhurai idly shop Bangalore-560074",
        "locality": "2nd Stage",
        "parentId": 2233,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "477963",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "641632",
        "name": "The Celebration Cakes And Desserts",
        "uuid": "b16425e9-5f00-434a-b274-e1f677113cfd",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "s3q9dmfir1jnewwcnym4",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "the-celebration-cakes-and-desserts-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "209,1st Floor,Opposite-Bosch Gate No-2,1st Main Road,Koramangala,7Th Block,Bangalore,Karnataka-560095",
        "locality": "7th Block",
        "parentId": 308643,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 5900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "641632",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "193210",
        "name": "Chopstick",
        "uuid": "259b62fa-9764-4c6f-b915-0988773dc3e4",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "h7h8vt4y5cur3plpkf1x",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Combo",
          "Healthy Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "the-chopstick-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 805/A, 16th Mai, 7th Cross , Next to Pizza Hut, Stage 2, BTM Layout, Bangalore, Karnataka",
        "locality": "2nd Stage",
        "parentId": 1783,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT150 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹150 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6468701~p=16~eid=00000187-8b99-7b54-1b9f-93e500b11061",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "193210",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "510041",
        "name": "Nando's",
        "uuid": "85b842fd-15c7-4808-9a81-68a66f7bb40a",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "3b6787b39dbda785f5a0604a4d7672bc",
        "cuisines": [
          "Portuguese",
          "Burgers",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "nandos-koramangala-80-feet-rd-bellandur-sarjapur",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "1st, 2nd Floor, Koramangala 80 Feet Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560030",
        "locality": "7th Block",
        "parentId": 2155,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "510041",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "39374",
        "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        "uuid": "d31b9068-9431-4cf6-884e-d487944a14e1",
        "city": "1",
        "area": "JP Nagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "a3eut6bexszgmho6a51x",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Ice Cream",
          "Waffle",
          "Bakery",
          "Healthy Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "frozen-bottle-jp-nagar-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 55,19th Main 15th cross Outer Ring Road JP Nagar Second Phase",
        "locality": "2nd Phase",
        "parentId": 5655,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "39374",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "79027",
        "name": "XO Belgian Waffle",
        "uuid": "c13305a9-c32b-443c-a54b-a52c2340652a",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "zcbqyrw180xvikcbqdsc",
        "cuisines": [
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 7.300000190734863,
        "slugs": {
          "restaurant": "xo-belgian-waffle-hbr-layout-kammanahallikalyan-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
        "locality": "1st sector",
        "parentId": 5186,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 7900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6493376~p=19~eid=00000187-8b99-7b54-1b9f-93e600b1133b",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "79027",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 7.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    }
  ]
  ;

const Header=()=>{
    return(
        <div className="header">

            
            <div className="logocontainer">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>


            <div className="Navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantCard=(props)=>{
    const {resdata}=props
    console.log(resdata);
    return(
        <div style={{backgroundColor:"#f0f0f0"}} className="RestaurantCard">
           
           <img  className="restaurantlogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ resdata.data.cloudinaryImageId} />
           <h3>{resdata.data.name}</h3>
           <h4>{resdata.data.cuisines.join(",")}</h4>
           <h4>{resdata.data.avgRating} stars</h4>
           <h4>Rs.{resdata.data.costForTwo/100}</h4>
           <h4>{resdata.data.deliveryTime} minutes</h4>
           <h4>4.5</h4>
           <h4>38 mins</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="Body">
            <div className="SearchBar">
                Search
            </div>
            <div className="RestaurantConatainer">
                <RestaurantCard resdata={reslist[0]} />
                <RestaurantCard resdata={reslist[1]} />
                <RestaurantCard resdata={reslist[2]} />
                <RestaurantCard resdata={reslist[3]} />
                <RestaurantCard resdata={reslist[4]} />
                <RestaurantCard resdata={reslist[5]} />
                <RestaurantCard resdata={reslist[6]} />
                <RestaurantCard resdata={reslist[7]} />
                <RestaurantCard resdata={reslist[8]} />
                <RestaurantCard resdata={reslist[9]} />
                <RestaurantCard resdata={reslist[10]} />
                <RestaurantCard resdata={reslist[11]} />
                
                
            </div>

        </div>
    )
}

const Applayout=()=>{// TOP LEVEL COMPONENT
    return (
    <div  className="app">
        <Header/>
        <Body/>
    </div>//APP LEVEL DIV 

)
    }

    

root.render(<Applayout />);
