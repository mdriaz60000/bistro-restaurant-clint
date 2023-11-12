import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ItemMenu from "../../Shered/ItemMenu/ItemMenu";


const PopularMenu = () => {
const [menus, setMenus] = useState([])

useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data =>{
        const popularItems = data.filter(item => item.category == "popular") 
     setMenus(popularItems)})
},[])

    return (
        <div>
           <SectionTitle
           subHeading={"from our menu"}
           heading={"popular menu"}
           ></SectionTitle> 
<div className=" grid md:grid-cols-2 gap-8">
    {
        menus.map(item =><ItemMenu key={item._id} item={item} ></ItemMenu>)
    }
</div>

        </div>
    );
};

export default PopularMenu;