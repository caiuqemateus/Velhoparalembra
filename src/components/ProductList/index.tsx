import { Pet } from "@/Models/Pet";
import ProductCard from "../ProductCard";

type PetProps = {
  pets: Pet[];
};

export default function ProductList({ pets }: PetProps) {
  return (
    <section className="pet">
      {pets.map((pet) => (
        <ProductCard
          key={pet.id}
          nome={pet.nome}
          img={pet.foto || pet.imagem || ''}
          desc={pet.descricao || ''}
          tipo={(pet.especie as any) || (pet as any).tipo || 'teste'}
        />
      ))}
    </section>
  );
}
