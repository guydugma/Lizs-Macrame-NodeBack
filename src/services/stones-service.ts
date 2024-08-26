import { IStone } from "../@types/@types";
import Stone from "../db/models/stone-model";

export const stonesService = {

  createStone: async (data: IStone) => new Stone(data).save(),
  
  updateStone: async (data: IStone, stoneId: string) => Stone.findByIdAndUpdate(stoneId, data, { new: true }),

  getStone: async (stoneId: string) => Stone.findById(stoneId),
  
  getAllStones: async () => Stone.find(),

  deleteStone: async (stoneId: string) => Stone.findByIdAndDelete(stoneId),
}