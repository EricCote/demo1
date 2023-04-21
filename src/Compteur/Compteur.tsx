import { useState } from 'react';
import { Button } from 'react-bootstrap';

//useState retourne un tableau de 2 valeurs:
//1. la valeur de l'état courant
//2. fonction setState qui cédule une modification et un re-rendu (pour après la série d'événements)
function Compteur() {
  const [nombre, setNombre] = useState<number>(0);

  function Incrementer(incr: number) {
    setNombre(nombre + incr);
  }

  return (
    <>
      <h1>le Compteur est: {nombre}</h1>

      <MyButton value={1} onIncrement={Incrementer} />
      <MyButton value={-10} onIncrement={Incrementer} />
      <MyButton value={100} onIncrement={Incrementer} />
    </>
  );
}

export default Compteur;

interface MyButtonProps {
  value: number;
  onIncrement: (incr: number) => void;
}

function MyButton({ value, onIncrement }: MyButtonProps) {
  return (
    <Button
      onClick={() => {
        onIncrement(value);
      }}
      variant={value < 0 ? 'warning' : 'primary'}
      className='me-1 mb-2 '
    >
      {value < 0 ? 'Diminuer' : 'Augmenter'} {Math.abs(value)}
    </Button>
  );
}
