import React from "react";
import './MainContent.scss';
import useAside from "../../Hook/useAside";
import Cities from "../Cities/Cities";
import Recommended from "../Recommended/Recommended";
import FoodDrink from  "../FoodDrink/FoodDrink";

function MainContent() {
   const [open] = useAside();
   

	return (
		<>
			<div className={`main__content ${open && 'main__content--auto'}`}>
				<Cities/>

				<Recommended/>

				<FoodDrink/>
			</div>
		</>
	);
}

export default MainContent;