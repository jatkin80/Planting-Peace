export interface Plant {
  id: number;
  name: string;
type: string;
imageUrl: string;
description: string;
  date: string;
  notes:string;
  daystomaturity: number;
  spacing: number;
}
export interface PlantsResponse{
  plants:Plant[];
  }

  export interface PlantResponse{
  plant:Plant;
  }
export interface IPResponse {
    ip: string;
  }
