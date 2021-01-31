import { Range } from 'react-range';

const LengthBar  = ({length, setLength})=>{
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: "5px", 
      marginBottom: "50px",
    }}>
      <Range
        step={0.1}
        min={0}
        max={400}
        values={length}
        onChange={(length) => setLength([length])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '40%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
    </div>
  );
};
  
export default LengthBar;