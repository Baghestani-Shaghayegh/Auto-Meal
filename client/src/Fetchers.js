import axios from "axios";
import { apiKey2 } from "./IP";

async function getRecipeInfoById(recipeId) {
  const { data } = await axios.get(
    `http://automealbackend-env.eba-ikpeu3mz.ap-northeast-2.elasticbeanstalk.com/RecipeDB/detail_recipe?recipeId=${recipeId} `
  );
  return data;
}

export default getRecipeInfoById;

// async function getRecipeQueryByKeyword(searchKeyword) {
//   const { data } await axios.get(
//     ``
//   )
// }
