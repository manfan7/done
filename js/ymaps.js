let center = [53.851527, 27.694907];
function init() {
  let map = new ymaps.Map(
    "map",
    {
      center: center,
      zoom: 18,
      controls: ["routeButtonControl"],
      autoFitToViewport: "always",
    },
    {
      // searchControlProvider: "yandex#search",
    }
  );
  var control = map.controls.get("routeButtonControl");
  control.routePanel.state.set({
    type: "masstransit",
    fromEnabled: true,
    //from: center,
    toEnabled: false,
    to: center,
  });
  control.routePanel.options.set({
    types: {
      masstransit: true,
      pedestrian: true,
      taxi: true,
    },
  });
  map.controls.remove("trafficControl");
  map.controls.remove("searchControl");
  map.controls.remove("rulerControl");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("geolocationControl");
  map.controls.remove("typeSelector"); // удаляем контроль трафика
  let placemark = new ymaps.Placemark(
    center,
    {
      balloonContentHeader: "header of Baloon",
      balloonContentBody: "Body of balloon",
      balloonContentFooter: "Footer of Balloon",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map.png",
      iconImageSize: [64, 64],
      iconImageOffset: [-40, -40],
      //preset: "islands#yellowStretchyIcon",
    }
  );
  let placemark1 = new ymaps.Placemark(
    center,
    {
      balloonContent: `
     <div class="balloon">
     <div class="balloon__address">Партизанский проспект, 178</div>
    
     </div>
     `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map.png",
      iconImageSize: [64, 64],
      iconImageOffset: [-40, -40],
      //preset: "islands#yellowStretchyIcon",
    }
  );
  // map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
  //placemark1.balloon.open(); //открывает балун //
  let mapmobi = new ymaps.Map(
    "mapmobile",
    {
      center: center,
      zoom: 15,
      controls: ["routeButtonControl"],
      //autoFitToViewport: "always",//
    },
    {
      // searchControlProvider: "yandex#search",
    }
  );
  var controlmobi = mapmobi.controls.get("routeButtonControl");
  controlmobi.routePanel.state.set({
    type: "masstransit",
    fromEnabled: true,
    //from: center,
    toEnabled: false,
    to: center,
  });
  controlmobi.routePanel.options.set({
    types: {
      masstransit: true,
      pedestrian: true,
      taxi: true,
    },
  });
  mapmobi.controls.remove("trafficControl");
  mapmobi.controls.remove("searchControl");
  mapmobi.controls.remove("rulerControl");
  mapmobi.controls.remove("fullscreenControl");
  mapmobi.controls.remove("zoomControl");
  mapmobi.controls.remove("geolocationControl");
  //mapmobi.behaviors.disable(["scrollZoom"]);
  mapmobi.controls.remove("typeSelector"); // удаляем контроль трафика
  /*  let placemark = new ymaps.Placemark(
    center,
    {
      balloonContentHeader: "header of Baloon",
      balloonContentBody: "Body of balloon",
      balloonContentFooter: "Footer of Balloon",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map.png",
      iconImageSize: [64, 64],
      iconImageOffset: [-40, -40],
      //preset: "islands#yellowStretchyIcon",
    }
  ); */
  let placemark2 = new ymaps.Placemark(
    center,
    {
      balloonContent: `
     <div class="balloon">
     <div class="balloon__address">Партизанский проспект, 178</div>
    
     </div>
     `,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map.png",
      iconImageSize: [64, 64],
      iconImageOffset: [-40, -40],
      //preset: "islands#yellowStretchyIcon",
    }
  );
  // map.geoObjects.add(placemark);
  mapmobi.geoObjects.add(placemark2);
  //placemark1.balloon.open(); //открывает балун //
  map.events.add("click", function () {
    initWebyandex();
  });
  mapmobi.events.add("click", function () {
    initWebyandex();
  });
}

ymaps.ready(init);

let mapweb = document.querySelector(".item-map");
let mobiweb = document.querySelector(".mapmobile");
let linkContent = "https://yandex.ru/maps/?pt=27.694907,53.851527&z=18&l=map";
mapweb.addEventListener("click", function () {
  initWebyandex();
});
mobiweb.addEventListener("click", function () {
  initWebyandex();
});
function initWebyandex() {
  let link = document.createElement("a");
  link.setAttribute("href", linkContent);

  link.click();
}
window.addEventListener("click", function (event) {
  console.log(event.target.className);
});
