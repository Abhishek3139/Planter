export interface SinglePlantType {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: Array<string>;
  species: string;
  discount: boolean;
  priceDiscount: number;
  slug: string;
}

export interface PlantState {
  isLoading: boolean;
  error: unknown;
  plants: Array<SinglePlantType>;
  topCheapestPlants: Array<SinglePlantType>;
}

export interface AllPlantsResponse {
  data: {
    data: {
      doc: Array<SinglePlantType>;
    };
  };
}
