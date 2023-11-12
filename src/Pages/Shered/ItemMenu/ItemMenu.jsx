

const ItemMenu = ({item}) => {
console.log(item)
    const {image, name, price, recipe} = item
    return (
        <div className=" flex gap-2 mb-10"> 
            <img style={{borderRadius: '0px 200px 200px 200px'}} className=" w-[100px]" src={image} alt="" />
            <div>
                <p className=" uppercase">{name}--------</p>
                <h2>{recipe}</h2>
            </div>
            <p className=" text-yellow-500">${price}</p>
        </div>
    );
};

export default ItemMenu;