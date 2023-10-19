import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class RestaurantsService {

  restaurantsList: Restaurant[] =
  [
    {
      name: 'De la Brise',
      image: 'deLaBrise.png',
      icon: 'deLaBrise_icon.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: 'Saphir',
      image: 'saphir.png',
      icon: 'saphir_icon.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: 'Gast Micher',
      image: 'gastMicher.png',
      icon: 'gastMicher_icon.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: 'Aquilon',
      image: 'aquilon.png',
      icon: 'aquilon_icon.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: 'Lorem ipsum',
      image: 'ancre.png',
      icon: 'ancre.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    },
    {
      name: 'Lorem ipsum',
      image: 'ancre.png',
      icon: 'ancre.png',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
    }
  ];

}
