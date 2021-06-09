
import { categories, flowers, reason } from "../../interfaces/tags/tags-interface";
import { ProductInterface } from "../../interfaces/product-state";


export const originalArrayBouquets: ProductInterface[] = [];



originalArrayBouquets.push({
  name: "Букет \"Душистое утро\"",
  image: ["https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
          "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
          "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
          "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
          "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
  ],
  price: 3500,
  structure: "Хризантема кустовая 4 шт, роза белая 50см 5 шт." +
    "Упаковка: Лента, Упаковка (фетр, крафт или пленка матовая).",
  description: "Нежный микс из лавандовых хризантем и белых роз создан," +
    " чтобы поднимать настроение и дарить улыбку дорогим вам людям. " +
    "Букет прекрасно подойдёт для любого торжества и получателя.",
  id: "string",

    categories: categories.bouquets,
    flowers: [flowers.Roses,
              flowers.Chrysanthemums,
    ],
  reason: [reason.birthday],
  popularity: 0,
  favorite: false,

});


originalArrayBouquets.push({
  name: "Букет \"Фламенко\"",
  image: ["https://rus-buket.ru/files/342-flamenko-957.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
  ],
  price: 6770,
  structure: "Роза красная 50см 5 шт, герберы 5 шт, хризантема кустовая 5 шт.\n" +
    "Упаковка: фетр, лента, добавления рускус",
  description: "Сочные красные герберы, алые розы, желтая и зеленая кустовая хризантема - идеальный букет по составу," +
    "по цветовой гамме, по смысловой нагрузке. Яркий и насыщенный он не оставит равнодушным даже самое ледяное сердце!",
  id: "string",

    categories: categories.bouquets,
    flowers: [flowers.Roses,
      flowers.Chrysanthemums,
    ],
  reason: [reason.birthday],
  popularity: 0,
  favorite: false,

});


originalArrayBouquets.push({
  name: "Букет \"Душистое утро\"",
  image: ["https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
  ],
  price: 3500,
  structure: "Хризантема кустовая 4 шт, роза белая 50см 5 шт." +
    "Упаковка: Лента, Упаковка (фетр, крафт или пленка матовая).",
  description: "Нежный микс из лавандовых хризантем и белых роз создан," +
    " чтобы поднимать настроение и дарить улыбку дорогим вам людям. " +
    "Букет прекрасно подойдёт для любого торжества и получателя.",
  id: "string",
  categories: categories.bouquets,
  flowers: [flowers.Roses,
            flowers.Chrysanthemums,
    ],
  reason: [reason.birthday],
  popularity: 0,
  favorite: false,

});


originalArrayBouquets.push({
  name: "Букет \"Фламенко\"",
  image: ["https://rus-buket.ru/files/342-flamenko-957.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
    "https://vladimir.rus-buket.ru/files/3150-dushistoe-utro-9517.jpg",
  ],
  price: 6770,
  structure: "Роза красная 50см 5 шт, герберы 5 шт, хризантема кустовая 5 шт.\n" +
    "Упаковка: фетр, лента, добавления рускус",
  description: "Сочные красные герберы, алые розы, желтая и зеленая кустовая хризантема - идеальный букет по составу," +
    "по цветовой гамме, по смысловой нагрузке. Яркий и насыщенный он не оставит равнодушным даже самое ледяное сердце!",
  id: "string",
  categories: categories.bouquets,
  flowers: [flowers.Roses,
      flowers.Chrysanthemums,
    ],
  reason: [reason.birthday],
  popularity: 0,
  favorite: false,

});
