import { ProductType } from "../../component/product/product.type"

export type Inventory = {
    products: ProductType[];
    total: number;
    skip: number;
    limit: number;
}