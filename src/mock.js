// Mock data for Rudra Trading Company

// Helper function to get proper image path
const getImagePath = (imagePath) => `${process.env.PUBLIC_URL}${imagePath}`;

export const companyInfo = {
  name: "Rudra Trading Co.",
  tagline: "Your Reliable Source for Premium Agro Commodities.",
  founded: 2016,
  location: "Jamnagar, Gujarat, India",
  description: "Leading agricultural commodity exporter specializing in sourcing and supplying high-quality grains, pulses, and spices to international markets."
};

export const mission = "To become the most trusted name in agricultural trading by providing superior quality products and exceptional service, while building lasting client relationships through integrity and a customer-centric approach.";

export const vision = "To be recognized as the gold standard for quality in the global agricultural market and foster sustainable growth and mutual success for all partners.";

export const goals = [
  "Set industry benchmarks for quality and excellence",
  "Expand reach locally and internationally",
  "Strengthen partnerships with farmers and suppliers"
];

export const whyChooseUs = [
  {
    title: "Experience & Knowledge",
    description: "Founded in 2016, we bring applied expertise as a purpose-driven exporter specializing in matching the ideal agricultural variety to its specific end-use."
  },
  {
    title: "Strategic Location",
    description: "Jamnagar acts as a key commodity hub for export, enabling efficient management and a smooth, reliable supply chain for global clients."
  },
  {
    title: "Lab & Reports",
    description: "Quality assurance and documentation offering complete transparency. A certified lab report is provided for every product upon request."
  },
  {
    title: "Clean & Sortex Quality",
    description: "Products are carefully processed, free from dust, stones, or impurities. Advanced technology ensures uniform size, color, and purity."
  },
  {
    title: "Commitment to Excellence",
    description: "Reputation built on a strong commitment to excellence through collaboration with farmers and suppliers to meet strict quality standards."
  },
  {
    title: "Long-Term Relationships",
    description: "We believe in building long-term relationships through exceptional service and a focus on quality."
  }
];

export const primaryProducts = [
  {
    id: 1,
    name: "Ajwain",
    category: "Spices",
  image: getImagePath("/product-images/ajwain.jpg"),
    description: "Premium quality ajwain seeds known for their distinctive aroma and medicinal properties."
  },
  {
    id: 2,
    name: "Chickpea",
    category: "Pulses",
  image: getImagePath("/product-images/chickpea.jpg"),
    description: "High-quality chickpeas, carefully processed to meet international standards."
  },
  {
    id: 3,
    name: "Cumin",
    category: "Spices",
  image: getImagePath("/product-images/cumin.jpg"),
    description: "Aromatic cumin seeds sourced from the best farms, ensuring superior quality."
  },
  {
    id: 4,
    name: "Groundnut",
    category: "Oilseeds",
  image: getImagePath("/product-images/groundnut.jpg"),
    description: "Premium groundnuts with excellent oil content and taste."
  },
  {
    id: 5,
    name: "Maize",
    category: "Grains",
  image: getImagePath("/product-images/maize.jpg"),
    description: "High-quality maize kernels ideal for various industrial and food applications."
  },
  {
    id: 6,
    name: "Sesame",

    category: "Oilseeds",
  image: getImagePath("/product-images/sesame.jpg"),
    description: "Premium sesame seeds with high oil content and rich flavor."
  },
  {
    id: 7,
    name: "Wheat",

    category: "Grains",
  image: getImagePath("/product-images/wheat.webp"),
    description: "Superior quality wheat grains meeting stringent international quality standards."
  }
];

export const secondaryProducts = [
  {
    id: 8,
    name: "Barley",

    category: "Grains",
  image: getImagePath("/product-images/barley.jpg"),
    description: "High-grade barley for brewing, food production, and animal feed."
  },
  {
    id: 9,
    name: "Black Gram",

    category: "Pulses",
  image: getImagePath("/product-images/blackgram.webp"),
    description: "Premium black gram (urad dal) with consistent quality."
  },
  {
    id: 10,
    name: "Black Sesame",

    category: "Oilseeds",
  image: getImagePath("/product-images/blacksesame.jpg"),
    description: "Nutrient-rich black sesame seeds with high antioxidant content."
  },
  {
    id: 11,
    name: "Broad Beans",

    category: "Pulses",
  image: getImagePath("/product-images/broadbeans.jpg"),
    description: "Fresh, high-quality broad beans ideal for various culinary applications."
  },
  {
    id: 12,
    name: "Castor",
    category: "Oilseeds",
    image: getImagePath("/product-images/castor.webp"),
    description: "Premium castor seeds for oil extraction and industrial use."
  },
  {
    id: 13,
    name: "Coriander",

    category: "Spices",
  image: getImagePath("/product-images/coriander.jpg"),
    description: "Aromatic coriander seeds with rich flavor profile."
  },
  {
    id: 14,
    name: "Cowpea",

    category: "Pulses",
  image: getImagePath("/product-images/cowpea.jpg"),
    description: "High-quality cowpeas (black-eyed peas) for diverse applications."
  },
  {
    id: 15,
    name: "Fenugreek",

    category: "Spices",
  image: getImagePath("/product-images/fenugreek.jpg"),
    description: "Premium fenugreek seeds known for their distinctive flavor and health benefits."
  },
  {
    id: 16,
    name: "Garlic",

    category: "Vegetables",
  image: getImagePath("/product-images/garlic.jpg"),
    description: "Fresh, high-quality garlic bulbs with strong aroma and flavor."
  },
  {
    id: 17,
    name: "Green Gram",

    category: "Pulses",
  image: getImagePath("/product-images/greengram.jpg"),
    description: "Superior quality green gram (mung beans) with excellent nutritional value."
  },
  {
    id: 18,
    name: "Mustard",

    category: "Oilseeds",
  image: getImagePath("/product-images/mustard.jpg"),
    description: "Premium mustard seeds for oil extraction and culinary use."
  },
  {
    id: 19,
    name: "Onion",

    category: "Vegetables",
  image: getImagePath("/product-images/onion.png"),
    description: "Fresh, quality onions suitable for export and diverse culinary uses."
  },
  {
    id: 20,
    name: "Pearl Millet",

    category: "Grains",
  image: getImagePath("/product-images/pearlmillet.jpg"),
    description: "High-quality pearl millet (bajra) rich in nutrients."
  },
  {
    id: 21,
    name: "Peas",

    category: "Pulses",
  image: getImagePath("/product-images/peas.jpg"),
    description: "Premium dried peas with consistent quality and size."
  },
  {
    id: 22,
    name: "Pigeon Pea",

    category: "Pulses",
  image: getImagePath("/product-images/pigeonpeas.jpg"),
    description: "High-quality pigeon peas (toor dal) ideal for various preparations."
  },
  {
    id: 23,
    name: "Sorghum",

    category: "Grains",
  image: getImagePath("/product-images/sorghum.jpg"),
    description: "Premium sorghum (jowar) grains with excellent nutritional profile."
  },
  {
    id: 24,
    name: "Soyabean",

    category: "Oilseeds",
  image: getImagePath("/product-images/soyabean.jpg"),
    description: "High-protein soybeans suitable for oil extraction and food processing."
  },
  {
    id: 25,
    name: "Turmeric",

    category: "Spices",
  image: getImagePath("/product-images/turmeric.jpg"),
    description: "Premium quality turmeric with rich color and curcumin content."
  },
  {
    id: 26,
    name: "White Chickpea",

    category: "Pulses",
  image: getImagePath("/product-images/whitechickpeas.jpg"),
    description: "Large white chickpeas (kabuli chana) with excellent quality."
  }
];

export const allProducts = [...primaryProducts, ...secondaryProducts];

export const contactInfo = {
  address: "A-75 Marketing Yard, Hapa Industrial Area",
  city: "Jamnagar",
  state: "Gujarat",
  country: "India",
  pincode: "361120",
  shippingPort: "Mundra Port (INDIA)",
  contacts: [
    {
      name: "Vipulbhai Nanda",
      phone: "+91 9904936085",
      email: "vipul.nanda@rediffmail.com"
    },
    {
      name: "Mayurbhai Nanda",
      phone: "+91 8128670928",
      email: "rudra_trading@yahoo.com"
    }
  ],
  certifications: ["FSSAI", "AGMARK", "APEDA", "PQMS - Phytosanitary", "IEC"]
};

export const faqs = [
  {
    question: "What are your packing options?",
    answer: "We offer customizable packing solutions including jute bags, PP bags, and vacuum packaging based on product requirements and international shipping standards."
  },
  {
    question: "Which port do you ship from?",
    answer: "Our primary shipping location is Mundra Port, India, which offers excellent connectivity to global destinations."
  },
  {
    question: "What are your payment terms?",
    answer: "We accept various payment terms including L/C, T/T, and other mutually agreed terms. Specific payment arrangements can be discussed based on order requirements."
  },
  {
    question: "Do you provide quality certificates?",
    answer: "Yes, we provide certified lab reports for every product upon request, ensuring complete transparency and quality assurance."
  }
];