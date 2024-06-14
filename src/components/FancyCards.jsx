import '../styles/FancyCards.css'; 
function FancyCards() {
  return (  
    <>    
      <div className="list-header">Current Work</div>
      <div className="card-container">
        <div className="card">
          <img src="/stock1.png" alt="stock1" />
          <div className="overlay">
            <div className="overlay-text">Overlay Text 1</div>
          </div>
        </div>
        <div className="card">
          <img src="/stock2.png" alt="stock2" />
          <div className="overlay">
            <div className="overlay-text">Overlay Text 2</div>
          </div>
        </div>
        <div className="card">
          <img src="/stock3.png" alt="stock3" />
          <div className="overlay">
            <div className="overlay-text">Overlay Text 3</div>
          </div>
        </div>
      </div>
    </>  
  );
}

export default FancyCards;
