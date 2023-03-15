import axios from "axios";
const KEY = process.env.NEXT_PUBLIC_DATO_API_KEY;
const HOST = process.env.NEXT_PUBLIC_HOST;
export const fetchData = async (q, v) => {
  try {
    const response = await axios({
      url: `https://graphql.datocms.com`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${KEY}`,
      },
      data: { query: q, variables: v },
    });
    console.log("status", response?.status);
    if (response?.data?.errors) {
      console.log("response ERROR", response?.data?.errors);
      throw error;
    }
    return response?.data?.data;
  } catch (error) {
    console.log("QUERY ERROR", error, "on query", q);
    throw error;
  }
};

export const getProducts = async () => {
  const q = `
 query Products {
  _allProductVariantsMeta {
    count
  }
  _allProductsMeta {
    count
  }
  allProducts(orderBy: name_ASC) {
    id
    description
    price
    name
    variants {
      id
      sku
      color
      sizes {
        id
        name
      }
      image {
        id
        url
      }
    }
  }
}
`;
  const response = await fetchData(q, null);
  const { allProducts } = response;
  const list = allProducts.reduce((all, product) => {
    const items = product.variants.map((v) => {
      const { image, color, sku, id, sizes } = v;
      const { price, name, description } = product;

      const variation = sizes.map((s) => {
        return { name: "Size", option: s.name };
      });

      return {
        id,
        name,
        description,
        color,
        sku,
        image: image.url,
        url: `${HOST}/api/products/${id}`,
        price: parseFloat(price),
        inventoryManagementMethod: "Variant",
        // sizes,
        customFields: [
          {
            name: "Size",
            options: sizes.map((s) => s.name).join("|"),
            type: "dropdown",
          },
        ],
        variants: [
          {
            variation,
            stock: 1,
            allowOutOfStockPurchases: false,
          },
        ],
      };
    });
    return [...all, ...items];
  }, []);

  return list.sort((a, b) => a.name - b.name);
};
