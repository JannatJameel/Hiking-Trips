const Range  = ({setLength})=>{
    return ( 
        <>
            <label for="customRange1" class="form-label">Select max Length</label>
            <input type="range" class="form-range" id="customRange1"  
            onChange={(event) => setLength(+event.target.value)}></input>
        </>
    );
};
  
export default Range;