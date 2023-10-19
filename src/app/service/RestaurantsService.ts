import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class RestaurantsService {

  restaurantsList: Restaurant[] = [
    {
      name: "Bistrot des Gascons",
      type: 'XXX YYY 222',
      image: "../../assets/images/desGascons.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: "Bistrot Landais",
      type: 'XXX YYY 222',
      image: "../../assets/images/bistrotLandais.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: "Fous de l'Ile",
      type: 'XXX YYY 222',
      image: "../../assets/images/fousDeLIle.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: "Villa 9 Trois",
      type: 'XXX YYY 222',
      image: "../../assets/images/villa9Trois.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: "Bistrot du Sommelier",
      type: 'XXX YYY 222',
      image: "../../assets/images/duSommelier.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: "Devenez partenaire",
      type: 'XXX YYY 222',
      image: "../../assets/images/duSommelier_icon.png",
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
  ];


}
