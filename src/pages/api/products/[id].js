import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
import { getProducts } from "@/lib/fetchApi";

const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { id } = req.query;

  console.log("productId", id);
  if (req.method === "POST") {
    console.log("body=", req.body);
  }
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
  const { name, price, url, description, image } = product;

  res.status(200).json({ id, name, price, url, description, image });
}
