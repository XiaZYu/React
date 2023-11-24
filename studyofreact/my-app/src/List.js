function List({
    items,
    onChange
}) {
    return (
        <ul className="divide-y">
            {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 divide-x">
                    <p>{item.name}</p>
                    <p>{item.text}</p>
                    <p>{item.time}</p>
                    {
                        item.name === "张三" &&
                        <p
                            className="cursor-pointer"
                            onClick={() => {
                                onChange(index)
                            }}>删除</p>
                    }

                </li>
            ))}
        </ul>
    )
}

export default List;