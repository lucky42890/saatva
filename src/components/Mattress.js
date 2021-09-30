import Button from "./Button";
import { getMattressData } from '../bff';
import { useContext, useEffect, useState } from "react";
import { cartContext } from '../utils/cartContext';

const Mattress = () => {
  const [mattresses, setMattresses] = useState([]);
  const [selectedMattress, setSelectedMattress] = useState();
  const { increaseCartNumber } = useContext(cartContext);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    const data = getMattressData()['mattresses'] || {};
    const mattressData = Object.keys(data).map(key => ({...data[key], id: key}));
    setMattresses(mattressData);
    setSelectedMattress(mattressData.length ? mattressData[0] : undefined);
  }

  const formatCurrency = (price) => {
    return price.toFixed(0).replace(/(\d)(?=(\d{3})+)/g, '$1,');
  }

  return (
    <>
    {
      mattresses && mattresses.length &&
      <div className="container mattress-container">
        <div className="mattress-img-wrapper">
          <img src={`images/${selectedMattress.imageFileName}`} alt="" />
        </div>

        <div className="mattress-details">
          <p className="title">Choose Your Mattress</p>

          <div className="mattress-selector">
            <p className="sub-title">Select Mattress Type</p>
            
            <div className="mattress-selector-list">
              {
                mattresses.map((mattress) => {
                  return (
                    <Button
                      key={mattress.id}
                      name={mattress.name}
                      clickHandler={() => setSelectedMattress(mattress)}
                      classes={selectedMattress.id === mattress.id ? 'filled' : 'outlined'}
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="mattress-info">
            <div className="mattress-info-wrapper">
              <p className="label">{selectedMattress.name} Mattress</p>
              <p className="value">${formatCurrency(selectedMattress.price)}</p>
            </div>
            <div className="mattress-info-wrapper">
              <p className="label">Review Rating</p>
              <p className="value">{selectedMattress.reviewRating.toFixed(1)}</p>
            </div>
          </div>
          
          <Button
            name="Add to Cart"
            classes="filled btn-add-cart"
            clickHandler={increaseCartNumber}
          />
        </div>
      </div>
    }
    </>
  )
}

export default Mattress;