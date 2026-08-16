import { use, useActionState } from "react";
import { searchProducts } from "../api/index.js";
import { Instructions, SearchForm, SearchResults } from "../components";

const productsPromise = searchProducts();

const Search = () => {
  const submitAction = async (prevState, formData) => {
    // have to pass numbers as undefined if empty or they will be 0
    // category is case-sensitive
    // query only matches title
    return await searchProducts({ category: formData.get("category"), minPrice: formData.get("minPrice") !== "" ? Number(formData.get("minPrice")) : undefined, maxPrice: formData.get("maxPrice") !== "" ? Number(formData.get("maxPrice")) : undefined, query: formData.get("query") });
  };

  const [state, formAction, isPending] = useActionState(submitAction, use(productsPromise));

  return (
    <div className="flex flex-col items-center">
      <SearchForm formAction={formAction} isPending={isPending} />
      {state.error && (
        <p role="alert" className="mt-2 text-red-600 font-medium">
          {state.error}
        </p>
      )}
      <SearchResults products={state.products} />
      <Instructions path="/search.md" />
    </div>
  );
};

export default Search;
