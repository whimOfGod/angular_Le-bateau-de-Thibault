import { Injectable } from '@angular/core';
import { Boat } from '../models/Boat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class BoatsService {

  boatsList: Boat[] =
  [
    {
      name: 'De la Brise',
      type: 'XXX YYY 222',
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
      type: 'XXX YYY 222',
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
      type: 'XXX YYY 222',
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
      type: 'XXX YYY 222',
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
      type: 'XXX YYY 222',
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
      type: 'XXX YYY 222',
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
