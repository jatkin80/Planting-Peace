import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Plant } from './models/Plant';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
  const plants= [
{id: 1, name:'Sun Gold Tomato', type:'vegetable', imageUrl:'https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dw7f36f17f/images/culture/143-tomatoes.jpg', dateadded: '2022-04-07', daystomaturity: 57, notes: 'high yielding plant with minimal pest issues.', description: 'Intense fruity flavor. Exceptionally sweet, bright tangerine-orange cherry tomatoes leave everyone begging for more. Vigorous plants start yielding early and bear right through the season. Tendency to split precludes shipping, making these an exclusively fresh-market treat. The taste cant be beat. High resistance to fusarium wilt and tobacco mosaic virus. Indeterminate.', spacing: '36'},

{id:2, name:'Glass Gem Corn', type:'vegetable', imageUrl: 'https://urbangardenseed.com/wp-content/uploads/2021/07/00MAIN-3990-bjxx8a.jpg', dateadded: '2022-04-01', daystomaturity: 120, notes: 'Should be planted in  be planted in clusters (not rows). Too few plants wont pollinate themselves and youll get bare cobs.',description: 'Glass Gem is something of a cross between true, modern popcorn and parching corn. Sturdy plants can reach 10 foot tall. Avg. ear size 6 to 8 inches. Requires a fairly long growing season for favorable yields. Bred by the late Carl Barnes, an Oklahoma Cherokee who dedicated his career to reclaiming and preserving seed of traditional Native American corns.', spacing: '8'},

{id:3 , name:'Everleaf Thai Towers', type:'herb',imageUrl: 'https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw8eb24b2f/images/products/herbs/04308_01_everleafthaitowers.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196', dateadded:'2022-04-07',daystomaturity: 65, notes:'great companion plant for tomatoes', description: 'Very slow bolting, incredibly productive plant with vibrant Thai flavor. Compared to Sweet Thai, Everleaf Thai Towers has larger leaves at 2 to 3 inches, a taller, more productive plant habit, and is much later to flower. Plants are very upright with purple stems and densely packed, dark green leaves with a purple blush. Makes a beautiful, tidy, towering plant. Long, strong stems and profuse leaf production make it excellent for both bunching (from a field planting) and growing in pots.',spacing:'18'
  },
{id: 4, name:'Garlic Chives',type: 'herb',imageUrl: 'https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwbb3a27d9/images/products/herbs/03299_01_chinese_leeks.jpg?sw=387&cx=382&cy=10&cw=1044&ch=1044',dateadded:'2022-04-07',daystomaturity: 90, notes:'Individual leaves may be harvested once the plants are established. Harvest leaves before flowering begins.', description:'Thin, flat leaves with delicate garlic flavor Attractive white flowers in midsummer, in the second year of growth. Flowers make a great addition to bouquets. The budded flower stalks are sold as gow choy in Chinese grocery stores.', spacing:'8'
  }

  ];
  return {plants};
  }
  genId(plants: Plant[]): number {
    return plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) + 1 : 11;
  }
}
