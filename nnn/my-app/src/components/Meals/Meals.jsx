import Meal from "./Meal";
//食物列表组件
const Meals = ({
    list
}) => {
    return (
        <div className="absolute top-8 bottom-0 overflow-auto">
            {
                list.map((item) => (
                    <Meal
                        key={item.id}
                        id={item.id}
                        image={item.img}
                        title={item.title}
                        description={item.desc}
                        price={`¥${item.price}`}
                    />
                ))
            }
        </div>
    );
};

export default Meals;