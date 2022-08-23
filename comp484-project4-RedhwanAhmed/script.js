// Query Selectors:
const questionsAnswers = document.querySelectorAll(".msc-question");
const results = document.querySelector(".results");
//const mapDiv = document.querySelector(".msc-map");
console.dir(questionsAnswers);

// Document Questions:
const questionContent = [
    "1. Where is Eucalyptus Hall?",
    "2. Where is Live Oak Hall?",
    "3. Where is Chaparral Hall?",
    "4. Where is the Southwest Addition?",
    "5. Where is Magnolia Hall?"
];

// Coordinates for boxes:
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

// Variables for counting.
var qNum = 0; // index
var correct = 0; // number correct
var incorrect = 0; // number incorrect

// Enable first question:
questionsAnswers[qNum].children[0].innerHTML = questionContent[qNum];

// Google Map Initialization
function initMap() {

    // Custom Styles: https://mapstyle.withgoogle.com/
    var customStyled = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
    ];

    // Set the options beforehand and just call inside of the initialize method.
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
        mapTypeId: "roadmap",
        tilt: 0,
        center: {
            lat: 34.238254986486005, lng: -118.52634378704525
        }
    };
    // initialize the map
    const map = 
        new google.maps.Map(document.getElementById('map'), options);
    
    // import the JSON styles created above
    map.set('styles', customStyled);

    // Event Listener
    map.addListener("dblclick", (mapsMouseEvent) => {
        var latitude = mapsMouseEvent.latLng.toJSON()['lat'];
        var longitude = mapsMouseEvent.latLng.toJSON()['lng'];
        switch(qNum) {
            case 0:
                if ((latitude >= coords['eucalyptus']['south'] && latitude <= coords['eucalyptus']['north']) && (longitude >= coords['eucalyptus']['west'] && longitude <= coords['eucalyptus']['east'])) {
                    const eucalyptus = new google.maps.Rectangle({
                        strokeColor: "#47ffc2",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#47ffc2",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.2387516328497, 
                            south: 34.23854065381048, 
                            east: -118.52762822793328,
                            west: -118.52883576552267
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("correct");
                    questionsAnswers[qNum].children[1].innerHTML = "Correct";
                    correct++;
                    qNum++;
                } else {
                    const eucalyptus = new google.maps.Rectangle({
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.2387516328497, 
                            south: 34.23854065381048, 
                            east: -118.52762822793328,
                            west: -118.52883576552267
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("incorrect");
                    questionsAnswers[qNum].children[1].innerHTML = "Incorrect";
                    incorrect++;
                    qNum++;
                }
                questionsAnswers[qNum].children[0].innerHTML = questionContent[qNum];
            break;

            case 1:
                if ((latitude >= coords['liveOak']['south'] && latitude <= coords['liveOak']['north']) && (longitude >= coords['liveOak']['west'] && longitude <= coords['liveOak']['east'])) {
                    const liveOak = new google.maps.Rectangle({
                        strokeColor: "#47ffc2",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#47ffc2",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23840009540129, 
                            south: 34.23816972752623,
                            east:  -118.52762334080275,
                            west: -118.52883576552267
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("correct");
                    questionsAnswers[qNum].children[1].innerHTML = "Correct";
                    correct++;
                    qNum++;
                } else {
                    const liveOak = new google.maps.Rectangle({
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23840009540129, 
                            south: 34.23816972752623,
                            east:  -118.52762334080275,
                            west: -118.52883576552267
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("incorrect");
                    questionsAnswers[qNum].children[1].innerHTML = "Incorrect";
                    incorrect++;
                    qNum++;
                }
                questionsAnswers[qNum].children[0].innerHTML = questionContent[qNum];
            break;

            case 2:
                if ((latitude >= coords['chaparral']['south'] && latitude <= coords['chaparral']['north']) && (longitude >= coords['chaparral']['west'] && longitude <= coords['chaparral']['east'])) {
                    const chaparral = new google.maps.Rectangle({
                        strokeColor: "#47ffc2",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#47ffc2",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23858213736072,
                            south: 34.23789781613612, 
                            east: -118.52669420296584,
                            west:  -118.52730413824511  
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("correct");
                    questionsAnswers[qNum].children[1].innerHTML = "Correct";
                    correct++;
                    qNum++;
                } else {
                    const chaparral = new google.maps.Rectangle({
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23858213736072,
                            south: 34.23789781613612, 
                            east: -118.52669420296584,
                            west:  -118.52730413824511  
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("incorrect");
                    questionsAnswers[qNum].children[1].innerHTML = "Incorrect";
                    incorrect++;
                    qNum++;
                }
                questionsAnswers[qNum].children[0].innerHTML = questionContent[qNum];
            break;

            case 3:
                if ((latitude >= coords['southwestAddition']['south'] && latitude <= coords['southwestAddition']['north']) && (longitude >= coords['southwestAddition']['west'] && longitude <= coords['southwestAddition']['east'])) {
                    const southwestAddition = new google.maps.Rectangle({
                        strokeColor: "#47ffc2",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#47ffc2",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23973829027942, 
                            south: 34.23919153217208, 
                            east: -118.52663749082213,
                            west: -118.52727158403346
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("correct");
                    questionsAnswers[qNum].children[1].innerHTML = "Correct";
                    correct++;
                    qNum++;
                } else {
                    const southwestAddition = new google.maps.Rectangle({
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.23973829027942, 
                            south: 34.23919153217208, 
                            east: -118.52663749082213,
                            west: -118.52727158403346
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("incorrect");
                    questionsAnswers[qNum].children[1].innerHTML = "Incorrect";
                    incorrect++;
                    qNum++;
                }
                questionsAnswers[qNum].children[0].innerHTML = questionContent[qNum];
            break;

            case 4:
                if ((latitude >= coords['magnolia']['south'] && latitude <= coords['magnolia']['north']) && (longitude >= coords['magnolia']['west'] && longitude <= coords['magnolia']['east'])) {
                    const magnolia = new google.maps.Rectangle({
                        strokeColor: "#47ffc2",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#47ffc2",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.239650816926286,
                            south: 34.239190640056385, 
                            east: -118.52812168865691,
                            west:  -118.52843669067497
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("correct");
                    questionsAnswers[qNum].children[1].innerHTML = "Correct";
                    correct++;
                    qNum++;
                } else {
                    const magnolia = new google.maps.Rectangle({
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: 0.2,
                        map,
                        bounds: {
                            north: 34.239650816926286,
                            south: 34.239190640056385, 
                            east: -118.52812168865691,
                            west:  -118.52843669067497
                        }
                    });
                    questionsAnswers[qNum].children[1].classList.add("incorrect");
                    questionsAnswers[qNum].children[1].innerHTML = "Incorrect";
                    incorrect++;
                    qNum++;
                }
                results.style.textAlign = "center";
                results.style.color = correct > incorrect ? "#47ffc2" : "#ff0000"
                results.innerHTML = correct+" correct and "+ incorrect+" incorrect.<br>"+correct+"/5 = "+parseInt((correct/5)*100)+"%";
            break;
        }

    });
}