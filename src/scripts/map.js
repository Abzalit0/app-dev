let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [43.23, 76.94],
    zoom: 14,
    controls: [],
  });

  const coords = [
    [43.233555, 76.956667],
    [43.218426, 76.927946],
    [43.218803, 76.945986],
  ];

  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false,
      iconLayout: "default#image",
      iconImageHref: "images/bg/mark.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-35, -52],
    }
  );

  coords.forEach((coord) => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
