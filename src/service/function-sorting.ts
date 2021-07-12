import { ProductInterface } from "../interfaces/product-state";

import { flowers, reason } from "../interfaces/tags/tags-interface";


export function priceFrom(array: ProductInterface[], min: number): ProductInterface[] {
  return array.filter( (element) => element.price > min );
}


export function priceTo(array: ProductInterface[], max: number): ProductInterface[] {
  return array.filter( (element) => element.price < max );
}


export function sortByTag( arrayTag: string[], array: ProductInterface[]): ProductInterface[] {
  return array;
}



export function filterFlowersTag(array: ProductInterface[], flowersTag: flowers[]): ProductInterface[] {
  return array.filter(element => {
    for (const i of flowersTag) {
      for (const j  of element.flowers) {
        if (i === j) {return true; }}}
    return false;
  });
}



export function filterReasonsTag(array: ProductInterface[], reasonTag: reason[]): ProductInterface[] {
  return array.filter(element => {
    for (const i of reasonTag) {
      for (const j  of element.reason) {
        if (i === j) {return true; }}}
    return false;
  });
}

export function popularSort(array: ProductInterface[], sort: string): ProductInterface[] {

  const newArray: ProductInterface[] = [];
  array.forEach( el => {
    newArray.push(Object.assign({}, el));
  });
  switch (sort) {
    case "up" : newArray.sort( (a, b) => {
      return b?.popularity - a?.popularity; });
      break;
    case "down" : newArray.sort( (a, b) => {
      return a?.popularity - b?.popularity; });
      break;
    default: break;
  }
  return newArray;
}

export function priceSort(array: ProductInterface[], sort: string): ProductInterface[] {

  const newArray: ProductInterface[] = [];
  array.forEach( el => {
    newArray.push(Object.assign({}, el));
  });

  switch (sort) {
    case "up" : newArray.sort( (a, b) => {
      return b.price - a.price; });
      break;
    case "down" : newArray.sort( (a, b) => {
      return a.price - b.price; });
      break;
    default: break;
  }
  return newArray;
}


export function serach(array: ProductInterface[], text: string): ProductInterface[] {
 const array2: ProductInterface[] = [];
  for (const elementArray of array ) {
    if (elementArray.name.toLowerCase().includes(text.toLowerCase())) {
      array2.push(elementArray); }
  }
  return array2;
}
