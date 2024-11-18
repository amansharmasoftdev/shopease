export interface ProductState {
  createdProducts: CreateProductResponse[];
  loading: boolean;
  error: string | null;
}

export enum CreateProductActionTypes {
  CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST",
  CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE",
}

export interface CreateProductRequest {
  type: CreateProductActionTypes.CREATE_PRODUCT_REQUEST;
  payload: CreateProductResponse[];
}

export interface CreateProductSuccess {
  type: CreateProductActionTypes.CREATE_PRODUCT_SUCCESS;
  payload: CreateProductResponse[];
}

export interface CreateProductFailure {
  type: CreateProductActionTypes.CREATE_PRODUCT_FAILURE;
  payload: string;
}

// Union type for all post actions
export type CreatePostActions =
  | CreateProductRequest
  | CreateProductSuccess
  | CreateProductFailure;

export interface CreateProductResponse {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  stock: string;
  sku: string;
  brand: string;
}
