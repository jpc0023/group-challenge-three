const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();


  const categories = await Category.insertMany([
    { name: 'Case' },
    { name: 'Motherboard' },
    { name: 'CPU' },
    { name: 'GPU' },
    { name: 'RAM' },
    { name: 'Storage' },
    { name: 'Cooling' },
    { name: 'Power Supply' },
    { name: 'Monitor' },
    { name: 'OS' },
    { name: 'Keyboard' },
    { name: 'Mouse'}
  ]);


  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
        name: "Montech X3 Mesh 6pcs, 3 x 140mm& 3 x 120mm Fixed RGB Lighting Fans ATX Mid-Tower PC Gaming Case",
        description: "a desktop case that is from Montech",
        price: 152.61,
        category: "Case"
    },
    {
        name: "LIAN LI PC-O11 Dynamic White Tempered Glass on the Front and Left Sides, Chassis Body SECC ATX Mid Tower Gaming Computer Case",
        description: "a desktop case that is from Lian",
        price: 242.97,
        category: "Case"
    },
    {
        name: "GameMax ATX Mid Tower Black / Grey Computer Case",
        description: "a desktop case that is from Gamemax",
        price: 214.63,
        category: "Case"
    },
    {
        name: "Thermaltake The Tower 900 Computer Case ",
        description: "a desktop case that is from Thermaltake",
        price: 196.74,
        category: "Case"
    },
    {
        name: "Sama ATX Mid Tower Black Computer Case",
        description: "a desktop case that is from Sama",
        price: 189.29,
        category: "Case"
    },
    {
        name: "Vetroo K1 Pangolin Mid-Tower ATX PC Gaming Case",
        description: "a desktop case that is from Vetroo",
        price: 195.54,
        category: "Case"
    },
    {
        name: "NZXT H510 Elite - Premium Mid-Tower ATX Case PC Gaming Case ",
        description: "a desktop case that is from NZXT",
        price: 240.74,
        category: "Case"
    },
    {
        name: "Diypc Rainbow-Flash-F4-P Pink USB 3.0 Steel / Tempered Glass ATX Mid Tower Computer Case",
        description: "a desktop case that is from Diypc",
        price: 134.60,
        category: "Case"
    },
    {
        name: "Asus B550-F ROG Strix Gaming AMD AM4 ATX Motherboard",
        description: "a motherboard from Asus",
        price: 270.85,
        category: "Motherboard"
    },
    {
        name: "MSI Pro Z690-A DDR4 LGA 1700 ATX Motherboard",
        description: "a motherboard from MSI",
        price: 297.82,
        category: "Motherboard"
    },
    {
        name: "Gigabyte B550I Aorus Pro Ax AMD AM4 Mini-ITX Motherboard",
        description: "a motherboard from Aorus",
        price: 353.77,
        category: "Motherboard"
    },
    {
        name: "Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W",
        description: "a Intel processor with 16 cores",
        price: 358.18,
        category: "CPU"
    },
    {
        name: "AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor",
        description: "a Ryzen processor with 12 cores",
        price: 260.72,
        category: "CPU"
    },
    {
        name: "Intel® Core™ i7-11700 Desktop Processor 8 Cores up to 4.9 GHz LGA1200 (Intel® 500 Series & Select 400 Series Chipset) 65W",
        description: "a Intel processor with 8 cores",
        price: 294.26,
        category: "CPU"
    },
    {
        name: "AMD Ryzen 7 5700G 8-Core, 16-Thread Unlocked Desktop Processor with Radeon Graphics",
        description: "a Ryzen processor with 8 cores",
        price: 262.04,
        category: "CPU"
    },
    {
        name: "MSI Gaming GeForce RTX 3050 8GB GDDR6 Video Card",
        description: "a graphics card from MSI",
        price: 355.80,
        category: "GPU"
    },
    {
        name: "Nvidia GeForce RTX 3060 Ti 8GB GDDR6 PCI Express 4.0 Graphics Card",
        description: "a graphics card from Nvidia",
        price: 216.28,
        category: "GPU"
    },
    {
        name: "Zotac Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6 Graphics Card",
        description: "a graphics card from Zotac",
        price: 328.73,
        category: "GPU"
    },
    {
        name: "PowerColor Red Devil AXRX 6900XT 16GBD6-3DHE/OC Graphics Card",
        description: "a graphics card from PowerColor",
        price: 281.25,
        category: "GPU"
    },
    {
        name: "Corsair Vengeance RGB Pro 32GB (2 x 16GB) DDR4 SDRAM Memory Kit",
        description: "two 16GB RAMs from Corsair",
        price: 166.89,
        category: "RAM"
    },
    {
        name: "PNY Memory MN16GSD42666 16GB DDR4 2666MHz Notebook",
        description: "a 16GB RAM from PNY",
        price: 171.15,
        category: "RAM"
    },
    {
        name: "G. Skill 8GB Aegis DDR4 Pc4-24000 3000MHz",
        description: "a 8GB RAM from G. Skill",
        price: 134.97,
        category: "RAM"
    },
    {
        name: "Kingston Fury Impact 16GB (2 x 8GB) DDR4 SDRAM Memory Kit",
        description: "two 8GB RAMs from Kingston",
        price: 90.36,
        category: "RAM"
    },
    {
        name: "XPG GAMMIX D20 Desktop Memory 16GB (2 x 8GB) DDR4 3200MHz Cl16 Black",
        description: "two 8GB RAMs from XPG",
        price: 146.49,
        category: "RAM"
    },
    {
        name: "Team T-Force Vulcan TUF Gaming Alliance 16GB (2 x 8GB) DDR4 3200 (PC4 25600) Memory",
        description: "a 16GB RAM from Team T-Force",
        price: 135.60,
        category: "RAM"
    },
    {
        name: "Kimtigo KTP-650 SSD 256GB 512GB M.2 2280 NVME PCIE Gen 3x4",
        description: "a solid state drive from Kimtigo",
        price: 89.47,
        category: "Storage"
    },
    {
        name: "WD Blue 2TB Hard Drive - 3.5 Internal SATA",
        description: "a internal hard drive from WD",
        price: 151.50,
        category: "Storage"
    },
    {
        name: "Seagate Barracuda ST2000DM008 2 TB 3.5 Internal Hard Drive - SATA",
        description: "a internal hard drive from Seagate",
        price: 151.85,
        category: "Storage"
    },
    {
        name: "Samsung MZ-V8P2T0B-AM 980 Pro 2 TB M.2 SSD",
        description: "a solid state drive from Samsung",
        price: 147.55,
        category: "Storage"
    },
    {
        name: "Toshiba Hdwl120xzsta L200 2TB Laptop Internal Hard Drive",
        description: "a internal hard drive from Toshiba",
        price: 84.68,
        category: "Storage"
    },
    {
        name: "Corsair iCUE H150i Elite LCD Display Liquid CPU Cooler",
        description: "a cooling unit from Corsair",
        price: 60.44,
        category: "Cooling"
    },
    {
        name: "Evercool HPS-810CP LGA115X/775/FM2+/FM2 Low profile CPU Cooler",
        description: "a cooling unit from Evercool",
        price: 177.74,
        category: "Cooling"
    },
    {
        name: "MSI CPU Cooler Silver/Black (MSI Core Frozr L)",
        description: "a cooling unit from MSI",
        price: 107.75,
        category: "Cooling"
    },
    {
        name: "Montech Air Cooler 210 210W TDP ARGB CPU Cooler",
        description: "a cooling unit from Montech",
        price: 161.15,
        category: "Cooling"
    },
    {
        name: "Iceberg Thermal IceSLEET X5 Intel and AMD High Performance CPU Cooler",
        description: "a cooling unit from Iceberg",
        price: 91.93,
        category: "Cooling"
    },
    {
        name: "Thermaltake - Smart 700W ATX 80 Plus Power Supply",
        description: "a power supply unit from Thermaltake",
        price: 103.40,
        category: "Power Supply"
    },
    {
        name: "Corsair CV Series Cv750 750W 80 Plus Power Supply",
        description: "a power supply unit from Corsair",
        price: 105.94,
        category: "Power Supply"
    },
    {
        name: "FlePow Power Supply 850W 80 Plus Gold with RGB Light",
        description: "a power supply unit from FlePow",
        price: 82.00,
        category: "Power Supply"
    },
    {
        name: "EVGA 500BR Power Supply 500W 80 Plus",
        description: "a power supply unit from EVGA",
        price: 100.09,
        category: "Power Supply"
    },
    {
        name: "BlitzWolf BW-CP1 400W PC ATX 80 Plus Power Supply",
        description: "a power supply unit from BlitzWolf",
        price: 165.35,
        category: "Power Supply"
    },
    {
        name: "Solid Gear SDGR Flex320 320W Mini ITX Flex ATX Power Supply",
        description: "a power supply unit from Solid Gear",
        price: 91.71,
        category: "Power Supply"
    },
    {
        name: "Samsung Odyssey 49'' G9 Curved Qled Gaming Monitor",
        description: "a monniter from Samsung",
        price: 114.19,
        category: "Monitor"
    },
    {
        name: "AOC 27G2 Frameless Gaming IPS Monitor",
        description: "a monitor from AOG",
        price: 156.43,
        category: "Monitor"
    },
    {
        name: "Element EMFPAC22B 22'' 1080p Frameless LCD PC Monitor",
        description: "a monitor from Element",
        price: 200.35,
        category: "Monitor"
    },
    {
        name: "HP - 21.5'' IPS LED Full HD FreeSync Monitor",
        description: "a monitor from HP",
        price: 45.44,
        category: "Monitor"
    },
    {
        name: "Sceptre 24'' E248W-19203S 75Hz Full HD 1080p LED Monitor",
        description: "a monitor from Sceptre",
        price: 162.00,
        category: "Monitor"
    },
    {
        name: "Asus- ROG Strix 49'' Curved FHD 144Hz FreeSync Gaming Monitor",
        description: "a monitor from Asus",
        price: 122.19,
        category: "Monitor"
    },
    {
        name: "Windows 10 OS",
        description: "The most recent operating system for Windows",
        price: 49.99,
        category: "OS"
    },
    {
        name: "Monterey",
        description: "The most recent operating system for Apple",
        price: 49.99,
        category: "OS"
    },
    {
        name: "Ubuntu",
        description: "One of the most popular operating system for Linux",
        price: 0,
        category: "OS"
    },
    {
        name: "Logitech MX Keys Wireless Keyboard - Black",
        description: "a keyboard from Logitech",
        price: 175.11,
        category: "Keyboard"
    },
    {
        name: "Keychron K2 Wireless Bluetooth/USB Wired Gaming Mechanical",
        description: "a keyboard from Keychron",
        price: 42.38,
        category: "Keyboard"
    },
    {
        name: "Razer Huntsman Elite Keyboard",
        description: "a keyboard from Razer",
        price: 133.35,
        category: "Keyboard"
    },
    {
        name: "Dell KB216 USB Keyboard",
        description: "a keyboard from Dell",
        price: 212.77,
        category: "Keyboard"
    },
    {
        name: "Glorius Model O Minus Gaming Mouse - Matte Black",
        description: "a compouter mouse from Glorius",
        price: 41.55,
        category: "Mouse"
    },
    {
        name: "Microsoft 222-00017 Bluetooth Ergonomic Mouse - Glacier",
        description: "a computer mose from Microsoft",
        price: 74.73,
        category: "Mouse"
    },
    {
        name: "Apple Magic Mouse 2 Rechargeable Bluetooth Wireless Multitouch",
        description: "a computer mouse from Apple",
        price: 55.37,
        category: "Mouse"
    },
    {
        name: "SteelSeries - Rival 3 Wired Optical Gaming Mouse",
        description: "a computer mouse from SteelSeries",
        price: 107.87,
        category: "Mouse"
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  const users = await User.insertMany([
    {
        firstName: 'Semi',
        lastName: 'Harris',
        email: "semiharris@gmail.com",
        password: "Khyaire11"
    },
    {
        firstName: 'James',
        lastName: 'Crowell',
        email: 'jamespcrowell@mail.com',
        password: 'testing1'
    }
]);

  console.log('users seeded');

  process.exit();
});
