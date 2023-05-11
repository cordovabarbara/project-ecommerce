import React from "react";
import { useForm } from "react-hook-form";

const FilterByPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();

  const submit = (data) => {
    setFromTo(data);
    reset({
      from: "",
      to: "",
    });
  };

  return (
    <div className="price__box">
      <h3 className="price__title">Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div className="price__opt">
          <label className="label__name" htmlFor="from">
            From
          </label>
          <input
            className="input__price"
            {...register("from")}
            type="number"
            id="from"/>
        <div>
          <label className="label__name" htmlFor="to">
            To
          </label>
          <input
            className="input__price"
            {...register("to")}
            type="number"
            id="from"
          />
          </div>
        </div>
        <button className="filter__btn">Filter Price</button>
      </form>
    </div>
  );
};

export default FilterByPrice;
