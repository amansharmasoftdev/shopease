// src/types/JewTypes.ts

// Define the Jew interface to match the data structure
export interface Rating {
  rate: number;
  count: number;
}

export interface Jew {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface JewErorr {
  error: string;
}

// Define the state interface
export interface JewState {
  Jew: Jew[];
  loading: boolean;
  error: string | null;
}

// Define action types
export const FETCH_JEW_REQUEST = "FETCH_JEW_REQUEST";
export const FETCH_JEW_SUCCESS = "FETCH_JEW_SUCCESS";
export const FETCH_JEW_FAILURE = "FETCH_JEW_FAILURE";

// Define action interfaces
interface FetchJewRequest {
  type: typeof FETCH_JEW_REQUEST;
}

interface FetchJewSuccess {
  type: typeof FETCH_JEW_SUCCESS;
  payload: Jew[];
}

interface FetchJewFailure {
  type: typeof FETCH_JEW_FAILURE;
  payload: string;
}

// Combine all action types
export type JewActionTypes =
  | FetchJewRequest
  | FetchJewSuccess
  | FetchJewFailure;
