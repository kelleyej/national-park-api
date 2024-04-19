const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.use(cors({
    origin: 'http://localhost:3001'
  }));
  

app.locals.locations = [
    {
        "id": 1,
        "name": "Acadia National Park",
        "state": "Maine",
        "region": "Northeast",
        "image": "https://www.tripsavvy.com/thmb/YwnJbSbTcv0LTzddyzmEfjKlcyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AcadiaNationalParkMaine-0d82794c812449c1ba514f4642f8aea2.jpg",
        "city": "Bar Harbor",
        "visited": "https://s3.amazonaws.com/adg-bucket/acadianationalparksecrets-of-the-sea/2703-medium.jpg"
    },
    {
        "id": 2,
        "name": "National Park of American Samoa",
        "state": "American Samoa",
        "region": "Pacific",
        "image": "https://i.natgeofe.com/n/c7008ade-4fd7-4974-86cf-da3a6ba2972c/92925_16x9.jpg?w=1200",
        "city": "Pago Pago",
        "visited": "https://s3.amazonaws.com/adg-bucket/national-park-of-american-samoa/1631-medium.jpg"
    },
    {
        "id": 3,
        "name": "Arches National Park",
        "state": "Utah",
        "region": "Intermountain",
        "image": "https://images.ctfassets.net/0wjmk6wgfops/6X7stlHaF9n3Nkfkzc99Tc/af09bb17eaf3425d737373b6f418bfbf/Delicate_Artch_resize_AdobeStock_333825728.jpeg?q=70",
        "city": "Moab",
        "visited": "https://ih1.redbubble.net/image.2330132969.1160/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
        "id": 4,
        "name": "Badlands National Park",
        "state": "South Dakota",
        "region": "Midwest",
        "city": "Interior",
        "image": "https://wyandottedaily.com/wp-content/uploads/2024/03/Badlands-National-Park.webp",
        "visited": "https://s3.amazonaws.com/adg-bucket/badlands-national-park-the-good-life/1368-medium.jpg"
    },
    {
        "id": 5,
        "name": "Big Bend National Park",
        "state": "Texas",
        "region": "Intermountain",
        "city": "Alpine",
        "image": "https://national-park.com/wp-content/uploads/2016/04/Welcome-to-Big-Bend-National-Park.jpg",
        "visited": "https://s3.amazonaws.com/adg-bucket/big-bend-nationa-park-mule-deer/3344-medium.jpg"
    },
    {
        "id": 6,
        "name": "Biscayne National Park",
        "state": "Florida",
        "region": "Southeast",
        "city": "Miami",
        "image": "https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2016/05/web-IMG_4758b.jpg",
        "visited": "https://m.media-amazon.com/images/I/715anmY6XeL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "id": 7,
        "name": "Black Canyon Of The Gunnison National Park",
        "state": "Colorado",
        "region": "Intermountain",
        "city": "Montrose",
        "image": "https://lh4.googleusercontent.com/proxy/3Jq91kD_MBbUNL8pCSm1j5qzuFbBcXWjFkx7-2RqST8nWRfHy0eyTLN-ZQoBRZ-AxXipI9Agusc6ewkvCc8XaLW9apta4RX0rg",
        "visited": "https://s3.amazonaws.com/adg-bucket/black-canyon-of-the-gunnison-nationalpark-painted-wall/2423-medium.jpg"
    },
    {
        "id": 8,
        "name": "Bryce Canyon National Park",
        "state": "Utah",
        "region": "Intermountain",
        "city": "Bryce Canyon City",
        "image": "https://www.rei.com/assets/adventures/images/trip/gallery/northamerica/bhe_08/live.jpg",
        "visited": "https://i.pinimg.com/564x/54/8d/cf/548dcf64a5077f19cd6db4c65145196b.jpg"
    },
    {
        "id": 9,
        "name": "Canyonlands National Park",
        "state": "Utah",
        "region": "Intermountain",
        "city": "Moab",
        "image": "https://images.ctfassets.net/0wjmk6wgfops/4xH7cd136DErUNwb5AbBi4/6256c8432bb2ec353bd79a995ab38a59/Canyonalands_National_Park_5291b211-81b6-4c3a-b2bd-3524994b1c9d.jpg?q=70",
        "visited": false
    },
    {
        "id": 10,
        "name": "Capitol Reef National Park",
        "state": "Utah",
        "region": "Intermountain",
        "city": "Torrey",
        "image": "https://capitolreefcountry.com/wp-content/uploads/2021/04/Fruita-District-1200-x-800.jpg",
        "visited": false
    },
    {
        "id": 11,
        "name": "Carlsbad Caverns National Park",
        "state": "New Mexico",
        "region": "Intermountain",
        "city": "Carlsbad",
        "image": "https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2022/12/1140-carlsbad-caverns-interior.jpg",
        "visited": false
    },
    {
        "id": 12,
        "name": "Channel Islands National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Ventura",
        "image": "https://i.natgeofe.com/n/77da8c99-8278-4eb3-8a7b-75a0044355af/resized-NationalGeographic_2206862_2x1.jpg",
        "visited": false
    },
    {
        "id": 13,
        "name": "Congaree National Park",
        "state": "South Carolina",
        "region": "Southeast",
        "city": "Hopkins",
        "image": "https://www.southernliving.com/thmb/Nz1gx0a6eEXVuZv8j1J73-azPxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/congaree_boardwalk_trail_2462202_85-1-c6f12d8ef71e4cec9edf7a336906849c.jpg",
        "visited": false
    },
    {
        "id": 14,
        "name": "Crater Lake National Park",
        "state": "Oregon",
        "region": "Pacific West",
        "city": "Crater Lake",
        "image": "https://www.gamewarden.org/wp-content/uploads/2015/06/Dollarphotoclub_35150878-640x427.jpg",
        "visited": false
    },
    {
        "id": 15,
        "name": "Cuyahoga Valley National Park",
        "state": "Ohio",
        "region": "Midwest",
        "city": "Peninsula",
        "image": "https://cdn.outsideonline.com/wp-content/uploads/2022/03/cuyahoga-valley-national-park_h.jpg",
        "visited": false
    },
    {
        "id": 16,
        "name": "Death Valley National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Furnace Creek",
        "image": "https://npf-prod.imgix.net/uploads/death-valley-istock.jpg?auto=compress%2Cformat&fit=max&q=80&w=1600",
        "visited": false
    },
    {
        "id": 17,
        "name": "Denali National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Denali",
        "image": "https://themilepost.com/wp-content/uploads/2015/03/pg427-NPS-Photo-scaled.jpg",
        "visited": false
    },
    {
        "id": 18,
        "name": "Dry Tortugas National Park",
        "state": "Florida",
        "region": "Southeast",
        "city": "Key West",
        "image": "https://i.natgeofe.com/n/cdee4237-382b-4ce3-a382-e31d0102a825/fortjefferson-drytortugas-florida_16x9.jpg?w=1200",
        "visited": false
    },
    {
        "id": 19,
        "name": "Everglades National Park",
        "state": "Florida",
        "region": "Southeast",
        "city": "Homestead",
        "image": "https://www.southernliving.com/thmb/bu1B5-nm64z5WO2iz6mg6Y2GLCI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1216404158-ef6d83a2a48e4e4c8ffe4a3c836a155c.jpg",
        "visited": false
    },
    {
        "id": 20,
        "name": "Gates Of The Arctic National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Coldfoot",
        "image": "https://www.nps.gov/common/uploads/grid_builder/gaar/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=640&quality=90&mode=crop",
        "visited": false
    },
    {
        "id": 21,
        "name": "Gateway Arch National Park",
        "state": "Missouri",
        "region": "Midwest",
        "city": "St. Louis",
        "image": "https://afar.brightspotcdn.com/dims4/default/5d8cd0c/2147483647/strip/false/crop/1900x1267+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F56%2F58%2F95a33bbf1bb47d535be0c0bb270f%2Foriginal-c07a2d169f29f58b9af7666d94661776.jpg",
        "visited": false
    },
    {
        "id": 22,
        "name": "Glacier National Park",
        "state": "Montana",
        "region": "Intermountain",
        "city": "West Glacier",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/1200px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg",
        "visited": false
    },
    {
        "id": 23,
        "name": "Glacier Bay National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Gustavus",
        "image": "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Glacier%20Bay.jpg?h=d72c0ddd&itok=V8OPRhhE",
        "visited": false
    },
    {
        "id": 24,
        "name": "Grand Canyon National Park",
        "state": "Arizona",
        "region": "Intermountain",
        "city": "Grand Canyon Village",
        "image": "https://fh-sites.imgix.net/sites/4735/2021/07/31173956/Untitled-design-2021-07-31T133906.903.png?auto=compress%2Cformat&w=1000&h=1000&fit=max",
        "visited": false
    },
    {
        "id": 25,
        "name": "Grand Teton National Park",
        "state": "Wyoming",
        "region": "Intermountain",
        "city": "Jackson",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFmFlEKlHuj-ue4vOs4RA17QuyeAh4bXfgi__U7DCXA&s",
        "visited": false
    },
    {
        "id": 26,
        "name": "Great Basin National Park",
        "state": "Nevada",
        "region": "Intermountain",
        "city": "Baker",
        "image": "https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2022/04/1140-great-basin-hero.jpg",
        "visited": false
    },
    {
        "id": 27,
        "name": "Great Sand Dunes National Park & Preserve",
        "state": "Colorado",
        "region": "Intermountain",
        "city": "Mosca",
        "image": "https://www.colorado.com/sites/default/files/styles/slideshow_slide_xxsmall/public/legacy_drupal_7_images/sandunes_nps.jpg.webp?itok=IcrMHWtl",
        "visited": false
    },
    {
        "id": 28,
        "name": "Great Smoky Mountains National Park",
        "state": "North Carolina, Tennessee",
        "region": "Southeast",
        "city": "Gatlinburg",
        "image": "https://www.sidneyjames.com/media/62f0cb7671157abd5a4ec4c0/original.webp",
        "visited": false
    },
    {
        "id": 29,
        "name": "Guadalupe Mountains National Park",
        "state": "Texas",
        "region": "Intermountain",
        "city": "Salt Flat",
        "image": "https://i.natgeofe.com/n/74eb6b34-073c-40ac-a5a0-670dae43cd02/guadalupe-mountains-national-park-590_2x1.jpg",
        "visited": false
    },
    {
        "id": 30,
        "name": "Haleakalā National Park",
        "state": "Hawaii",
        "region": "Pacific West",
        "city": "Kula",
        "image": "https://cdn.outsideonline.com/wp-content/uploads/2022/12/haleakala-crater-slidingsands_h.jpg",
        "visited": false
    },
    {
        "id": 31,
        "name": "Hawai'i Volcanoes National Park",
        "state": "Hawaii",
        "region": "Pacific West",
        "city": "Volcano",
        "image": "https://i.natgeofe.com/k/4ab71fc1-36e0-49c8-a382-fd02ee37a1a5/Hawaii-flowing-lava_16x9.jpg?w=1200",
        "visited": false
    },
    {
        "id": 32,
        "name": "Hot Springs National Park",
        "state": "Arkansas",
        "region": "Midwest",
        "city": "Hot Springs",
        "image": "https://www.travelandleisure.com/thmb/fQoDKxd0on8atscufvyhndLcihA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waterfall-HOTSPRINGS0117-26beda2a26f543f49fce2df482eb218c.jpg",
        "visited": false
    },
    {
        "id": 33,
        "name": "Indiana Dunes National Park",
        "state": "Indiana",
        "region": "Midwest",
        "city": "Chesterton",
        "image": "https://media.cntraveler.com/photos/5c6c25735ac5fd121f4375a1/16:9/w_4000,h_2250,c_limit/Indiana-Dunes-Nat'l-Park_A7DC44.jpg",
        "visited": false
    },
    {
        "id": 34,
        "name": "Isle Royale National Park",
        "state": "Michigan",
        "region": "Midwest",
        "city": "Houghton",
        "image": "https://www.rei.com/assets/adventures/images/trip/gallery/northamerica/irk_08/live.jpg",
        "visited": false
    },
    {
        "id": 35,
        "name": "Joshua Tree National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Twentynine Palms",
        "image": "https://i0.wp.com/www.mattandkaren.com/wp-content/uploads/2024/02/0a07ea.jpg?resize=1873%2C1200&ssl=1",
        "visited": false
    },
    {
        "id": 36,
        "name": "Katmai National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "King Salmon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Katmai_Crater_1980.jpg/1200px-Katmai_Crater_1980.jpg",
        "visited": false
    },
    {
        "id": 37,
        "name": "Kenai Fjords National Park",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Seward",
        "image": "https://www.travelalaska.com/sites/default/files/2021-12/Destinations_ParksPublicLands_Kenai%20Fjords%20National%20Park_Hero_%28Makayla%20Crump%29.jpg",
        "visited": false
    },
    {
        "id": 38,
        "name": "Sequoia & Kings Canyon National Parks",
        "state": "California",
        "region": "Pacific West",
        "city": "Three Rivers",
        "image": "https://res.cloudinary.com/simpleview/image/upload/v1654809567/clients/fresnoca/Kings_Canyon_Rae_Lakes_AlexanderHadik_e9156d63-72a0-4168-a798-71a0f5051595.jpg",
        "visited": false
    },
    {
        "id": 39,
        "name": "Kobuk Valley National Park",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Kotzebue",
        "image": "https://images.squarespace-cdn.com/content/v1/564d14dfe4b0290681184a82/1478818179627-IYBN319R96U9OMVI81WI/Kobuk+Valley+National+Park+-+002.jpg",
        "visited": false
    },
    {
        "id": 40,
        "name": "Lake Clark National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Port Alsworth",
        "image": "https://www.nps.gov/articles/images/LACL_Crescent-Lake_web.jpg?maxwidth=1300&autorotate=false",
        "visited": false
    },
    {
        "id": 41,
        "name": "Lassen Volcanic National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Mineral", 
        "image": "https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/vc_ca101_nationalparks_lassenvolcanic_manzanitalake_rf_628846294_1280x640.jpg",
        "visited": false
    },
    {
        "id": 42,
        "name": "Mammoth Cave National Park",
        "state": "Kentucky",
        "region": "Midwest",
        "city": "Mammoth Cave",
        "image": "https://www.worldatlas.com/upload/40/5e/65/shutterstock-1847679637.jpg",
        "visited": false
    },
    {
        "id": 43,
        "name": "Mesa Verde National Park",
        "state": "Colorado",
        "region": "Intermountain",
        "city": "Mancos",
        "image": "https://www.adventurousway.com/images/i/hvwfexwa700b/2000w/national-parks/mesa-verde-national-park/mesa-verde-national-park.jpeg",
        "visited": false
    },
    {
        "id": 44,
        "name": "Mount Rainier National Park",
        "state": "Washington",
        "region": "Pacific West",
        "city": "Ashford",
        "image": "https://i.natgeofe.com/n/6e6d2eea-06d3-4ac4-94ca-2aba6f7f8757/mountain-pine-trees_3x2.jpg",
        "visited": false
    },  
    {
        "id": 45,
        "name": "New River Gorge National Park & Preserve",
        "state": "West Virginia",
        "region": "Mid-Atlantic",
        "city": "Glen Jean",
        "image": "https://assets.vogue.com/photos/60342bd00a6b7990c15bf0c4/master/w_2560%2Cc_limit/EJ1K0R.jpg",
        "visited": false
    },
    {
        "id": 46,
        "name": "North Cascades National Park",
        "state": "Washington",
        "region": "Pacific West",
        "city": "Sedro-Woolley",
        "image": "https://www.tripsavvy.com/thmb/UW8JknuD_U4DnAx3_UXlcTOtT-Q=/3072x2048/filters:no_upscale():max_bytes(150000):strip_icc()/ViewoflakeinmountainsMountShuksanNorthCascadesNationalPark-139d1b4e5218411cb43dcd6152588b44.jpg",
        "visited": false
    },
    {
        "id": 47,
        "name": "Olympic National Park",
        "state": "Washington",
        "region": "Pacific West",
        "city": "Port Angeles",
        "image": "https://www.tripsavvy.com/thmb/1W0WJCoDqKaJmf8FKTXeqlr81p4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSCF0144-3c0cb60c0a0d4931bb6c9c092bb204ad.jpg",
        "visited": false
    },
    {
        "id": 48,
        "name": "Petrified Forest National Park",
        "state": "Arizona",
        "region": "Intermountain",
        "city": "Holbrook",
        "image": "https://arizonahighways.com/sites/default/files/activities/0518_petrifiedforest.jpg",
        "visited": false
    },
    {
        "id": 49,
        "name": "Pinnacles National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Paicines",
        "image": "https://cdn.aarp.net/content/dam/aarp/home-and-family/family-and-friends/2023/06/1140-sunrise-pinnacles-national-park-california.jpg",
        "visited": false
    },
    {
        "id": 50,
        "name": "Redwood National and State Parks",
        "state": "California",
        "region": "Pacific West",
        "city": "Crescent City",
        "image": "https://morethanjustparks.com/wp-content/uploads/2020/09/2Q3A5635-2.jpg",
        "visited": false
    },
    {
        "id": 51,
        "name": "Rocky Mountain National Park",
        "state": "Colorado",
        "region": "Intermountain",
        "city": "Estes Park",
        "image": "https://cdn.outsideonline.com/wp-content/uploads/2020/03/12/gem-lake-and-longs-peak-sunset_h.jpg?width=1200",
        "visited": false
    },
    {
        "id": 52,
        "name": "Saguaro National Park",
        "state": "Arizona",
        "region": "Intermountain",
        "city": "Tucson",
        "image": "https://symphony.cdn.tambourine.com/westward-look-wyndham/media/saguaro-national-park-5f68e9c55fafd.jpg",
        "visited": false
    },
    {
        "id": 53,
        "name": "Shenandoah National Park",
        "state": "Virginia",
        "region": "National Capital",
        "city": "Luray",
        "image": "https://cdn.britannica.com/79/176979-050-DC64B229/Little-Stony-Man-Cliffs-Blue-Ridge-Mountains.jpg",
        "visited": false
    },
    {
        "id": 54,
        "name": "Theodore Roosevelt National Park",
        "state": "North Dakota",
        "region": "Midwest",
        "city": "Medora",
        "image": "https://www.midwestliving.com/thmb/EoD4O7SAxz14e6yuLGS8y7R7LVQ=/1500x0/filters:no_upscale():max_bytes(200000):strip_icc()/TRNP-Header-bfc5d0cb0299485ca64ee4454caed321.png",
        "visited": false
    },
    {
        "id": 55,
        "name": "Virgin Islands National Park",
        "state": "U.S. Virgin Islands",
        "region": "Southeast",
        "city": "Cruz Bay",
        "image": "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2803,w_4200,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/Virgin_Islands_National_Park_tjblao.jpg",
        "visited": false
    },
    {
        "id": 56,
        "name": "Voyageurs National Park",
        "state": "Minnesota",
        "region": "Midwest",
        "city": "International Falls",
        "image": "https://img.apmcdn.org/4771e42719bdfdf41b22b39412d219abc5555d2d/uncropped/3d2587-20090925-kabetogama.jpg",
        "visited": false
    },
    {
        "id": 57,
        "name": "White Sands National Park",
        "state": "New Mexico",
        "region": "Intermountain",
        "city": "Alamogordo",
        "image": "https://www.fodors.com/wp-content/uploads/2023/10/0-HERO-Shutterstock-123300241.jpg",
        "visited": false
    },
    {
        "id": 58,
        "name": "Wind Cave National Park",
        "state": "South Dakota",
        "region": "Midwest",
        "city": "Hot Springs",
        "image": "https://mediaim.expedia.com/destination/9/73e199c4ae7fbb3ce0fcb4025634d8dc.jpg",
        "visited": false
    },
    {
        "id": 59,
        "name": "Wrangell - St. Elias National Park & Preserve",
        "state": "Alaska",
        "region": "Alaska",
        "city": "Copper Center",
        "image": "https://www.expeditionsalaska.com/wp-content/uploads/2017/03/11_jun0896-1.jpg",
        "visited": false
    },
    {
        "id": 60,
        "name": "Yellowstone National Park",
        "state": "Wyoming, Montana, Idaho",
        "region": "Intermountain",
        "city": "West Yellowstone",
        "image": "https://cdn.outsideonline.com/wp-content/uploads/2019/10/23/geyser-yelowstone-burst_h.jpg",
        "visited": false
    },
    {
        "id": 61,
        "name": "Yosemite National Park",
        "state": "California",
        "region": "Pacific West",
        "city": "Yosemite Valley",
        "image": "https://www.hertz.com/content/dam/hertz/global/blog-articles/planning-a-trip/yosemite/Yosemite-National-Park-Header.rendition.medium.jpg",
        "visited": false
    },
    {
        "id": 62,
        "name": "Zion National Park",
        "state": "Utah",
        "region": "Intermountain",
        "city": "Springdale",
        "image": "https://a.cdn-hotels.com/gdcs/production21/d594/67824cc8-c13c-4cfa-b687-4f948864e4c9.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        "visited": false
    }
  
]

app.locals.title = 'National Parks';

app.get('/api/v1/locations', (request, response) => {
   const locations = app.locals.locations;

   response.json({locations})
})

app.get('/api/v1/locations/:id', (request, response) => {
    const { id } = request.params; 
    const filteredPark = app.locals.locations.find(park => park.id === id)
    if(!filteredPark){
        return response.sendStatus(404)
    } 
    response.status(200).json(filteredPark)
})

// app.post('/api/v1/locations', (request, response) => {
//     const id = Date.now();
//     const park = request.body; 

//     for(let requiredParameter of ['name', 'state', 'region', 'busiestMonth']){
//         if(!park[requiredParameter]){
//             response
//             .status(422)
//             .send({error: `Expected format: {name: <String>, state: <String>, region: <String>, busiestMonth: <String>}. You're missing a '${requiredParameter}' property.`})
//             return
//         }
//     }

//     const { name, state, region, busiestMonth } = request.body; 
//     app.locals.parks.push({ id, name, state, region, busiestMonth })
//     response.status(201).json({ id, name, state, region, busiestMonth })
// })

// app.delete('/api/v1/locations/:id', (request, response) => {
//     const specificPark = app.locals.locations.find(park => park.id === request.params.id)
//     let parkIndex = app.locals.locations.indexOf(specificPark)
//     let deletedPark = app.locals.locations.splice(parkIndex, 1)
//     if(parkIndex === -1){
//        response.sendStatus(404) 
//     } else {
//        response.send(deletedPark) 
//     }
// })

// app.put('/api/v1/locations/:id', (request, response) => {
//     const { body, params: {id } } = request; 
//     const specificPark = app.locals.locations.find(park => park.id === id)
//     let parkIndex = app.locals.locations.indexOf(specificPark)
//     if(parkIndex === -1){
//         response.sendStatus(404)
//     } else {
//        app.locals.locations[parkIndex] = { id: id, ...body }
//     return response.sendStatus(200) 
//     }
// })

// app.patch('/api/v1/locations/:id', (request, response) => {
//     const { body, params: { id } } = request; 
//     const specificPark = app.locals.locations.find(park => park.id === id)
//     let parkIndex = app.locals.locations.indexOf(specificPark)
//     if(parkIndex === -1){
//         return response.sendStatus(404)
//     } else {
//         app.locals.locations[parkIndex] = {...app.locals.locations[parkIndex], ...body}
//     return response.sendStatus(200)
//     }
    
// })

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})