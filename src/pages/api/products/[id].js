import { getProducts } from "@/lib/fetchApi";

const HOST = process.env.NEXT_PUBLIC_HOST;
export default async function handler(req, res) {
  const { id } = req.query;
  console.log("productId", id);
  const products = await getProducts();
  /*
id: string
    name: string
    price: number
    url: string
    description: string
    image: string // Hack to pass the image URL instead of the StaticImage object we required
*/

  const product = products.find((p) => p.id === id);
  console.log("product", product);

  res.status(200).json(product);
}
