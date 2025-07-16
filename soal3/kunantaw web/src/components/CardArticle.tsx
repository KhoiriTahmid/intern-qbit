import { NavLink } from "react-router-dom";
import type { Article } from "../data/article";

function CardArticle({ tittle, writer, published, information }: Article) {
  const keys = Object.keys(information);
  const values = Object.values(information);

  return (
    <NavLink
      to={tittle.toLowerCase().replace(/\s+/g, "-")}
      className="footer-border group hover:bg-[#376240] hover:border-[#F1F1EB]  border-2 py-4 flex flex-col gap-3 border-[#376240] w-fit"
    >
      <div className="flex px-4 flex-col gap-3">
        <img src="product.webp" alt="article" className="size-70" />
        <p className="title text-[#376240] group-hover:text-white font-semibold text-xl text-wrap  w-64">
          {tittle}
        </p>
        <div className="flex justify-between text-sm group-hover:text-[#F1F1EB]  text-[#5C7F62] font-semibold">
          <p>By: {writer}</p>
          <p>{published}</p>
        </div>
      </div>
      <div className="information flex px-4  justify-between border-t-2 pt-3 border-[#376240] mt-3 group-hover:border-[#F1F1EB]">
        {keys.map((key, index) => (
          <div
            key={key}
            className="flex flex-col gap-2 text-[#5C7F62] group-hover:text-[#F1F1EB]  font-semibold"
          >
            <p className="text-[#376240] group-hover:text-white">
              {key[0].toUpperCase() + key.slice(1)}:
            </p>
            <p>
              {values[index]}
              {key === "readTime" && " min"}
            </p>
          </div>
        ))}
      </div>
    </NavLink>
  );
}

export default CardArticle;
