ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "contactsMap",
    {
      center: [55.75846806898367, 37.60108849999989],
      controls: ["geolocationControl", "zoomControl"],
      zoom: 14,
    },
    {
      geolocationControlFloat: "right",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: {
        top: "289px",
        right: "10px",
      },
    }
  );

  var myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {
      balloonContentHeader: "Шоурум №4",
      balloonContentBody: "Леонтьевский переулок, дом 5/1",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../images/mark.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-15, -15],
      hasHint: false,
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
