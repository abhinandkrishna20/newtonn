import React from "react";
import img1 from '../img/material/1.jpg';
import img2 from '../img/material/2.jpg';
import img3 from '../img/material/3.jpg';
import img4 from '../img/material/4.jpg';
import '../Style/Material.css';
// import '../Style/mater.css';

const Material = () => {
const cardsData = [
    {
      id: 1,
      title: 'Cement',
      description: 'All brands cements are available.',
      img: img1
    },
    {
      id: 2,
      title: 'Concrete',
      description: 'Concrete based on clients requirements deliverd',
      img: img2
    },
    {
        id: 3,
        title: 'Aggregate',
        description: 'Various size of Aggregates are available.',
        img: img3
      },
      {
        id: 4,
        title: 'Paint',
        description: 'All brands paint are supply',
        img: img4
      },

    // Add more card data as needed
  ];

  return (
    <div className="container mt-3 text-center">
      <h2>Materials we supply</h2>
      <ul className="cards">
        {cardsData.map((card) => (
          <li className="card" key={card.id}>
            <div>
            <img class="card-img-top" src={card.img} style={{ "minHeight":"100px"}}/>
              <h3 className="card-title">{card.title}</h3>
              {/* <div className="card-content">
                <p>{card.description}</p>
              </div> */}
            </div>
            <div className="card-link-wrapper">
              <a href="" className="card-link">Get Qoute</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Material;