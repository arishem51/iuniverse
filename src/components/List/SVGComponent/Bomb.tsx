const SIZE = 200;

const Bomb = () => {
  return (
    <svg width={SIZE} height={SIZE}>
      <circle cx={100} cy={120} r={70} fill="#D1495B" />
      <rect x="82" y="35" width="36" height="20" fill="#F79257" />
      <circle
        cx="100"
        cy="25"
        r="12"
        fill="none"
        stroke="#F79257"
        strokeWidth={2}
      />
    </svg>
  );
};

export default Bomb;
