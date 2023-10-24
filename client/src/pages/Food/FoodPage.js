import React, { useEffect, useState } from "react";
import classes from "./foodPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/foodService";
import Tags from "../../components/Tags/Tags";
import Price from "../../components/Price/Price";
import { useCart } from "../../Hooks/useCart";

export default function FoodPage() {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addToCart(food)
    navigate("/cart");
  }

  useEffect(() => {
    getById(id).then((food) => setFood(...food));
  }, [id]);

  return (
    <div>
      {food && (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`/foods/${food.imageUrl}`}
            alt={food.name}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>

            <div className={classes.origins}>
              {food.origins &&
                food.origins.map((origin) => (
                  <span key={origin}>{origin}</span>
                ))}
            </div>

            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map((tag) => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>

            <div className={classes.cook_time}>
              <span>
                Time to cook about <strong>{food.cookTime} mins</strong>
              </span>
            </div>

            <div className={classes.price}>
              <Price price={food.price} />
            </div>

            <button
              onClick={handleAddToCart}
            >Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
