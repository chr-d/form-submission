import { useState } from "react";

const SearchForm = ({ formAction, isPending }) => {
  const [formState, setFormState] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form action={formAction} className="w-full max-w-4xl">
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend mb-2">Search Products</legend>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="flex flex-col">
            <label className="label text-sm font-medium">Category</label>
            <input className="input input-bordered w-full" name="category" placeholder="Category" onChange={handleChange} value={formState.category} />
          </div>
          <div className="flex flex-col">
            <label className="label text-sm font-medium">Min Price</label>
            <input type="number" className="input input-bordered w-full" name="minPrice" placeholder="Min" onChange={handleChange} value={formState.minPrice} />
          </div>
          <div className="flex flex-col">
            <label className="label text-sm font-medium">Max Price</label>
            <input type="number" className="input input-bordered w-full" name="maxPrice" placeholder="Max" onChange={handleChange} value={formState.maxPrice} />
          </div>
          <div className="flex flex-col">
            <label className="label text-sm font-medium">Description</label>
            <input className="input input-bordered w-full" name="query" placeholder="Search keyword" onChange={handleChange} value={formState.query} />
          </div>
          <div className="flex justify-end md:items-end">
            <button disabled={isPending} type="submit" className="btn btn-neutral w-full md:w-auto mt-1 md:mt-0">
              Search
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchForm;
