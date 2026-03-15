// 1. Unified Car Database
const carData = [
{
    id: 1,
    brand: "Konigsegg",
    name: "Konigsegg Jesko Absolut (2020)",
    category: "Hypercar",
    fullPrice: "$3,000,000",
    preOrderPrice: "$300,000",
    image: "img/products/f1 jesko.jpeg",
    description: "The ultimate high-speed machine, designed for absolute performance.",
    // Specific images and prices for Jesko
    editions: {
        "standard": { m: 3000000, p: 300000, img: "img/products/f1 jesko.jpeg" },
        "special":  { m: 4000000, p: 400000, img: "img/products/kjspecialed.png" },
        "Collector":  { m: 5100000, p: 510000, img: "img/products/kjcollectored.png" } 
    }
},
{
    id: 2,
    brand: "Bugatti",
    name: "Bugatti Chiron Super Sport 300+ (2021)",
    category: "Hypercar",
    fullPrice: "$4,300,000",
    preOrderPrice: "$430,000",
    image: "img/products/Bugatti.jpeg",
    description: "The Bugatti Chiron Super Sport is the ultimate grand tourer, combining brutal power with absolute luxury.",
    // Specific images and prices for Bugatti
    editions: {
        "standard": { m: 4300000, p: 430000, img: "img/products/Bugatti.jpeg" },
        "premium":  { m: 5100000, p: 510000, img: "img/products/bugattichpr.jpg" },
        "special":  { m: 6200000, p: 620000, img: "img/products/bugattichsp.jpg" },
        "Collector":  { m: 7200000, p: 720000, img: "img/products/bugattichcoll.jpg" }
    }
},


    {
    id: 3,
    brand: "Lamborghini",
    name: "Lamborghini Veneno (2014)",
    category: "Hypercar",
    fullPrice: "$4,500,000",
    preOrderPrice: "$450,000",
    image: "img/products/Lambo.jpeg",
    description: "One of the rarest cars in the world, designed to celebrate Lamborghini's 50th anniversary.",
    history: "With only a handful of units ever produced, the Veneno focuses on optimum aerodynamics.",
    specs: { speed: "355 km/h", accel: "2.8s", engine: "6.5L V12", weight: "1,490 kg" },
    editions: {
        "standard": { m: 4500000, p: 450000, img: "img/products/Lambo.jpeg" },
        "Premium":  { m: 4800000, p: 480000, img: "img/products/LAMBOPRED.png" },
        "Special":  { m: 5500000, p: 550000, img: "img/products/LAMBOSPED.png" },
        "Collector": { m: 6200000, p: 620000, img: "img/products/LAMBOCOLLECTED.png" }
    }
},
{
    id: 4,
    brand: "McLaren",
    name: "McLaren Senna (2018)",
    category: "Hypercar",
    fullPrice: "$1,200,000",
    preOrderPrice: "$120,000",
    image: "img/products/senna.jpeg",
    description: "Named after the legendary F1 driver, built for the track.",
    history: "The Senna is the personification of McLaren’s DNA at its most extreme.",
    specs: { speed: "335 km/h", accel: "2.8s", engine: "4.0L V8 Twin-Turbo", weight: "1,198 kg" },
    editions: {
        "standard": { m: 1200000, p: 120000, img: "img/products/senna.jpeg" },
        "Premium":  { m: 1800000, p: 180000, img: "img/products/SENNAPRED.png" },
        "Collector":  { m: 2300000, p: 230000, img: "img/products/SENNASPED.png" },
        "Special": { m: 3000000, p: 300000, img: "img/products/SENNACOLLECTED.png" }
    }
},
{
    id: 5,brand: "Ferrari",name: "Ferrari F40 (1992)",fullPrice: "$2,200,000",preOrderPrice: "$220,000",
    category: "Sportscar",
    image: "img/products/Ferrari.jpeg",description: "The last car personally approved by Enzo Ferrari. A raw, analog masterpiece.",
    history: "Launched in 1987 for Ferrari's 40th anniversary, it was the first production car to break the 200 mph barrier.",
    specs: { speed: "324 km/h", accel: "4.1s", engine: "2.9L Twin-Turbo V8", weight: "1,250 kg" },
    editions: {
        "standard": { m: 2200000, p: 220000, img: "img/products/Ferrari.jpeg" },
        "Premium":  { m: 2500000, p: 250000, img: "img/products/ff40PRED.png" },
        "Special":  { m: 2800000, p: 280000, img: "img/products/ff40SPED.png" },
        "Collector": { m: 3900000, p: 390000, img: "img/products/ff40CED.png" }
    }
},
{
    id: 6, brand: "BMW", name: "BMW M3 GTR (2001)", fullPrice: "$2,000,000", preOrderPrice: "$200,000",
    category: "Sportscar",
    image: "img/products/nfs.jpeg", description: "The hero car of Need for Speed: Most Wanted.",
    specs: { speed: "295 km/h", accel: "4.0s", engine: "4.0L V8", weight: "1,350 kg" },
    editions: {
        "Collector": { m: 2000000, p: 200000, img: "img/products/nfs.jpeg" }
    }
},
{
    id: 7, brand: "MITSUBISHI", name: "Mitsubishi Lancer Evolution MR (2005)", fullPrice: "$185,000", preOrderPrice: "$18,500",
    category: "Rally",
    image: "img/products/EVO.jpeg", description: "A rally legend for the road.",
    specs: { speed: "250 km/h", accel: "4.8s", engine: "2.0L Turbo I4", weight: "1,400 kg" },
    editions: {
        "standard": { m: 185000, p: 18500, img: "img/products/EVO.jpeg" },
        "JDM": { m: 290000, p: 29000, img: "img/products/EVOsepd.jpg" }
    }
},
{
    id: 8, brand: "Nissan", name: "Nissan GTR R35 Nismo SE (2022)", fullPrice: "$300,000", preOrderPrice: "$30,000",
    category: "Sportscar",
    image: "img/products/nissan nismo.jpeg", description: "The ultimate evolution of the R35 platform.",
    specs: { speed: "315 km/h", accel: "2.5s", engine: "3.8L V6 Twin-Turbo", weight: "1,703 kg" },
    editions: {
        "standard": { m: 300000, p: 30000, img: "img/products/nissan nismo.jpeg" },
        "Special":  { m: 620000, p: 62000, img: "img/products/nismosped.jpg" }

    }
},
{
    id: 9, brand: "Nissan", name: "Nissan Sky-line GTR R34 (2002)", fullPrice: "$3,000,000", preOrderPrice: "$300,000",
    category: ["JDM","Sportscar"],
    image: "img/products/r34.jpeg", description: "The icon of JDM culture, known as Godzilla.",
    specs: { speed: "250 km/h", accel: "4.7s", engine: "2.6L Twin-Turbo I6", weight: "1,560 kg" },
    editions: {
    "Standard": { m: 2200000, p: 220000, img: "img/products/r34.jpeg" },
    "Special":  { m: 2800000, p: 280000, img: "img/products/r34sped.jpg" },
    "Collector": { m: 3900000, p: 390000, img: "img/products/r34coled.jpg" }
    }
},
{
    id: 10, brand: "Honda", name: "Honda Civic Type R (2026)", fullPrice: "$48,000", preOrderPrice: "$4,800",
    category: "Sportscar",
    image: "img/products/honda.png", description: "The most powerful Civic ever built.",
    specs: { speed: "275 km/h", accel: "5.4s", engine: "2.0L Turbo I4", weight: "1,430 kg" },
    editions: {
        "Standard": { m: 48000, p: 4800, img: "img/products/honda.png" }
    }
},
{
    id: 11, brand: "Porsche", name: "Porsche 911 GT3 RS (2016)", fullPrice: "$245,000", preOrderPrice: "$24,500",
    category: "Sportscar",
    image: "img/products/poshe.jpeg", description: "Precision engineering for the perfect driving experience.",
    specs: { speed: "310 km/h", accel: "3.3s", engine: "4.0L Flat-6", weight: "1,420 kg" },
    editions: {
        "Special": { m: 245000, p: 24500, img: "img/products/poshe.jpeg" }
    }
},
{
    id: 12, brand: "Aston Martin", name: "Aston Martin DB-10 Bond Edition (2016)", fullPrice: "$3,500,000", preOrderPrice: "$350,000",
    category: "Sportscar",
    image: "img/products/aston martin db -10.png", description: "The secret agent's car of choice.",
    specs: { speed: "305 km/h", accel: "4.7s", engine: "4.7L V8", weight: "1,550 kg" },
    editions: {
        "Collector": { m: 3500000, p: 350000, img: "img/products/aston martin db -10.png" }
    }
},
{
    id: 13, brand: "Bugatti", name: "Bugatti RV Motorhome (2026)", fullPrice: "$23,500,000", preOrderPrice: "$2,300,000",
    category: "Trucks",
    image: "img/products/bugati rv.jpeg", description: "Unparalleled luxury and performance in a motorhome.",
    specs: { speed: "200 km/h", accel: "8.0s", engine: "Quad-Turbo W16", weight: "12,000 kg" },
    editions: {
    "Special":   { m: 23500000, p: 2300000, img: "img/products/bugati rv.jpeg" },
    "Collector": { m: 28000000, p: 2800000, img: "img/products/bugati rved.jpg" }
    }
},
{
    id: 14, brand: "Fleetwood", name: "Bounder Breaking Bad Edition (1986)", fullPrice: "$85,000", preOrderPrice: "$8,500",
    category: "Trucks",
    image: "img/products/breaking bad rv.png", description: "A piece of television history.",
    specs: { speed: "120 km/h", accel: "25s", engine: "V8 Gas Engine", weight: "6,500 kg" },
    editions: {
        "Collector": { m: 85000, p: 8500, img: "img/products/breaking bad rv.png" }
    }
},
{
    id: 15, brand: "Land Rover", name: "Land Rover Defender Station Wagon (2016)", fullPrice: "$110,000", preOrderPrice: "$11,000",
    category: "SUV",
    image: "img/products/suv land rover.png", description: "Go anywhere, do anything.",
    specs: { speed: "145 km/h", accel: "14s", engine: "2.2L Diesel", weight: "2,050 kg" },
    editions: {
"Standard": { m: 110000, p: 11000, img: "img/products/suv land rover.png" },
"Collector":  { m: 250000, p: 25000, img: "img/products/suv land rovercoled.jpg" }
    }
},
{
    id: 16, brand: "Land Rover", name: "Range Rover Sport (2025)", fullPrice: "$210,000", preOrderPrice: "$21,000",
    category: "SUV",
    image: "img/products/rr suv.png", description: "The pinnacle of modern luxury SUVs.",
    specs: { speed: "250 km/h", accel: "4.3s", engine: "3.0L Hybrid I6", weight: "2,300 kg" },
    editions: {
        "Standard": { m: 210000, p: 21000, img: "img/products/rr suv.png" }
    }
},
{
id: 17,
brand: "Dodge",
name: "Charger Daytona HEMI (1969)",
category: "Muscle",
fullPrice: "950000",
preOrderPrice: "95000",
image: "img/products/Dodge Charger Daytona HEMI 1967.png",
description: "The 1969 Dodge Charger Daytona was the first car to clock 200 mph on a closed circuit, making it a masterpiece of NASCAR history.",
specs: "330 km/h | 5.2s | 7.0L Petrol | 1780 kg",
editions: {
"Standard":  { m: 950000, p: 95000, img: "img/products/Dodge Charger Daytona HEMI 1967.png" },
    "Premium":   { m: 1100000, p: 110000, img: "img/products/Dodge Charger Daytona HEMI 1967pred.jpg" },
    "Special":   { m: 1450000, p: 145000, img: "img/products/Dodge Charger Daytona HEMI 1967sped.jpg" },
    "Collector": { m: 2200000, p: 220000, img: "img/products/Dodge Charger Daytona HEMI 1967coled.jpg" }
}
},
{
id: 18,
brand: "Ford",
name: "Mustang Boss 302 (1969)",
category: "Muscle",
fullPrice: "180000",
preOrderPrice: "18000",
image: "img/products/Mustang Boss 302 1969.png",
description: "Designed for the Trans-Am racing series, the 1969 Boss 302 focused on handling and high-revving power.",
specs: "190 km/h | 6.9s | 4.9L Petrol | 1475 kg",
editions: {
"Standard":  { m: 180000, p: 18000, img: "img/products/Mustang Boss 302 1969.png" },
    "Premium":   { m: 220000, p: 22000, img: "img/products/Mustang Boss 302 1969pred.jpg" },
    "Special":   { m: 350000, p: 35000, img: "img/products/Mustang Boss 302 1969sped.jpg" },
    "Collector": { m: 850000, p: 85000, img: "img/products/Mustang Boss 302 1969coled.jpg" }
}
},
{
id: 19,
brand: "Ford",
name: "GT40 Mk II Le Mans (1966)",
category: "Sportscar",
fullPrice: "12500000",
preOrderPrice: "1250000",
image: "img/products/Ford 2 GT40 Mk II Le Mans.png",
description: "Powered by a massive 7.0L V8, the Mk II achieved the historic 1-2-3 podium sweep at Le Mans.",
specs: "340 km/h | 3.8s | 7.0L Petrol | 1210 kg",
editions: {
"Standard":  { m: 12500000, p: 1250000, img: "img/products/Ford 2 GT40 Mk II Le Mans.png" },
    "Premium":   { m: 14500000, p: 1450000, img: "img/products/Ford 2 GT40 Mk II Le Manspred.jpg" },
    "Special":   { m: 18000000, p: 1800000, img: "img/products/Ford 2 GT40 Mk II Le Manssped.jpg" },
    "Collector": { m: 25000000, p: 2500000, img: "img/products/Ford 2 GT40 Mk II Le Manscoled.jpg" }
}
},
{
id: 20,
brand: "Ferrari",
name: "430 Scuderia (2007)",
category: "Sportscar",
fullPrice: "550000",
preOrderPrice: "55000",
image: "img/products/Ferrari 430 Scuderia.png",
description: "A lightweight, track-hardened V8 Ferrari prized for raw driver engagement and race-car technology.",
specs: "320 km/h | 3.6s | 4.3L Petrol | 1350 kg",
editions: {
"Standard":  { m: 550000, p: 55000, img: "img/products/Ferrari 430 Scuderia.png" },
    "Premium":   { m: 680000, p: 68000, img: "img/products/Ferrari 430 Scuderiapred.jpg" },
    "Special":   { m: 850000, p: 85000, img: "img/products/Ferrari 430 Scuderiasped.jpg" },
    "Collector": { m: 1800000, p: 180000, img: "img/products/Ferrari 430 Scuderiacoled.jpg" }
}
},
{
id: 21,
brand: "McLaren",
name: "P1 Hybrid (2013)",
category: "Hypercar",
fullPrice: "2200000",
preOrderPrice: "220000",
image: "img/products/Mclaren P1.png",
description: "The spiritual successor to the McLaren F1, featuring a revolutionary hybrid powertrain.",
specs: "350 km/h | 2.8s | 3.8L Hybrid | 1450 kg",
editions: {
"Standard":  { m: 2200000, p: 220000, img: "img/products/Mclaren P1.png" },
    "Collector": { m: 5500000, p: 550000, img: "img/products/Mclaren P1coled.jpg" }
}
},
{
id: 22,
brand: "Jaguar",
name: "C-X75 Prototype",
category: "Sportscar",
fullPrice: "1800000",
preOrderPrice: "180000",
image: "img/products/Jaguar C-X75.png",
description: "Famous for the chase through Rome in 'Spectre,' this prototype represents a peak in Jaguar performance design.",
specs: "354 km/h | 3.0s | 1.6L Hybrid | 1700 kg",
editions: {
"Standard":  { m: 1800000, p: 180000, img: "img/products/Jaguar C-X75.png" }
}
},
{
id: 23,
brand: "Lamborghini",
name: "Huracán LP 610-4",
category: "Sportscar",
fullPrice: "220000",
preOrderPrice: "22000",
image: "img/products/Lamborghini_Huracán_LP_610.png",
description: "The naturally aspirated V10 screamer that defines the modern Lamborghini experience.",
specs: "325 km/h | 3.2s | 5.2L Petrol | 1422 kg",
editions: {
"Standard":  { m: 220000, p: 22000, img: "img/products/Lamborghini_Huracán_LP_610.png" },
    "Collector": { m: 750000, p: 75000, img: "img/products/Lamborghini_Huracán_LP_610speddiled.jpg" }
}
},
{
id: 24,
brand: "Lamborghini",
name: "Urus Super SUV",
category: "SUV",
fullPrice: "300000",
preOrderPrice: "30000",
image: "img/products/Lambogini_Urus.png",
description: "The world's first Super SUV, combining supercar dynamics with all-terrain versatility.",
specs: "305 km/h | 3.6s | 4.0L Petrol | 2200 kg",
editions: {
    "Standard":  { m: 300000, p: 30000, img: "img/products/Lambogini_Urus.png" },
    "Premium":   { m: 380000, p: 38000, img: "img/products/Lambogini_Uruspred.jpg" },
    "Collector": { m: 900000, p: 90000, img: "img/products/Lambogini_Uruscoled.jpg" }
}
},
{
id: 25,
brand: "BMW",
name: "X5 M Competition (2020)",
category: "SUV",
fullPrice: "130000",
preOrderPrice: "13000",
image: "img/products/BMW X5.png",
description: "Delivering sport-sedan agility in a large SUV body, the X5 M is the benchmark for performance SAVs.",
specs: "250 km/h | 3.8s | 4.4L Petrol | 2400 kg",
editions: {
"Standard":  { m: 130000, p: 13000, img: "img/products/BMW X5.png" }
}
},
{
id: 26,
brand: "Land Rover",
name: "Defender 110 X",
category: "SUV",
fullPrice: "110000",
preOrderPrice: "11000",
image: "img/products/Land_Rover_Defender_110_X.png",
description: "The premium evolution of an off-road legend, featuring an ultra-stiff aluminum monocoque.",
specs: "209 km/h | 6.1s | 3.0L Petrol | 2350 kg",
editions: {
"Standard":  { m: 110000, p: 11000, img: "img/products/Land_Rover_Defender_110_X.png" }
}
},
{
id: 27,
brand: "Honda",
name: "Vezel Sports (2025)",
category: "SUV",
fullPrice: "40000",
preOrderPrice: "4000",
image: "img/products/New_Honda_Vezel_sports_2025.png",
description: "Focusing on e:HEV hybrid technology, the 2025 Vezel combines urban style with a touch of sporty flair.",
specs: "180 km/h | 8.2s | 1.5L Hybrid | 1380 kg",
editions: {
"Standard":  { m: 40000, p: 4000, img: "img/products/New_Honda_Vezel_sports_2025.png" }
}
},
{
id: 28,
brand: "Mercedes-AMG",
name: "GT2 Pro (2024)",
category: "Sportscar",
fullPrice: "520000",
preOrderPrice: "52000",
image: "img/products/AMG.jpg",
description: "A pure expression of motorsport heritage, the GT2 Pro is the ultimate track tool for privateers.",
specs: "315 km/h | 3.0s | 4.0L V8 | 1400 kg",
editions: {
"Special":   { m: 520000, p: 52000, img: "img/products/AMG.jpg" }
}
},
{
id: 29,
brand: "Porsche",
name: "911 Sport Classic (2010)",
category: "Sportscar",
fullPrice: "480000",
preOrderPrice: "48000",
image: "img/products/Porsche_911_Sport_Classic.png",
description: "A manual-only, rear-wheel-drive masterpiece designed to celebrate the pure heritage of the 911.",
specs: "302 km/h | 4.6s | 3.8L Petrol | 1425 kg",
editions: {
"Standard":  { m: 480000, p: 48000, img: "img/products/Porsche_911_Sport_Classic.png" },
    "Premium":   { m: 590000, p: 59000, img: "img/products/Porsche_911_Sport_Classicpred.jpg" },
    "Special":   { m: 750000, p: 75000, img: "img/products/Porsche_911_Sport_Classicsped.jpg" },
    "Collector": { m: 1200000, p: 120000, img: "img/products/Porsche_911_Sport_Classiccoled.jpg" }
}
},
{
id: 30,
brand: "BMW",
name: "i8 Hybrid Sports",
category: "Sportscar",
fullPrice: "55000",
preOrderPrice: "5500",
image: "img/products/BMW I8.png",
description: "The radical plug-in hybrid that proved sports cars could be both sustainable and exciting.",
specs: "250 km/h | 4.4s | 1.5L Hybrid | 1535 kg",
editions: {
"Standard":  { m: 55000, p: 5500, img: "img/products/BMW I8.png" }
}
},
{
id: 31,
brand: "Audi",
name: "R8 Coupé V10 plus (2016)",
category: "Sportscar",
fullPrice: "190000",
preOrderPrice: "19000",
image: "img/products/Audi_R8_Coupé_V10_plus_5.2_FSI_quattro.png",
description: "Sharing 50% of its parts with the LMS race car, the R8 V10 plus is one of the most usable supercars ever made.",
specs: "330 km/h | 3.2s | 5.2L Petrol | 1580 kg",
editions: {
    "Standard":  { m: 190000, p: 19000, img: "img/products/Audi_R8_Coupé_V10_plus_5.2_FSI_quattro.png" }


    
}
},


{
    id: 32, 
    brand: "Acura",
    name: "Acura NSX (1993)",
    category: "Sportscar",
    fullPrice: "$125,000", 
    preOrderPrice: "$12,500",
    image: "img/products/acura.jpeg",
    description: "The original Japanese supercar that challenged Ferrari's dominance.",
    specs: { speed: "270 km/h", accel: "5.2s", engine: "3.0L V6 VTEC", weight: "1,370 kg" },
        editions: {
    "Standard":  { m: 125000, p: 12500, img: "img/products/acura.jpeg" }
}
},
{
    id: 33, 
    brand: "Apollo",
    name: "Intensa Emozione (2023)",
    category: "Hypercar",
    fullPrice: "$2,700,000", 
    preOrderPrice: "$270,000",
    image: "img/products/apolo.jpeg",
    description: "A track-focused hypercar with a naturally aspirated V12 and extreme aero.",
    specs: { speed: "335 km/h", accel: "2.7s", engine: "6.3L V12", weight: "1,250 kg" },
    editions: {
    "Standard":  { m: 950000, p: 95000, img: "img/products/apolo.jpeg" },
    
}
},

{
    id: 34, 
    brand: "Subaru",
    name: "Wrx Sti 22B (1999)",
    category: ["Rally","Sportscar"],
    fullPrice: "$250,000", 
    preOrderPrice: "$25,000",
    image: "img/products/subaru1999.jpeg",
    description: "A wide-body rally legend built to celebrate Subaru's 40th anniversary.",
    specs: { speed: "250 km/h", accel: "4.7s", engine: "2.2L Flat-4 Turbo", weight: "1,270 kg" },
    editions: {
    "Standard":  { m: 950000, p: 95000, img: "img/products/subaru1999.jpeg" }
}
},


{
    id: 35, 
    brand: "Honda",
    name: "Civic Type R (2026)",
    category: "Sportscar",
    fullPrice: "$46,690", 
    preOrderPrice: "$4,600",
    image: "img/products/honda.png",
    description: "The king of front-wheel drive, refined and ready for the 2026 model year.",
    specs: { speed: "275 km/h", accel: "5.4s", engine: "2.0L I4 Turbo", weight: "1,440 kg" },
    editions: {
"Standard":  { m: 46690, p: 4669, img: "img/products/honda.png" }
    }
},

{
    id: 36,
    brand: "Chevrolet",
    name: "Corvette C8 (2020)",
    category: "Sportscar",
    fullPrice: "$65,000",
    preOrderPrice: "$6,500",
    image: "img/products/chev20.jpeg",
    description: "The first mid-engine Corvette in history, redefining the American supercar.",
    history: "The C8 Stingray was a massive shift for the brand, moving the engine to the middle for better balance and performance, rivaling European exotics at a fraction of the cost.",
    specs: { speed: "312 km/h", accel: "2.9s", engine: "6.2L V8", weight: "1,530 kg" },
    editions: {
    "Standard": { m: 65000, p: 6500, img: "img/products/chev20.jpeg" }
    }
},


{
    id: 37,
    brand: "Kia",
    name: "Kia Ev 6 GT (2023)",
    category: "SUV",
    fullPrice: "$62,000",
    preOrderPrice: "$6,200",
    image: "img/products/Kia EV6 GT 23.jpg",
    description: "A high-performance electric crossover that challenges the world's fastest SUVs.",
    history: "The EV6 GT proved that Kia could produce a world-class electric vehicle with supercar-slaying acceleration and advanced 800V fast-charging architecture.",
    specs: { speed: "260 km/h", accel: "3.4s", engine: "Dual Motor EV", weight: "2,100 kg" },
    editions: {
        "Standard": { m: 62000, p: 6200, img: "img/products/Kia EV6 GT 23.jpg" }
    }
},
    {
    id: 38, 
    brand: "Chevrolet",
    name: "Camaro ZL1 (2017)",
    category: "Sportscar",
    fullPrice: "$62,000",
    preOrderPrice: "$6,200",
    image: "img/products/chev17.jpeg",
    description: "A track-focused beast that redefined the American muscle car with supercar-level precision.",
    history: "The 2017 ZL1 was the first Camaro to feature the 10-speed automatic transmission and Magnetic Ride Control, making it a dominant force on both the strip and the circuit.",
    specs: { 
        speed: "318 km/h", 
        accel: "3.5s", 
        engine: "6.2L Supercharged V8 LT4", 
        weight: "1,761 kg" 
    },
    editions: {
        "Standard": { m: 62000, p: 6200, img: "img/products/chev17.jpeg" },
    }
},

    {
    id: 39, 
    brand: "Mercedes-Benz",
    name: "S-Class S580 Night Edition (2025)",
    category: "Black Editons",
    fullPrice: "$156,530.000",
    preOrderPrice: "$15,653.000",
    image: "img/products/BENZ S-CLASS BLACK ED.jpg",
    description: "The flagship luxury sedan featuring the Night Package, which replaces chrome with high-gloss black accents and obsidian trim.",
    history: "Since 1972, the S-Class has served as the technology vanguard for the automotive industry, introducing features like air suspension and advanced driver assistance.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.3 s", 
        engine: "4.0L V8 Biturbo with Mild Hybrid", 
        weight: "2,250 kg" 
    },
    editions: {
        "Black": { m: 156530, p: 15653, img: "img/products/BENZ S-CLASS BLACK ED.jpg" },
    }
},

    {
    id: 40, 
    brand: "BMW",
    name: "BMW 7 Series 760i xDrive Shadowline (2025)",
    category: "Black Editons",
    fullPrice: "$150,000",
    preOrderPrice: "$15,000",
    image: "img/products/BMW 7 Series (760i xDrive Shadowline) BLACKED.jpg",
    description: "A bold, high-tech executive sedan featuring a Shadowline black-out grille and an ultra-modern interior.",
    history: "Launched in 1977, the 7 Series has transitioned from a sport-oriented luxury car to a digital-first lounge on wheels, now featuring the 31-inch Theater Screen.",
    specs: { 
        speed: "318 km/h", 
        accel: "4.1 s", 
        engine: "4.4L V8 TwinPower Turbo", 
        weight: "2,270 kg" 
    },
    editions: {
        "Black": { m: 150000, p: 15000, img: "img/products/BMW 7 Series (760i xDrive Shadowline) BLACKED.jpg" },
    }
},


    {
    id: 41, 
    brand: "Audi",
    name: "Audi A8 - L (2025)",
    category: "Black Editons",
    fullPrice: "$123,040",
    preOrderPrice: "$12,304",
    image: "img/products/Audi A8.jpg",
    description: "The most understated of the luxury flagships, focusing on technical precision and stealthy Black Edition aesthetics.",
    history: "The A8 pioneered the Audi Space Frame (ASF) in 1994, using an all-aluminum chassis to reduce weight while maintaining Quattro all-wheel-drive dominance.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.4 s", 
        engine: "4.0L V8 TFSI", 
        weight: "2,265 kg" 
    },
    editions: {
        "Black": { m: 150000, p: 15000, img: "img/products/Audi A8.jpg" },
    }
},


    {
    id: 42, 
    brand: "Range Rover",
    name: "Range Rover Autobiography Black (2014)",
    category: "Black Editons",
    fullPrice: "$210,000",
    preOrderPrice: "$21,000",
    image: "img/products/RR 2014 BLACKEDITION.jpg",
    description: "The pinnacle of the L405 generation, featuring a long wheelbase and Executive Class rear seating. It is distinguished by unique chrome detailing and the highest grade of semi-aniline leathers.",
    history: "First announced in 2013, the Black edition was created by Land Rover's Special Vehicle Operations (SVO) to compete with Bentley and Rolls-Royce in the ultra-luxury SUV segment.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.6 s", 
        engine: "4.4L V8 Twin-Turbo", 
        weight: "2,510 kg" 
    },
    editions: {
        "Black": { m: 210000, p: 21000, img: "img/products/RR 2014 BLACKEDITION.jpg" },
    }
},


    {
    id: 43, 
    brand: "Bentley",
    name: "Bentayga S Black (2025)",
    category: "Black Editons",
    fullPrice: "$245,000",
    preOrderPrice: "$12,304.500",
    image: "img/products/Audi A8.jpg",
    description: "A dark-themed powerhouse that swaps all exterior chrome for gloss black. It is notable for being the first Bentley in 105 years to feature black-tinted wings",
    history: "Introduced in 2024 to celebrate a century of Bentley design while leaning into modern stealth aesthetics, focusing on a younger, more aggressive luxury demographic.",
    specs: { 
        speed: "290 km/h", 
        accel: "4.4 s", 
        engine: "4.0L V8 Twin-Turbo", 
        weight: "2,412" 
    },
    editions: {
        "Black": { m: 123040, p: 12304, img: "img/products/Bentayga S BLACKED.jpg" },
    }
},

    {
    id: 44, 
    brand: "Rolls - Royce",
    name: "Cullinan Black Badge (2021)",
    category: "Black Editons",
    fullPrice: "$450,000",
    preOrderPrice: "$45,000",
    image: "img/products/Cullinan Black Badge.jpg",
    description: "The subversive  alter-ego of the Cullinan, featuring a darkened Spirit of Ecstasy, technical carbon fiber interior, and an uprated V12 engine. It is designed for those who traverse without inhibition.",
    history: "Launched in 2019, the Black Badge series transformed the perception of Rolls-Royce from a chauffeur-driven brand to a driver-centric powerhouse for the bold.",
    specs: { 
        speed: "250 km/h", 
        accel: "5.2 s", 
        engine: "6.75L V12 Twin-Turbo", 
        weight: "2,660 kg" 
    },
    editions: {
        "Black": { m: 450000, p: 45000, img: "img/products/Cullinan Black Badge.jpg" },
    }
},

   {
    id: 45, 
    brand: "Rolls - Royce",
    name: "Ghost Black Badge (2021)",
    category: "Black Editons",
    fullPrice: "$400,000",
    preOrderPrice: "$40,000",
    image: "img/products/Ghost Black Badge BLACKED.jpg",
    description: "A Post-Opulent luxury sedan with a minimalist aesthetic. It features an illuminated Pantheon Grille and 22-inch forged wheels, powered by a 592 HP V12.",
    history: "The 2021 Ghost redesign focused on stripped-back luxury. The Black Badge variant added a Magic Carpet Ride air suspension specifically tuned for more aggressive handling.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.6 s", 
        engine: "6.75L V12 Twin-Turbo", 
        weight: "2,490 kg" 
    },
    editions: {
        "Black": { m: 450000, p: 45000, img: "img/products/Ghost Black Badge BLACKED.jpg" },
    }
},

    {
    id: 46, 
    brand: "Jaguar",
    name: "Jaguar XJ Black Edition",
    category: "Black Editons",
    fullPrice: "$95,000",
    preOrderPrice: "$9,500",
    image: "img/products/Jaguar XJ Black Edition (2019).jpg",
    description: "A sleek, supercharged flagship featuring a Black Cherry paint finish and a darkened mesh grille. Inside, it boasts Conker wood trim and lamb’s wool overmats.",
    history: "This specific edition marked the end of the X351 generation in 2019, serving as a final celebration of Jaguar’s long-standing, internal-combustion-powered executive flagship.",
    specs: { 
        speed: "280 km/h", 
        accel: "4.6 s", 
        engine: "5.0L V8 Supercharged", 
        weight: "1,892 kg" 
    },
    editions: {
        "Black": { m: 95000, p: 9500, img: "img/products/Jaguar XJ Black Edition (2019).jpg" },
    }
},

{
    id: 47,
    brand: "Toyota", 
    name: "Toyota GR GT3 (2025)", 
    fullPrice: "$1,250,000", 
    preOrderPrice: "$125,000",
    category: "Sportscar",
    image: "img/products/toyoto_gr_gt3.jpeg", 
    description: "A purpose-built racing machine representing Toyota's peak 'driver-first' development philosophy.",
    specs: { 
        speed: "310 km/h", 
        accel: "3.2s", 
        engine: "5.4L V8", 
        weight: "1,250 kg" 
    },
    editions: {
        "JDM": { m: 1250000, p: 125000, img: "img/products/toyoto gr gt3.jpg" }
    }
},

{
    id: 48, 
    brand: "Toyota", 
    name: "Toyota Supra RZ (2002)", 
    fullPrice: "$250,000", 
    preOrderPrice: "$25,000",
    category: "Sportscar",
    image: "img/products/supra mk4.jpg", 
    description: "The crown jewel of JDM culture, featuring the bulletproof 2JZ-GTE and iconic 90s aerodynamic styling.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.7s", 
        engine: "3.0L 2JZ-GTE I6", 
        weight: "1,580 kg" 
    },
    editions: {
        "JDM": { m: 250000, p: 25000, img: "img/products/supra mk4.jpg" }
    }
},

{
    id: 49, 
    brand: "Subaru", 
    name: "Subaru Impreza 22B STi (1998)", 
    fullPrice: "$300,000", 
    preOrderPrice: "$30,000",
    category: "Sportscar",
    image: "img/products/jdm.jpg", 
    description: "The ultimate rally-bred street machine, limited to only 400 units and built to dominate.",
    specs: { 
        speed: "241 km/h", 
        accel: "4.7s", 
        engine: "2.2L EJ22G Turbo", 
        weight: "1,270 kg" 
    },
    editions: {
        "JDM": { m: 300000, p: 30000, img: "img/products/jdm.jpg" }
    }
},

{
    id: 50, 
    brand: "Toyota", 
    name: "Toyota Sprinter Trueno GT-APEX (1985)", 
    fullPrice: "$45,000", 
    preOrderPrice: "$4,500",
    category: "Sportscar",
    image: "img/products/Toyota Sprinter Trueno jdm.jpg", 
    description: "The lightweight, RWD legend that defined drift culture and became a pop-culture icon.",
    specs: { 
        speed: "195 km/h", 
        accel: "8.5s", 
        engine: "1.6L 4A-GE I4", 
        weight: "940 kg" 
    },
    editions: {
        "JDM": { m: 45000, p: 4500, img: "img/products/Toyota Sprinter Trueno jdm.jpg" }
    }
},

{
    id: 51, 
    brand: "Mitsubishi", 
    name: "Mitsubishi Lancer Evolution IX MR (2005)", 
    fullPrice: "$290,000", 
    preOrderPrice: "$29,000",
    category: "Sportscar",
    image: "img/products/EVOJDM.jpg", 
    description: "The peak of the 4G63-powered Evos, featuring MIVEC technology and a rally-bred AWD system that handles like it's on rails.",
    specs: { 
        speed: "250 km/h", 
        accel: "4.6s", 
        engine: "2.0L 4G63T MIVEC I4", 
        weight: "1,410 kg" 
    },
    editions: {
        "JDM": { m: 290000, p: 29000, img: "img/products/EVOJDM.jpg" }
    }
},

{
    id: 52,
    brand: "Nissan", 
    name: "Nissan Fairlady Z (2003)", 
    fullPrice: "$18,500", 
    preOrderPrice: "$1,850",
    category: "Sportscar",
    image: "img/products/Fair Lady Z jdm.jpg", 
    description: "The rebirth of the Fairlady legend. A pure JDM icon engineered for balance, style, and the high-revving VQ engine.",
    specs: { 
        speed: "250 km/h", 
        accel: "5.4s", 
        engine: "3.5L VQ35DE V6", 
        weight: "1,446 kg" 
    },
    editions: {
        "JDM": { m: 18500, p: 1850, img: "img/products/Fair Lady Z jdm.jpg" }
    }
},



{
    id: 53,
    brand: "Datsun", 
    name: "Datsun 510 Bluebird (1971)", 
    fullPrice: "$42,000", 
    preOrderPrice: "$4,200",
    category: "Classic Sport",
    image: "img/products/Datsun 510 (Bluebird).jpg", 
    description: "The giant-killer of the early 70s. Its independent rear suspension and SOHC engine made it a rally and trans-am legend.",
    specs: { 
        speed: "160 km/h", 
        accel: "9.8s", 
        engine: "1.6L L16 I4", 
        weight: "915 kg" 
    },
    editions: {
        "JDM": { m: 42000, p: 4200, img: "img/products/Datsun 510 (Bluebird).jpg" }
    }
},

{
    id: 54,
    brand: "Toyota", 
    name: "Toyota HiAce KDH (2004)", 
    fullPrice: "$25,000", 
    preOrderPrice: "$2,500",
    category: "Van",
    image: "img/products/kdh jdm.jpg", 
    description: "The backbone of JDM utility, beloved by customizers for its bulletproof D-4D engine.",
    specs: { 
        speed: "145 km/h", 
        accel: "13.0s", 
        engine: "2.5L D-4D Diesel", 
        weight: "1,790 kg" 
    },
    editions: {
        "JDM": { m: 25000, p: 2500, img: "img/products/kdh jdm.jpg" }
    }
},


  {
    id: 55,
    brand: "DeLorean",
    name: "DeLorean DMC-12 (1981)",
    fullPrice: "$541,200",
    preOrderPrice: "$54,120",
    category: "Movie Icons",
    image: "img/products/backtofuturecar.jpg",
    description: "A stainless-steel sports car with gull-wing doors that travels through time.",
    history: "Modified by Doc Brown with a Flux Capacitor; it only needs to hit 142 km/h (88 mph) to make history.",
    specs: {
      speed: "209 km/h",
      accel: "10.5s",
      engine: "2.85L V6 PRV",
      weight: "1,230 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 541200, p: 54120, img: "img/products/backtofuturecar.jpg" }
    }
  },
  {
    id: 56,
    brand: "Aston Martin",
    name: "Aston Martin DB5 (1964)",
    fullPrice: "$6,400,000",
    preOrderPrice: "$640,000",
    category: "Movie Icons",
    image: "img/products/JB DB2.jpg",
    description: "The quintessential spy car, equipped with gadgets for the world's most famous secret agent.",
    history: "First debuting in Goldfinger, this vehicle set the gold standard for cinematic spy gadgets.",
    specs: {
      speed: "233 km/h",
      accel: "8.2s",
      engine: "4.0L Inline-6",
      weight: "1,502 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 6400000, p: 640000, img: "img/products/JB DB2.jpg" }
    }
  },
  {
    id: 57,
    brand: "Dodge",
    name: "Dodge Charger R/T (1970)",
    fullPrice: "$1,500,000",
    preOrderPrice: "$150,000",
    category: "Movie Icons",
    image: "img/products/DOM FF.jpg",
    description: "A supercharged beast of a muscle car that became the symbol of family and street racing.",
    history: "Hand-built by Dominic Toretto and his father, known for its massive torque and iconic wheelies.",
    specs: {
      speed: "322 km/h",
      accel: "3.1s",
      engine: "900hp Supercharged Chrysler 426 Hemi V8",
      weight: "1,724 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 1500000, p: 150000, img: "img/products/DOM FF.jpg" }
    }
  },
  {
    id: 58,
    brand: "GMC",
    name: "The Rust Bucket (1973)",
    fullPrice: "$1,200,000",
    preOrderPrice: "$120,000",
    category: "Movie Icons",
    image: "img/products/ben 1- rv.jpg",
    description: "A classic motorhome hiding advanced Plumber technology and alien defense systems.",
    history: "The mobile base for Max, Ben, and Gwen Tennyson during their summer road trip adventures.",
    specs: {
      speed: "483 km/h",
      accel: "4.3s",
      engine: "7.5L V8 + Jet Propulsion",
      weight: "5,670 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 1200000, p: 120000, img: "img/products/ben 1- rv.jpg" }
    }
  },
  {
    id: 59,
    brand: "British Leyland",
    name: "Mini 1000 Mark IV (1977)",
    fullPrice: "$85,000",
    preOrderPrice: "$8,500",
    category: "Movie Icons",
    image: "img/products/mr bean car.jpg",
    description: "A nimble, bright green city car famous for its external padlock and rooftop driving.",
    history: "The loyal, if frequently battered, companion to Mr. Bean through his many comedic mishaps.",
    specs: {
      speed: "132 km/h",
      accel: "18.5s",
      engine: "998cc Inline-4",
      weight: "617 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 85000, p: 8500, img: "img/products/mr bean car.jpg" }
    }
  },
  {
    id: 60,
    brand: "Dodge",
    name: "The Mystery Machine",
    fullPrice: "$250,000",
    preOrderPrice: "$25,000",
    category: "Movie Icons",
    image: "img/products/scoob van.jpg",
    description: "A brightly colored van used by Mystery Inc. to travel between haunted locations.",
    history: "The primary transport for Scooby and the gang, equipped with various detective tools.",
    specs: {
      speed: "153 km/h",
      accel: "12.5s",
      engine: "3.7L Slant-6",
      weight: "1,588 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 250000, p: 25000, img: "img/products/scoob van.jpg" }
    }
  },
  {
    id: 61,
    brand: "Custom",
    name: "Burton Batmobile (1989)",
    fullPrice: "$1,500,000",
    preOrderPrice: "$150,000",
    category: "Movie Icons",
    image: "img/products/BATMOBILE.jpg",
    description: "A long, jet-turbine-powered interceptor designed for high-speed pursuit in Gotham City.",
    history: "This sleek, gothic design redefined Batman’s transport for a more serious, cinematic era.",
    specs: {
      speed: "531 km/h",
      accel: "3.8s",
      engine: "Jet Turbine Engine",
      weight: "1,361 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 1500000, p: 150000, img: "img/products/BATMOBILE.jpg" }
    }
  },
  {
    id: 62,
    brand: "Ford",
    name: "Falcon XB GT Interceptor (1973)",
    fullPrice: "$550,000",
    preOrderPrice: "$55,000",
    category: "Movie Icons",
    image: "img/products/MAD MAX.jpg",
    description: "A battle-hardened V8 Interceptor built for survival in the post-apocalyptic wasteland.",
    history: "Known as the 'Last of the V8s,' this car is as legendary as Max Rockatansky himself.",
    specs: {
      speed: "225 km/h",
      accel: "5.9s",
      engine: "351 Cleveland V8",
      weight: "1,497 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 550000, p: 55000, img: "img/products/MAD MAX.jpg" }
    }
  },
  {
    id: 63,
    brand: "Cadillac",
    name: "Ecto-1 (1959)",
    fullPrice: "$350,000",
    preOrderPrice: "$35,000",
    category: "Movie Icons",
    image: "img/products/Ghost busters.jpg",
    description: "A heavily modified ambulance used for responding to paranormal emergencies.",
    history: "A derelict vehicle found by Ray Stantz and converted into the Ghostbusters' signature mobile unit.",
    specs: {
      speed: "177 km/h",
      accel: "11.8s",
      engine: "6.4L V8",
      weight: "3,311 kg"
    },
    editions: {
      "MOVIE ICONS": { m: 350000, p: 35000, img: "img/products/Ghost busters.jpg" }
    }
  },

  {
    id: 64, brand: "Nissan", name: "Nissan Sky-line GTR R34 (2002)", fullPrice: "$$3,000,000", preOrderPrice: "$3,000,000",
    category: ["JDM","Sportscar,Movie Icon,Movie Icons"],
    image: "img/products/r34 paul walker.jpg", description: "The icon of JDM culture, known as Godzilla.",
    specs: { speed: "250 km/h", accel: "4.7s", engine: "2.6L Twin-Turbo I6", weight: "1,560 kg" },
    editions: {
    "MOVIE ICONS": { m: 3000000, p: 300000, img: "img/products/r34 paul walker.jpg" },
    "MOVIE ICONS2": { m: 3900000, p: 390000, img: "img/products/r34 paul 2.jpg"}
    }
},


{
    id: 65, brand: "BMW", name: "BMW M3 GTR (2001)", fullPrice: "$2,000,000", preOrderPrice: "$200,000",
    category: "Movie Icons",
    image: "img/products/nfs mw.jpg", description: "The hero car of Need for Speed: Most Wanted.",
    specs: { speed: "295 km/h", accel: "4.0s", engine: "4.0L V8", weight: "1,350 kg" },
    editions: {
        "MOVIE ICONS": { m: 2000000, p: 200000, img: "img/products/nfs mw.jpg" }
    }
},


{
    id: 66, brand: "Fleetwood", name: "Bounder Breaking Bad Edition (1986)", fullPrice: "$85,000", preOrderPrice: "$8,500",
    category: "Movie Icons",
    image: "img/products/breaking bad rv for mvo.jpg", description: "A piece of television history.",
    specs: { speed: "120 km/h", accel: "25s", engine: "V8 Gas Engine", weight: "6,500 kg" },
    editions: {
        "MOVIE ICONS": { m: 85000, p: 8500, img: "img/products/breaking bad rv for mvo.jpg" }
    },

},

{
    id: 67, brand: "Lancia", name: "Rally 037 (1983)", fullPrice: "$1,850,000", preOrderPrice: "$185,000",
    category: "Rally Legends",
    image: "img/products/lancia rally.jpeg", description: "A legendary mid-engine RWD monster built to conquer the brutal Group B rally era.",
    history: "Designed by Abarth and Pininfarina, it famously defeated the all-wheel-drive Audi Quattros to win the 1983 World Rally Championship.",
    specs: { speed: "249 km/h", accel: "4.0s", engine: "2.0L Supercharged Inline-4", weight: "960 kg" },
    editions: {
        "Rally Legend": { m: 1850000, p: 185000, img: "img/products/lancia rally.jpeg" }
    }

},

{
    id: 68,
    brand: "Vega Innovations",
    name: "Vega EVX",
    fullPrice: "$250,000",
    preOrderPrice: "$25,000",
    category: "Supercars",
    image: "img/products/img/products/VEGA EVX.jpg",
    description: "South Asia's first all-electric supercar, featuring a handcrafted carbon fiber body.",
    history: "Developed in Sri Lanka, the EVX represents a major milestone in regional EV technology.",
    specs: { speed: "240 km/h", accel: "3.1s", engine: "Dual-Motor AWD", weight: "2,090 kg" },
    editions: { "Standard": { m: 250000, p: 25000, img: "img/products/VEGA EVX.jpg" } }
  },
  {
    id: 69,
    brand: "Dallara",
    name: "Yevan David F3",
    fullPrice: "$120,000",
    preOrderPrice: "$12,000",
    category: "Racing",
    image: "img/products/F3 YEVAN.jpg",
    description: "A high-downforce racer carrying the Sri Lankan flag in global FIA championships.",
    history: "Driven by Yevan David, the first Sri Lankan to reach this tier of international racing.",
    specs: { speed: "270 km/h", accel: "3.0s", engine: "3.4L V6", weight: "590 kg" },
    editions: { "Race Spec": { m: 120000, p: 12000, img: "img/products/F3 YEVAN.jpg" } }
  },
  {
    id: 70,
    brand: "Rover",
    name: "Rover 90 (P4 Series)",
    fullPrice: "$45,000",
    preOrderPrice: "$4,500",
    category: "Classics",
    image: "img/products/ROVER 90.jpg",
    description: "A dignified British luxury saloon known for its 'suicide' doors and walnut interior.",
    history: "A symbol of mid-century prestige, frequently preserved in classic collections.",
    specs: { speed: "145 km/h", accel: "18.9s", engine: "2.6L Straight-Six", weight: "1,475 kg" },
    editions: { "Collector": { m: 45000, p: 4500, img: "img/products/ROVER 90.jpg" } }
  },
  {
    id: 71,
    brand: "Morris",
    name: "Morris Eight",
    fullPrice: "$30,000",
    preOrderPrice: "$3,000",
    category: "Classics",
    image: "img/products/morris.jpg",
    description: "The quintessential pre-war 'baby' car that brought motoring to the masses.",
    history: "A staple of early 20th-century roads, now a prized vintage rally car.",
    specs: { speed: "93 km/h", accel: "30.0s", engine: "918cc Inline-4", weight: "725 kg" },
    editions: { "Vintage": { m: 30000, p: 3000, img: "img/products/morris.jpg" } }
  },

{
id: 72,
    brand: "Bajaj",
    name: "Bajaj RE",
    fullPrice: "$2,800",
    preOrderPrice: "$280",
    category: "Three-Wheelers",
    image: "img/products/BAJAJ RE.jpg",
    description: "The classic high-revving 2-stroke three-wheeler that defined an era of transport.",
    history: "A cultural icon in Sri Lanka, renowned for its maneuverability and reliability.",
    specs: { speed: "85 km/h", accel: "N/A", engine: "145cc 2-Stroke", weight: "284 kg" },
    editions: {
        "standard": { m: 2800, p: 280, img: "img/products/BAJAJ RE.jpg" },
        "special":  { m: 4800, p: 480, img: "img/products/limited ed rally bajaj.jpg" },
    }
},
  {
    id: 73,
    brand: "Vega Innovations",
    name: "Vega ETX Tuk-Tuk",
    fullPrice: "$5,500",
    preOrderPrice: "$550",
    category: "Electric",
    image: "img/products/VEGA TUK.jpg",
    description: "A futuristic, fully electric three-wheeler designed for sustainable urban transport.",
    history: "A modern reimagining of the traditional tuk-tuk using advanced EV technology.",
    specs: { speed: "70 km/h", accel: "N/A", engine: "10kW Electric Motor", weight: "450 kg" },
    editions: { "Electric": { m: 5500, p: 550, img: "img/products/VEGA TUK.jpg" } }
  },
  
  {
    id: 74,
    brand: "Mercedes-Benz",
    name: "Mercedes L-Series Bus",
    fullPrice: "$65,000",
    preOrderPrice: "$6,500",
    category: "Commercial",
    image: "img/products/BENZE L SER.jpg",
    description: "The legendary 'bull-nose' bus known for its incredible durability.",
    history: "The backbone of public transport in Sri Lanka for decades.",
    specs: { speed: "95 km/h", accel: "N/A", engine: "5.7L Diesel", weight: "4,800 kg" },
    editions: { "Classic": { m: 65000, p: 6500, img: "img/products/BENZE L SER.jpg" } }
  },
  {
    id: 75,
    brand: "Mercedes-Benz",
    name: "Mercedes-Benz OP 312",
    fullPrice: "$70,000",
    preOrderPrice: "$7,000",
    category: "Commercial",
    image: "img/products/BENZE OP312.jpg",
    description: "A classic mid-century bus chassis used for premium coach transport.",
    history: "Favored for its smooth ride and reliable German engineering in the post-war era.",
    specs: { speed: "90 km/h", accel: "N/A", engine: "4.6L Diesel Inline-6", weight: "4,600 kg" },
    editions: { "Restored": { m: 70000, p: 7000, img: "img/products/BENZE OP312.jpg" } }

  },

    {
    id: 76,
    brand: "Bajaj",
    name: "Bajaj RE Limited Edition Rally",
    fullPrice: "$4,800",
    preOrderPrice: "$480",
    category: "Three-Wheelers",
    image: "img/products/limited ed rally bajaj.jpg",
    description: "The classic high-revving 2-stroke three-wheeler that defined an era of transport.",
    history: "A cultural icon in Sri Lanka, renowned for its maneuverability and reliability.",
    specs: { speed: "135 km/h", accel: "5.2", engine: "145cc 2-Stroke special tune up", weight: "234 kg" },
    editions: { "special": { m: 2800, p: 280, img: "img/products/limited ed rally bajaj.jpg" } }
  },

];



function updatePrices(selectElement) {
    const carID = localStorage.getItem('carID') || "1";
    const selectedEdition = selectElement.value;
    const currentCar = carData.find(car => car.id == carID);

    if (currentCar) {
        let marketPrice, prePrice, displayImg;

        // 1. Price and Image Logic
        if (currentCar.editions && currentCar.editions[selectedEdition]) {
            const data = currentCar.editions[selectedEdition];
            marketPrice = data.m;
            prePrice = data.p;
            displayImg = data.img;
        } else {
            const basePrice = Number(currentCar.fullPrice.replace(/[^0-9.-]+/g, ""));
            const basePre = Number(currentCar.preOrderPrice.replace(/[^0-9.-]+/g, ""));

            if (selectedEdition === "standard") {
                marketPrice = basePrice;
                prePrice = basePre;
            } else if (selectedEdition === "premium") {
                marketPrice = basePrice * 1.2;
                prePrice = basePre * 1.2;
            } else if (selectedEdition === "special") {
                marketPrice = basePrice * 1.5;
                prePrice = basePre * 1.5;
            }
            displayImg = currentCar.image;
        }

        // Apply to HTML
        document.getElementById('marketPrice').innerText = "$" + Math.round(marketPrice).toLocaleString();
        document.getElementById('prePrice').innerText = "$" + Math.round(prePrice).toLocaleString();
        document.getElementById('MainImg').src = displayImg;

        // 2. Specs Update Logic (Inside Function)
        if (currentCar.specs) {
            const speedEl = document.getElementById('stat-speed');
            const accelEl = document.getElementById('stat-accel');
            const engineEl = document.getElementById('stat-engine');
            const weightEl = document.getElementById('stat-weight');

            if (typeof currentCar.specs === 'object') {
                speedEl.innerText = currentCar.specs.speed || "--";
                accelEl.innerText = currentCar.specs.accel || "--";
                engineEl.innerText = currentCar.specs.engine || "--";
                weightEl.innerText = currentCar.specs.weight || "--";
            } else if (typeof currentCar.specs === 'string') {
                const parts = currentCar.specs.split('|');
                speedEl.innerText = parts[0]?.trim() || "--";
                accelEl.innerText = parts[1]?.trim() || "--";
                engineEl.innerText = parts[2]?.trim() || "--";
                weightEl.innerText = parts[3]?.trim() || "--";
            }
        }

document.querySelector(".single-pro-details h6").innerText = "Home / " + currentCar.brand;
        document.querySelector(".single-pro-details h4").innerText = currentCar.name;
        


// 1. Updating Description Part 

const descElement = document.getElementById('pro-description');
if (descElement) {
    descElement.innerText = currentCar.description;
}

// 2. Update the History
const historyWrapper = document.getElementById('history-wrapper');
const historyText = document.getElementById('pro-history');

if (currentCar.history) {
    // If car has history (like the Veneno or F40), show it
    historyWrapper.style.display = "block";
    historyText.innerText = currentCar.history;
} else {
    // If no history exists (like the Jesko), hide the whole section
    historyWrapper.style.display = "none";
}
        // 4. Update Gallery
        const smallImgs = document.getElementsByClassName("smallimg");
        if (currentCar.editions) {
            const editionKeys = Object.keys(currentCar.editions);
            for (let i = 0; i < smallImgs.length; i++) {
                if (editionKeys[i]) {
                    smallImgs[i].src = currentCar.editions[editionKeys[i]].img;
                } else {
                    smallImgs[i].src = currentCar.image;
                }
            }
        }
    }
}

window.onload = function() {
    const carID = localStorage.getItem('carID');
    const currentCar = carData.find(car => car.id == carID);
    const select = document.getElementById('edition-select');

    if (currentCar && select) {
        select.innerHTML = "";
        const availableEditions = Object.keys(currentCar.editions || {"standard": {}});
        availableEditions.forEach(editionKey => {
            const option = document.createElement("option");
            option.value = editionKey;
            option.text = editionKey.charAt(0).toUpperCase() + editionKey.slice(1);
            select.appendChild(option);
        });
        select.value = availableEditions[0];
        updatePrices(select);
    }
};

// Function to add a car to the cart
function addToCart(buttonElement) {
    // 1. Get data from the specific button clicked
    const vehicleName = buttonElement.getAttribute('data-name');
    const vehiclePrice = buttonElement.getAttribute('data-price');

    // 2. Find the popup elements
    const popup = document.getElementById('cart-popup');
    const message = document.getElementById('popup-message');

    // 3. Update the popup text dynamically
    message.innerHTML = `
        <div style="font-size: 0.9em; color: #666;">Success!</div>
        <strong style="display:block; margin: 5px 0;">${vehicleName}</strong>
        <span style="color: #a00d12; font-weight: bold;">$${Number(vehiclePrice).toLocaleString()}</span> 
        added to your cart.
    `;

    // 4. Show the popup
    popup.style.display = 'block';

    // 5. Logic to actually "add" it (optional)
    console.log(`Adding ${vehicleName} to the database at $${vehiclePrice}`);
}


// Function to display items on the Cart Page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.querySelector('#cart tbody');
    let subtotalElement = document.getElementById('cart-subtotal');
    let totalElement = document.getElementById('cart-total');
    let totalAmount = 0;

    if (!cartTable) return;

    cartTable.innerHTML = "";

    if (cart.length === 0) {
        cartTable.innerHTML = "<tr><td colspan='6'>Your showroom is empty.</td></tr>";
    }

    cart.forEach((item, index) => {
        // Clean price: remove symbols and commas
        let priceNum = parseFloat(item.price.replace(/[$,]/g, ''));
        let subtotal = priceNum * item.quantity;
        totalAmount += subtotal;

        cartTable.innerHTML += `
            <tr>
                <td><i class="far fa-times-circle" onclick="removeItem(${index})" style="cursor:pointer; color:#e74c3c;"></i></td>
                <td><img src="${item.image}" alt=""></td>
                <td>
                    <strong>${item.name}</strong><br>
                    <small style="color:#888;">${item.edition} Edition</small>
                </td>
                <td>${item.price}</td>
                <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
                <td style="font-weight:700;">$${subtotal.toLocaleString()}</td>
            </tr>
        `;
    });

    if(subtotalElement) subtotalElement.innerText = `$${totalAmount.toLocaleString()}`;
    if(totalElement) totalElement.innerText = `$${totalAmount.toLocaleString()}`;
}

// Helper functions for the UI
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function updateQuantity(index, val) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity = parseInt(val);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Run displayCart if we are on the cart page
if (window.location.pathname.includes('cart.html')) {
    window.onload = displayCart;
}



function addToCartFromProductPage() {
    const btn = document.querySelector(".normal");
    const carID = localStorage.getItem('carID');
    const currentCar = carData.find(car => car.id == carID);
    
    // 1. Get the quantity from the input field
    const quantityInput = document.getElementById('quantity-input');
    const selectedQuantity = parseInt(quantityInput.value) || 1;

    // Start Loading Animation
    btn.classList.add("loading");
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> SECURING...`;

    // Simulate a high-end server check (800ms delay)
    setTimeout(() => {
        const select = document.getElementById('edition-select');
        const editionKey = select.value;
        const editionDetails = currentCar.editions[editionKey];

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // 2. Check if the same car edition is already in the cart
        const existingItem = cart.find(item => item.id === carID && item.edition === editionKey);

        if (existingItem) {
            // Update quantity if it exists
            existingItem.quantity += selectedQuantity;
        } else {
            // Add as a new item if it doesn't
            cart.push({
                id: carID,
                name: currentCar.name,
                edition: editionKey,
                price: `$${editionDetails.p.toLocaleString()}`, // Pre-order price
                image: editionDetails.img,
                quantity: selectedQuantity // 3. Use the dynamic quantity here
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        // Switch to Success State
        btn.classList.remove("loading");
        btn.classList.add("added");
        btn.innerHTML = `<i class="fas fa-check"></i> DEPOSIT SECURED`;

        // Cart Icon Animation (Bump effect)
        const cartIcon = document.querySelector(".fa-cart-plus");
        if (cartIcon) {
            cartIcon.classList.add("bump");
            setTimeout(() => cartIcon.classList.remove("bump"), 400);
        }

        // Reset button after 4 seconds
        setTimeout(() => {
            btn.classList.remove("added");
            btn.innerHTML = "Add To Cart";
        }, 4000);
        
    }, 800); // 0.8 seconds for a snappy, premium response
}

// --- UI Visual Change for Initial Interaction ---
// This handles the immediate UI feedback when the script loads or the button is first interacted with
const actionBtn = document.querySelector(".normal"); 
if (actionBtn) {
    const originalText = actionBtn.innerText;
    
    // Example: If you want to trigger a visual state immediately on click 
    // before the timeout starts, you can move this logic into a click listener.
}


