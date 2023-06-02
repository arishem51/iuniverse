const SIZE = 200;

type AnimateProps = {
  name: string;
  values: string;
};

const Animate = ({ name, values }: AnimateProps) => {
  return (
    <animate
      attributeName={name}
      values={values}
      dur="3s"
      repeatCount="indefinite"
    />
  );
};

const FirstSVG = () => {
  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <g>
        <line x1="30" x2="80" y1="2" y2="2" stroke="white" strokeWidth="2">
          <Animate name="x1" values="30;0;30" />
        </line>
        <line x1="30" x2="80" y1="30" y2="80" stroke="white" strokeWidth="2">
          <Animate name="x1" values="30;1;30" />
          <Animate name="y1" values="30;2;30" />
        </line>
        <line x1="1" x2="1" y1="30" y2="80" stroke="white" strokeWidth="2">
          <Animate name="y1" values="30;2;30" />
        </line>
      </g>
    </svg>
  );
};

export default FirstSVG;
