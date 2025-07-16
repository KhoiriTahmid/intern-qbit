import { NavLink } from "react-router-dom";
import type { Product } from "../data/product";

function CardProduct({ name, price, rating, information }: Product) {
  const keys = Object.keys(information);
  const values = Object.values(information);

  return (
    <NavLink
      to={name.toLocaleLowerCase().replace(" ", "-")}
      className="footer-border group hover:bg-[#376240] hover:border-[#F1F1EB] border-2 py-4 flex flex-col gap-3 border-[#376240] w-fit hover:  duration-200"
    >
      <div className="flex 4 px-4 flex-col gap-3">
        <img src="product.webp" alt="product" className="size-70" />
        <p className="title text-[#376240] group-hover:text-white font-semibold text-xl text-wrap w-64">
          {name}
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#5C7F62] group-hover:text-[#F1F1EB] font-semibold">
            Rp {price}
          </p>
          <Stars active={rating} />
        </div>
      </div>
      <div className="inforUsemation flex px-4 justify-between border-t-2 pt-3 border-[#376240] group-hover:border-[#F1F1EB]">
        {keys.map((key, index) => (
          <div className="flex flex-col gap-2 group-hover:text-[#F1F1EB] text-[#5C7F62] font-semibold">
            <div className="flex flex-col gap-3 items-start justify-center">
              <p className="text-[#376240] group-hover:text-white">
                {index == 0 ? "For" : key[0].toUpperCase() + key.slice(1)} :
              </p>
              <p className="max-w-20 ">
                {values[index]}
                {index == 1 ? " ml" : index == 3 && " months"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </NavLink>
  );
}

function Stars({ active }: { active: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(active)].map((e, i) => (
        <img key={i} className="size-4" src="star-fill.webp" alt="star fill" />
      ))}
      {[...Array(5 - active)].map((e, i) => (
        <img
          key={i}
          className="size-4"
          src="star-unfill.webp"
          alt="star fill"
        />
      ))}
    </div>
  );
}

export default CardProduct;
