function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Массивы для начинающих')); 
console.log(slugify('Английский для разработчиков')); 
console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Как стать МЛАДШИМ разработчиком за ДВЕ НЕДЕЛИ'));