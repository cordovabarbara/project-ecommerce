import React from "react";
import { useForm } from "react-hook-form";

const FilterByPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();

  const submit = data => {
    setFromTo(data)
    reset({
      from:'',
      to:'',
    });
  };


  return (
    <div>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input {...register("from")} type="number" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input {...register("to")} type="number" id="from" />
        </div>
        <button>Filter Price</button>
      </form>
    </div>
  );
};

export default FilterByPrice;
