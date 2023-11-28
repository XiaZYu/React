import Meal from "./Meal";
//食物列表组件
const Meals = ({
    list
}) => {
    return (
        <div className="absolute top-8 bottom-0 overflow-auto pb-32">
            {
                list.map((item) => (
                    <Meal
                        key={item.id}
                        id={item.id}
                        image={item.attributes.img}
                        title={item.attributes.title}
                        description={item.attributes.desc}
                        price={`¥${item.attributes.price}`}
                    />
                ))
            }
        </div>
    );
};

export default Meals;