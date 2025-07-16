import HeroSection from "../components/HeroSection";
import CardProduct from "../components/CardProduct";
import { products } from "../data/product";
import type { Product } from "../data/product";
import { articles } from "../data/article";
import type { Article } from "../data/article";
import { NavLink } from "react-router-dom";
import CardArticle from "../components/CardArticle";
import About from "../components/About";

function Home() {
  return (
    <div className="flex-col flex gap-10">
      <HeroSection />
      <About />
      <CardsProducts type="products" products={products} />
      <CardsProducts type="articles" articles={articles} />
    </div>
  );
}

function CardsProducts({
  type,
  products,
  articles,
}: {
  type: "products" | "articles";
  products?: Product[];
  articles?: Article[];
}) {
  return (
    <div className="px-20 my-10 flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <p className="text-[#376240] font-semibold text-xl">
          {type.toUpperCase()}
        </p>
        <NavLink
          to={`/${type}`}
          className="text-[#5C7F62] font-semibold text-xl"
        >
          View More ...
        </NavLink>
      </div>
      <div className="flex flex-wrap gap-4 overflow-clip justify-between ">
        {type == "products"
          ? products!
              .slice(0, 4)
              .map(({ name, price, rating, information }: Product, index) => (
                <CardProduct
                  key={index}
                  name={name}
                  price={price}
                  rating={rating}
                  information={information}
                />
              ))
          : articles!
              .slice(0, 4)
              .map(
                (
                  { tittle, writer, published, information }: Article,
                  index
                ) => (
                  <CardArticle
                    key={index}
                    tittle={tittle}
                    writer={writer}
                    published={published}
                    information={information}
                  />
                )
              )}
      </div>
    </div>
  );
}

export default Home;
