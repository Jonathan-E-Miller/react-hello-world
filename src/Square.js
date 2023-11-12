function Square({value, handler}) {
    return(
    <button className="square" onClick={handler}>
        {value}
    </button>
    );
}

  export default Square;