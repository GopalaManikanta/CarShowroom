const carsData = [
  {
    id: 1,
    name: "BMW X5",
    price: "₹95 Lakhs",
    image: "https://th.bing.com/th/id/R.40a89045c4413c5292358396858bb44d?rik=sh4voTMQeg31QA&riu=http%3a%2f%2fimages.hgmsites.net%2fhug%2f2015-bmw-x5-series_100487699_h.jpg&ehk=YX3yJDC6nOMGmHyURvivdeDQfpmR518FfzxWgHuCuz0%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 2,
    name: "Audi Q7",
    price: "₹90 Lakhs",
    image: "https://tse1.mm.bing.net/th/id/OIP.RVbaSuEVPNLbCgVeGBdyMgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    name: "Mercedes GLE",
    price: "₹1.1 Crore",
    image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/gle/gle-coupe/byo-options/2022-AMG-GLE-COUPE-MP-029.jpg"
  },
  {
    id: 4,
    name: "Range Rover",
    price: "₹2 Crore",
    image: "https://media.ed.edmunds-media.com/land-rover/range-rover/2024/oem/2024_land-rover_range-rover_4dr-suv_p550e-autobiography_fq_oem_1_1280.jpg  "
  },
  {
    id: 5,
    name: "Porsche 911",
    price: "₹1.8 Crore",
    image: "https://tse1.mm.bing.net/th/id/OIP.kaU4d-Ka5tjC7pGD_3ipOQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "Lamborghini Huracan",
    price: "₹4 Crore",
    image: "https://th.bing.com/th/id/OIP.HCyy4EMq4b10z8GVkpNWvgHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "Ferrari 488",
    price: "₹3.9 Crore",
    image: "https://tse1.mm.bing.net/th/id/OIP.Fr05P9lr2VlQ7LDT0nEFqgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    name: "Tesla Model S",
    price: "₹1.5 Crore",
    image: "https://th.bing.com/th/id/OIP.pmqGP2ghomKh69m_qBexAQHaER?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    name: "Jaguar F-Pace",
    price: "₹85 Lakhs",
    image: "https://tse4.mm.bing.net/th/id/OIP.nr5-lMMw-OUzYeF7naXLcQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 10,
    name: "Volvo XC90",
    price: "₹1 Crore",
    image: "https://tse1.mm.bing.net/th/id/OIP.fBDvXePS7V51pkr7T__ruAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  {
    id: 11,
    name: "BMW M4",
    price: "₹1.4 Crore",
    image: "https://tse4.mm.bing.net/th/id/OIP.d_DFPdk_hFZMB9AqFtXSKgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 12,
    name: "Audi A6",
    price: "₹70 Lakhs",
    image: "https://cdn.motor1.com/images/mgl/ZngoLK/s1/audi-a6-avant-2025.jpg"
  },
  {
    id: 13,
    name: "Mercedes C Class",
    price: "₹75 Lakhs",
    image: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2024/01/untitled-design-5-5.jpg"
  },
  {
    id: 14,
    name: "Toyota Fortuner",
    price: "₹55 Lakhs",
    image: "https://tse3.mm.bing.net/th/id/OIP.XjusbcWZsIvs-72uumPVbgHaFV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 15,
    name: "Hyundai Creta",
    price: "₹20 Lakhs",
    image: "https://tse4.mm.bing.net/th/id/OIP.-urZuBf7NQ2O6jSXEdb4MQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 16,
    name: "Kia Seltos",
    price: "₹22 Lakhs",
    image: "https://d2s8i866417m9.cloudfront.net/photo/27620445/photo/medium-e645c16380a7e394708bed050bbba7fc.jpg"
  },
  {
    id: 17,
    name: "Mahindra XUV700",
    price: "₹28 Lakhs",
    image: "https://img.indianautosblog.com/gallery/2021/10/05/mahindra-xuv700-front-right-fa41.jpeg"
  },
  {
    id: 18,
    name: "Tata Safari",
    price: "₹30 Lakhs",
    image: "https://cdn.cars24.com/prod/auto-news24-cms/Newsroom/2025/02/13/e85b7b41-0dfd-4022-9b7f-0d9baee44018-2025-tata-safari-stealth-edition-design-front-tata.webp"
  },
  {
    id: 19,
    name: "Honda City",
    price: "₹18 Lakhs",
    image: "https://tse1.mm.bing.net/th/id/OIP.-PXtaQ-H9s03-gv9o9yqjwHaEw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 20,
    name: "Skoda Superb",
    price: "₹45 Lakhs",
    image: "https://th.bing.com/th/id/OIP.CvYZxn7jy1cx1vaLdZJVnwHaEI?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  {
    id: 21,
    name: "Nissan GTR",
    price: "₹2.5 Crore",
    image: "https://tse1.explicit.bing.net/th/id/OIP.MBgseJHbUiVe-PdmJFHjCgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 22,
    name: "McLaren 720S",
    price: "₹5 Crore",
    image: "https://pixelz.cc/wp-content/uploads/2019/01/mclaren-720s-spider-blue-uhd-4k-walpaper.jpg"
  },
  {
    id: 23,
    name: "Bentley Bentayga",
    price: "₹4.2 Crore",
    image: "https://media.evo.co.uk/image/private/s--ajgguRWy--/v1600705789/evo/2020/09/2020%20Bentley%20Bentayga%20green.jpg"
  },
  {
    id: 24,
    name: "Rolls Royce Ghost",
    price: "₹8 Crore",
    image: "https://media.ed.edmunds-media.com/rolls-royce/ghost/2025/ot/2025_rolls-royce_ghost_f34_ot_31925_1280.jpg"
  },
  {
    id: 25,
    name: "Mini Cooper",
    price: "₹55 Lakhs",
    image: "https://wallpapers.com/images/hd/mini-cooper-side-view-y9h2bx01bd0t305b.jpg"
  },
  {
    id: 26,
    name: "Jeep Compass",
    price: "₹35 Lakhs",
    image: "https://tse1.mm.bing.net/th/id/OIP.DPFDJjGUgS2zn3B2G13j4wHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 27,
    name: "MG Hector",
    price: "₹25 Lakhs",
    image: "https://fastly-production.24c.in/hello-ar/dev/uploads/9ac006e5-2d64-4b0f-bc0f-23d6c3b0ed8d/f60940eb-cfaf-4439-a8a2-2e4461bbc1fe/43.jpg"
  },
  {
    id: 28,
    name: "Volkswagen Virtus",
    price: "₹19 Lakhs",
    image: "https://static.caronphone.com/public/brands/34/30/30.webp"
  },
  {
    id: 29,
    name: "Toyota Camry",
    price: "₹50 Lakhs",
    image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/04/k71z462b.jpeg"
  },
  {
    id: 30,
    name: "BMW i7",
    price: "₹2 Crore",
    image: "https://tse2.mm.bing.net/th/id/OIP.B1HWIRx3Mg85O2Mn_PeNXQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default carsData;