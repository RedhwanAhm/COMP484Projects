// Query Selectors:
const questionsAnswers = document.querySelectorAll(".msc-question");
//const mapDiv = document.querySelector(".msc-map");
console.dir(questionsAnswers);

// Map Details:

// Document Questions:
const questionContent = [
    "1. Where is Eucalyptus Hall?",
    "2. Where is Live Oak Hall?",
    "3. Where is Chaparral Hall?",
    "4. Where is the Southwest Addition?",
    "5. Where is Citrus Hall?"
];

const coords = {
    "eucalyptus": {
        north: 34.2387516328497, 
        south: 34.23854065381048, 
        east: -118.52762822793328,
        west: -118.52883576552267
    },
    
    "liveOak": {
        north: 34.23840009540129, 
        south: 34.23816972752623,
        east:  -118.52762334080275,
        west: -118.52883576552267
    },

    "chaparral": {
        north: 34.23858213736072,
        south: 34.23789781613612, 
        east: -118.52669420296584,
        west:  -118.52730413824511
    },

    "southwestAddition": {
        north: 34.23973829027942, 
        south: 34.23919153217208, 
        east: -118.52663749082213,
        west: -118.52727158403346
    },

    "magnolia": {
        north: 34.239650816926286,
        south: 34.239190640056385, 
        east: -118.52812168865691,
        west:  -118.52843669067497
    }
}

const qNum = 1;
var correct = 0;
var incorrect = 0;

// Enable first question:


// Google Map Initialization
function initMap() {
    var myLatlng = {lat: null, lng: null};
    var options = {
        zoom: 18,
        maxZoom:18,
        minZoom:18,
        gestureHandling: "none",
        disabledDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        center: {
            lat: 34.238254986486005, lng: -118.52634378704525
        }
    };

    const map = 
        new google.maps.Map(document.getElementById('map'), options);

    map.addListener("dblclick", (mapsMouseEvent) => {
        // switch(qNum) {
        //     case 0:
        //         // if()
        //     break;
        // }
        
        console.log(mapsMouseEvent.latLng.toJSON()['lat']);
        console.log(mapsMouseEvent.latLng.toJSON()['lng']);

    });

    

    // for(let i = 1; i <= qNum; i++){
    //     switch (i) {
    //         // Eucalyptus Hall
    //         case 1:
    //             getLatLng();
    //             if ((longitude >= coords['liveOak']['south'] && longitude <= coords['liveOak']['north']) &&(latitude >= coords['liveOak']['west'] &&latitude <= coords['liveOak']['east'])) {

    //             } else {
                    
    //             }
                
    //         break;

    //         // Live Oak Hall
    //         case 2:
    //             if (condition) {
                    
    //             } else {
                    
    //             }

    //         break;
            
    //         // Chapparal Hall
    //         case 3:
    //             if (condition) {
                    
    //             } else {
                    
    //             }

    //         break;

    //         // Southwest Addition
    //         case 4:
    //             if (condition) {
                    
    //             } else {
                    
    //             }

    //         break;

    //         // Magnolia Hall
    //         case 5:
    //             if (condition) {
                    
    //             } else {
                    
    //             }

    //         break;
    //     }

    //     function getLatLng() {
    //         map.addListener("dblclick", (mapsMouseEvent) => {
    //             console.dir(mapsMouseEvent.latLng);
    //         });
    //     }
    // }

    // const rectangles = {
    //     'eucalyptus': new google.maps.Rectangle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0,
    //         map,
    //         bounds: {
    //             north: 34.2387516328497, 
    //             south: 34.23854065381048, 
    //             east: -118.52762822793328,
    //             west: -118.52883576552267
    //         }
    //     }),
        
    //     'liveOak' : new google.maps.Rectangle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0,
    //         map,
    //         bounds: {
                // north: 34.23840009540129, 
                // south: 34.23816972752623,
                // east:  -118.52762334080275,
                // west: -118.52883576552267
    //         }
    //     }),

    //     'chaparral' : new google.maps.Rectangle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0,
    //         map,
    //         bounds: {
                // north: 34.23858213736072,
                // south: 34.23789781613612, 
                // east: -118.52669420296584,
                // west:  -118.52730413824511
    //         }
    //     }),

    //     'southwestAddition' : new google.maps.Rectangle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0,
    //         map,
    //         bounds: {
                // north: 34.23973829027942, 
                // south: 34.23919153217208, 
                // east: -118.52663749082213,
                // west: -118.52727158403346
    //         }
    //     }),

    //     'magnolia' : new google.maps.Rectangle({
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0,
    //         map,
    //         bounds: {
                // north: 34.239650816926286,
                // south: 34.239190640056385, 
                // east: -118.52812168865691,
                // west:  -118.52843669067497
    //         }
    //     })
    // };
}





/*

Functionality:
Create 

*/
