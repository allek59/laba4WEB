export const rooms = [
 {id:1,name:'МурМур Mini',description:'Тихий уютный уголок для одного маленького исследователя.',animalType:'cat',capacity:1,pricePerNight:900,amenities:['Мягкая лежанка','Игрушки','Когтеточка'],position:'a',initialOccupied:false},
 {id:2,name:'Кошачий комфорт',description:'Просторный номер с игровыми полочками и местом для отдыха.',animalType:'cat',capacity:2,pricePerNight:1400,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение','Когтеточка'],position:'b',initialOccupied:false},
 {id:3,name:'Усатый люкс',description:'Премиальное пространство для самых взыскательных усатых гостей.',animalType:'cat',capacity:2,pricePerNight:2200,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение','Когтеточка','Индивидуальная зона отдыха'],position:'c',initialOccupied:true},
 {id:4,name:'Гав-стандарт',description:'Комфортный номер для энергичного четвероногого путешественника.',animalType:'dog',capacity:1,pricePerNight:1200,amenities:['Мягкая лежанка','Игрушки','Индивидуальная зона отдыха'],position:'d',initialOccupied:false},
 {id:5,name:'Хвостатый комфорт',description:'Уютный просторный номер для дружной собачьей компании.',animalType:'dog',capacity:2,pricePerNight:1800,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение'],position:'e',initialOccupied:false},
 {id:6,name:'Королевская будка',description:'Просторный люкс с особенным вниманием к каждой детали.',animalType:'dog',capacity:2,pricePerNight:2800,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение','Индивидуальная зона отдыха'],position:'f',initialOccupied:true},
 {id:7,name:'Лапки Family',description:'Семейный номер для компании из трёх пушистых друзей одного вида.',animalType:'any',capacity:3,pricePerNight:3200,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение','Индивидуальная зона отдыха'],position:'g',initialOccupied:false},
 {id:8,name:'Президентский хвост',description:'Самый роскошный номер с приватным пространством для отдыха.',animalType:'any',capacity:3,pricePerNight:4500,amenities:['Мягкая лежанка','Игрушки','Видеонаблюдение','Когтеточка','Индивидуальная зона отдыха'],position:'h',initialOccupied:false}
];
export const services=[{id:'photo',name:'Фотоотчёт каждый день',price:200},{id:'play',name:'Дополнительная игровая сессия',price:300},{id:'care',name:'Индивидуальный уход',price:500}];
export const formatPrice=n=>new Intl.NumberFormat('ru-RU').format(n)+' ₽';
export const animalLabel=t=>({cat:'Кошки',dog:'Собаки',any:'Кошки или собаки'})[t];
