function getMessage(a, b) {
  switch (typeof a) {
    case "boolean":
      return a ? ("Переданное GIF-изображение анимировано и содержит " + b + " кадров") : ("Переданное GIF-изображение не анимировано");

    case "number":
      return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
  }
  if (Array.isArray(a)) {
    if (Array.isArray(b)) {
      var square = 0;
      for (var i = 0; i < a.length; i++) {
        square += a[i] * b[i];
      }
      return "Общая площадь артефактов сжатия: " + square + " пикселей";
    }

    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return "Количество красных точек во всех строчках изображения: " + sum;
  }

}
