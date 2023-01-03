import React, { useEffect, useState } from "react";
import { Beer } from "../../models/Beer";
import ListItem from "./ListItem";
import CreateBeer from "../CrateBeer/CreateBeer";

const List = () => {
  const [beers, setBeers] = useState<Beer[] | null>(null);

  useEffect(() => {
    (async () => {
      const beersResponse = await fetch("http://localhost:3000/");
      const beersData: Beer[] = await beersResponse.json();

      setBeers(beersData);
    })();
  }, []);

  const onDeleteHandler = async (id: number) => {
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });

    const data = (await response.json()) as Beer[];
    setBeers(data);
  };

  if (!beers) return <p>Loading...</p>;

  return (
    <>
      <ul>
        {beers.map((beer) => (
          <ListItem
            beer={beer}
            onDelete={onDeleteHandler}
            key={String(beer.Id)}
          />
        ))}
      </ul>
      <CreateBeer setBeers={setBeers} />
    </>
  );
};

export default List;
