import React from "react";
import { Beer } from "../../models/Beer";

interface Props {
  beer: Beer;
  onDelete: (id: number) => void;
}

const ListItem = ({ beer, onDelete }: Props) => {
  return (
    <li>
      {beer.Id} {beer.Name} {beer.Price}
      <button onClick={() => onDelete(beer.Id)}>Usun</button>
    </li>
  );
};

export default ListItem;
