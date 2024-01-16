


const Goods = [
    { name: "milo", id: 1, qty: 3 },
    { name: "milk", id: 2, qty: 10 },
    { name: "biscuits", id: 3, qty: 4 },
]



let newGood = {
    name: "biscuits", id: Goods.length + 1, qty: 4
}

export const CreateShop = (data: Array<{ name: string, id: number, qty: number }>,
    value: { name: string, id: number, qty: number },
): { name: string, id: number, qty: number } => {

    data.push(value)
    return value
}

export const viewallShop = (
    data: Array<{ name: string, id: number, qty: number }>
): Array<{ name: string, id: number, qty: number }> => {
    return data;
};

export const viewoneShop = (
    data: Array<{ name: string, id: number, qty: number }>, id: number
): { name: string, id: number, qty: number } => {
    let getPro = data?.find((el: any) => {
        return el.id === id
    })!;

    return getPro
};
// export const DeleteoneShop = (
//     data: Array<{ name: string, id: number, qty: number }>, id: number
// ): { name: string, id: number, qty: number } => {
//     let Deleteone = data?.filter((el?: any) => {
//         return el.id !== id
//     })!;

//     return Deleteone
// };

// console.log(CreateShop(Goods, newGood))
// console.log(viewoneShop(Goods, 3))