let center = [53.851527, 27.694907];
function init() {
  let map = new ymaps.Map(
    "map",
    {
      center: center,
      zoom: 18,
      controls: ["routeButtonControl"],
    },
    {
      // searchControlProvider: "yandex#search",
      autoFitToViewport: "always",
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
}

ymaps.ready(init);
