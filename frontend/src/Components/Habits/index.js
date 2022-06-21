import "./index.scss";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DesktopContainer = styled.div`
  @media only screen and (max-width: 699px) {
    display: none;
  } ;
`;

const MobileContainer = styled.div`
  @media only screen and (min-width: 700px) {
    display: none;
  } ;
`;

const Goals = () => {
  const AllGoals = [
    { id: 0, name: "Make the bed" },
    { id: 1, name: "Water Plants" },
    { id: 2, name: "Drink 7 cups of water" },
  ];

  return (
    <div className="habit-goals col-4">
      <h1>Habit Goals</h1>
      <div>
        {AllGoals.map((gaol, indx) => (
          <div className="goals-list row" key={gaol.id + indx}>
            <h3 className="col-8">{gaol.name}</h3>

            <button className="col-2">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="col-2">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <Link to="/newHabits" className="btn">
        Add New Habit
      </Link>
    </div>
  );
};

const MyHabits = () => {
  return (
    <div className="myhabits-page">
      <DesktopContainer>
        <Goals />
      </DesktopContainer>
      {/* <MobileContainer>Mobile</MobileContainer> */}
    </div>
  );
};

export default MyHabits;
