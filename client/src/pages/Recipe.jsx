import React from "react";
import RecipeDetails from "../components/RecipeDetailes";
import Ingredients from "../components/Ingredients";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { recipeId } = useParams();

  return (
    <>
      <RecipeDetails recipeId={recipeId} />
      <Ingredients recipeId={recipeId} />
    </>
  );
}

// const [recipeInfo, setRecipeInfo] = useState([]);
// console.log("rendered");

// useEffect(() => {
//   axios
//     .get(
//       `https://api.spoonacular.com/recipes/${715446}/information?${apiKey}&includeNutrition=true`
//     )
//     .then((response) => {
//       console.log(response.data);
//       setRecipeInfo(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);

// return ()
// <Container>
//   {recipeInfo != undefined &&
//   recipeInfo.nutrition != undefined &&
//   recipeInfo.nutrition.nutrients.length != 0 ? (
//     <div>
//       <RecipeDetails {...recipeInfo} />
//       <Ingredients {...recipeInfo} />
//     </div>
//   ) : (
//     console.log("console")
//   )}

//   {/* {recipeInfo && (
//     <> */}
//   {/* {console.log("console:" + recipeInfo.title)}
//   <RecipeDetails {...recipeInfo} />
//   <Ingredients {...recipeInfo} /> */}
//   {/* </>
//   )} */}
// </Container>
