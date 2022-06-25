import longhchair from "./interior/longhchair.jpg";
import tvset from "./interior/tvset.jpg";
import wardrope from "./interior/wardrope.jpg";
import bookset from "./interior/bookset.jpg";
import bedwhite from "./interior/bedwhite.jpg";
import tableset from "./interior/tableset.jpg";
import chairset from "./interior/chairset.jpg";

const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/product",
    text: "Product",
  },
  {
    id: 3,
    url: "/cart",
    text: "Cart",
  },
  {
    id: 4,
    url: "/service",
    text: "Service",
  },
  {
    id: 5,
    url: "/about",
    text: "About",
  },
  {
    id: 6,
    url: "/contact",
    text: "Contact",
  },
];

export function getLinks() {
  return links;
}

//create and empty array fot the cart items

export const CartItems = [];

//add all the various items to your product

CartItems.push(
  {
    id: 1,
    title: "longhchair",
    price: 599.99,
    img: longhchair,
    amount: 0,
  },
  {
    id: 2,
    title: "tvset",
    price: 499.99,
    img: tvset,
    amount: 0,
  },
  {
    id: 3,
    title: "wardrope",
    price: 699.99,
    img: wardrope,
    amount: 0,
  },
  {
    id: 4,
    title: "bookset",
    price: 699.99,
    img: bookset,
    amount: 0,
  },
  {
    id: 5,
    title: "bedwhite",
    price: 699.99,
    img: bedwhite,
    amount: 0,
  }
);

export const tourItem = [];

tourItem.push(
  {
    id: 1,
    title: "longhchair",
    price: 599.99,
    img: longhchair,
    amount: 0,
  },
  {
    id: 2,
    title: "tvset",
    price: 499.99,
    img: tvset,
    amount: 0,
  },
  {
    id: 3,
    title: "wardrope",
    price: 699.99,
    img: wardrope,
    amount: 0,
  },
  {
    id: 4,
    title: "bookset",
    price: 699.99,
    img: bookset,
    amount: 0,
  },
  {
    id: 5,
    title: "bedwhite",
    price: 699.99,
    img: bedwhite,
    amount: 0,
  }
);

export const productItems = [
  {
    id: 1,
    fields: {
      title: "bed white",
      price: 5.99,
      text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
      image: {
        fields: {
          file: {
            url: bedwhite,
          },
        },
      },
    },
  },
  {
    id: 2,
    fields: {
      title: "bookset",
      text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
      price: 7.99,
      image: {
        fields: {
          file: {
            url: bookset,
          },
        },
      },
    },
  },
  {
    id: 3,
    fields: {
      title: "chairset",
      text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
      price: 8.99,
      image: {
        fields: {
          file: {
            url: chairset,
          },
        },
      },
    },
  },
  {
    id: 4,
    fields: {
      title: "wardrope",
      text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
      price: 11.99,

      image: {
        fields: {
          file: {
            url: wardrope,
          },
        },
      },
    },
  },
  // {
  //   id: 5,
  //   fields: {
  //     title: "longchair",
  //     text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  //     price: 14.99,
  //     image: {
  //       fields: {
  //         file: {
  //           url: longhchair,
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   id: 6,
  //   fields: {
  //     title: "layout",
  //     text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  //     price: 15.99,
  //     image: {
  //       fields: {
  //         file: {
  //           url: layout,
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   id: 7,
  //   fields: {
  //     title: "tableset",
  //     text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  //     price: 9.99,
  //     image: {
  //       fields: {
  //         file: {
  //           url: tableset,
  //         },
  //       },
  //     },
  //   },
  // },
  // {
  //   id: 8,
  //   fields: {
  //     title: "tvset",
  //     text: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product. Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  //     price: 12.99,
  //     image: {
  //       fields: {
  //         file: {
  //           url: tvset,
  //         },
  //       },
  //     },
  //   },
  // },
];


export const dataImg = [
  {
    id: 1,
    img: longhchair,
    title: "longchair",
    text: "three sitter",
    details:
      "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  },
  {
    id: 2,
    img: tvset,
    title: "tvset",
    text: "My tv",
    details:
      "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia. we dont sell only but we make our own product",
  },
  {
    id: 3,
    img: wardrope,
    title: "wardrope",
    text: "good ward drope",
    details:
      "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. That is why amari product is here to give you the best. we care about what our client want not what we want to sell. we also offer the best for all our client.",
  },
  {
    id: 4,
    img: bedwhite,
    title: "bedwhite",
    text: "bed white",
    details:
      "That is why amari product is here to give you the best. we care about what our client want not what we want to sell. we also offer the best for all our clientStaying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty. ",
  },
];

export const items = [
  {
    id: 1,
    title: "wardrope",
    img: wardrope,
    price: 10.99,
    category: "wardrope",
    desc: "it is important that you have a quality furniture in your apartment with a good warranty",
  },
  {
    id: 2,
    title: "bedwhite",
    img: bedwhite,
    price: 5.99,
    category: "bed",
    desc: "we also offer the best for all our clientStaying in a comfortable home is necessary as an owner",
  },
  {
    id: 3,
    title: "tvset",
    img: tvset,
    price: 7.88,
    category: "tv",
    desc: "we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia",
  },
  {
    id: 4,
    title: "tableset ",
    img: tableset,
    price: 3.88,
    category: "table",
    desc: "That is why amari product is here to give you the best. we produce qualty chair with low cost. our material are imported from china, turkey, uk, usa, malasia",
  },
  // {
  //   id: 5,
  //   title: "chairset",
  //   img: chairset,
  //   price: 12.99,
  //   category: "chair",
  //   desc: "Staying in a comfortable home is necessary as an owner. it is important that you have a quality furniture in your apartment with a good warranty",
  // },
  // {
  //   id: 6,
  //   title: "longchair",
  //   img: longhchair,
  //   price: 14.99,
  //   category: "long",
  //   desc: "we also offer the best for all our clientStaying in a comfortable home is necessary as an owner",
  // },
];