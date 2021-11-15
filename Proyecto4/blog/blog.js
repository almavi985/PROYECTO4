const ComponentWeight = ({ weight, updateWeight }) => {
  const funcion = (e) => {
    updateWeight(e.target.value);
  };
  return (
    <input min={100} max={900} type="range" value={weight} onChange={funcion} />
  );
};

export default ComponentWeight;