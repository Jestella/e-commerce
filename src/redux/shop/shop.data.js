const SHOP_DATA = {
  womens: {
    id: 1,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 1,
        brand: "Brand Name",
        name: "Product A",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211901F095155_1/shushu-tong-ssense-exclusive-black-raw-edge-cardigan.jpg",
        price: 50,
      },
      {
        id: 2,
        brand: "Brand Name",
        name: "Product B",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212376F109017_1/burberry-white-mythical-alphabet-silk-logo-shirt.jpg",
        price: 65,
      },
      {
        id: 3,
        brand: "Brand Name",
        name: "Product C",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211482F095005_1/ami-alexandre-mattiussi-grey-ami-de-coeur-cardigan.jpg",
        price: 38,
      },
      {
        id: 4,
        brand: "Brand Name",
        name: "Product D",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211553F057002_1/jacquemus-off-white-la-veste-dhomme-blazer.jpg",
        price: 80,
      },
      {
        id: 5,
        brand: "Brand Name",
        name: "Product E",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211327F110037_1/we11done-black-logo-t-shirt.jpg",
        price: 67,
      },
      {
        id: 6,
        brand: "Brand Name",
        name: "Product F",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211327F098001_1/we11done-white-front-logo-sweatshirt.jpg",
        price: 63,
      },
      {
        id: 7,
        brand: "Brand Name",
        name: "Product G",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211695F110019_1/palm-angels-black-bear-t-shirt.jpg",
        price: 55,
      },
      {
        id: 8,
        brand: "Brand Name",
        name: "Product H",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211695F110001_1/palm-angels-black-classic-logo-long-sleeve-t-shirt.jpg",
        price: 84,
      },
      {
        id: 9,
        brand: "Brand Name",
        name: "Product I",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211669F110019_1/vetements-black-logo-patch-t-shirt.jpg",
        price: 75,
      },
      {
        id: 10,
        brand: "Brand Name",
        name: "Product J",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211187F110185_1/alexander-wang-pink-puff-logo-long-sleeve-t-shirt.jpg",
        price: 23,
      },
    ],
  },
  mens: {
    id: 2,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 11,
        brand: "Brand Name",
        name: "Product A",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212376M192001_1/burberry-white-mythical-alphabet-exploded-tb-motif-shirt.jpg",
        price: 53,
      },
      {
        id: 12,
        brand: "Brand Name",
        name: "Product B",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211381M200200_1/thom-browne-white-linen-and-cotton-short-sleeve-shirt.jpg",
        price: 95,
      },
      {
        id: 13,
        brand: "Brand Name",
        name: "Product C",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212076M180002_1/tom-ford-black-double-breasted-peacoat.jpg",
        price: 112,
      },
      {
        id: 14,
        brand: "Brand Name",
        name: "Product D",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211530M180004_1/saul-nash-grey-printed-flip-side-jacket.jpg",
        price: 86,
      },
    ],
  },
  home: {
    id: 3,
    title: "Home",
    routeName: "home",
    items: [
      {
        id: 15,
        brand: "Brand Name",
        name: "Product A",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212376M150001_1/burberry-black-mythical-alphabet-tb-football-scarf.jpg",
        price: 192,
      },
      {
        id: 16,
        brand: "Brand Name",
        name: "Product B",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212730M163000_1/bao-bao-issey-miyake-black-matte-oyster-card-holder.jpg",
        price: 35,
      },
      {
        id: 17,
        brand: "Brand Name",
        name: "Product C",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212798M172023_1/bottega-veneta-yellow-intertwined-keychain.jpg",
        price: 72,
      },
      {
        id: 18,
        brand: "Brand Name",
        name: "Product D",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212798M172024_1/bottega-veneta-green-intertwined-keychain.jpg",
        price: 56,
      },
      {
        id: 19,
        brand: "Brand Name",
        name: "Product E",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211553M148006_1/jacquemus-brown-le-porte-cles-tournevis-keychain.jpg",
        price: 99,
      },
    ],
  },
  beauty: {
    id: 4,
    title: "Beauty",
    routeName: "beauty",
    items: [
      {
        id: 20,
        brand: "Brand Name",
        name: "Product A",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211693M142018_1/fendi-blue-and-brown-beaded-forever-fendi-bracelet.jpg",
        price: 99,
      },
      {
        id: 21,
        brand: "Brand Name",
        name: "Product B",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212503M147009_1/dear-letterman-gold-the-ahdeem-ring.jpg",
        price: 67,
      },
    ],
  },
  lifestyle: {
    id: 5,
    title: "Lifestyle",
    routeName: "ligestyle",
    items: [
      {
        id: 22,
        brand: "Brand Name",
        name: "Product A",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211376M159180_1/burberry-black-tb-trafalgar-umbrella.jpg",
        price: 55,
      },
      {
        id: 23,
        brand: "Brand Name",
        name: "Product B",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211376M159179_1/burberry-beige-check-trafalgar-umbrella.jpg",
        price: 55,
      },
      {
        id: 24,
        brand: "Brand Name",
        name: "Product C",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211259M159506_1/alexander-mcqueen-black-and-gold-skull-folded-umbrella.jpg",
        price: 125,
      },
      {
        id: 25,
        brand: "Brand Name",
        name: "Product D",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211259M159507_1/alexander-mcqueen-black-and-silver-skull-folded-umbrella.jpg",
        price: 125,
      },
      {
        id: 26,
        brand: "Brand Name",
        name: "Product E",
        imageUrl:
          "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211376M159181_1/burberry-beige-check-walking-umbrella.jpg",
        price: 105,
      },
    ],
  },
};

export default SHOP_DATA;
