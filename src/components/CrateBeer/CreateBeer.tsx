import React, { ChangeEvent, FormEvent, useState } from "react";
import { Beer } from "../../models/Beer";

interface Props {
  setBeers: React.Dispatch<React.SetStateAction<Beer[] | null>>;
}

const CrateBeer = ({ setBeers }: Props) => {
  const [beer, setBeer] = useState<Beer | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBeer((beer) => ({ ...beer, [e.target.name]: e.target.value } as Beer));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as Beer[];
    setBeers(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        placeholder="Id"
        name="Id"
        onChange={onChange}
        value={beer?.Id}
      />
      <input
        type="text"
        placeholder="Name"
        name="Name"
        onChange={onChange}
        value={beer?.Name}
      />
      <input
        type="number"
        placeholder="Price"
        name="Price"
        onChange={onChange}
        value={beer?.Price}
      />
      <button>Wyślij</button>
    </form>
  );
};

export default CrateBeer;
