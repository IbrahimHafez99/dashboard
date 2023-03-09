export type Product = {
  title: string;
  price: number;
  currency: string;
  icon: string;
  availability: boolean;
  imageUrl: string;
};

export type Subcategory = {
  subcategory: string;
  products: Product[];
};

export type Category = {
  category: string;
  subcategories: Subcategory[];
};

export type Categories = Category[];

export const categories: Categories = [
  {
    category: "Electronics",
    subcategories: [
      {
        subcategory: "Smartphones",
        products: [
          {
            title: "Samsung Galaxy S21",
            price: 260,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            title: "iPhone 13",
            price: 330,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: false,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          // additional products...
        ],
      },
      {
        subcategory: "Laptops",
        products: [
          {
            title: "Dell XPS 13",
            price: 590,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            title: "MacBook Air",
            price: 670,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          // additional products...
        ],
      },
      // additional subcategories...
    ],
  },
  {
    category: "Clothing",
    subcategories: [
      {
        subcategory: "Men's Clothing",
        products: [
          {
            title: "Cotton Shirt",
            price: 10,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            title: "Denim Jeans",
            price: 15,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: false,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          // additional products...
        ],
      },
      {
        subcategory: "Women's Clothing",
        products: [
          {
            title: "Summer Dress",
            price: 20,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            title: "Leather Boots",
            price: 50,
            currency: "OMR",
            icon: "https://www.svgrepo.com/show/9415/contest-cup.svg",
            availability: true,
            imageUrl:
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          // additional products...
        ],
      },
      // additional subcategories...
    ],
  },
  // additional categories...
];
