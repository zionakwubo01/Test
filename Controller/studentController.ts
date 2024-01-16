


const Students = [
    { name: "zion", id: 1, age: 13 },
    { name: "ayo", id: 2, age: 10 },
    { name: "emma", id: 3, age: 15 },
]



let newStu = { name: "emma", id: Students.length + 1, age: 15 }

export const CreateStudent = (data: Array<{ name: string, id: number, age: number }>,
    value: { name: string, id: number, age: number },
): { name: string, id: number, age: number } => {

    data.push(value)
    return value
}

export const viewallStudent = (
    data: Array<{ name: string, id: number, age: number }>
): Array<{ name: string, id: number, age: number }> => {
    return data;
};

export const viewoneStudent = (
    data: Array<{ name: string, id: number, age: number }>, id: number
): { name: string, id: number, age: number } => {
    let getPro = data?.find((el: any) => {
        return el.id === id
    })!;

    return getPro
};
// export const DeleteoneStu = (
//     data: Array<{ name: string, id: number, age: number }>, id: number
// ): { name: string, id: number, age: number } => {
//     let Deleteone = data?.filter((el: any) => {
//         return el.id !== id
//     })!;

//     return Deleteone
// };


// console.log(CreateStudent(Students, newStu))
// console.log(viewallStudent(Students))
