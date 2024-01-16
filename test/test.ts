

// test("just a test", () => {
//     expect(true).toBe(false)
// })

import { CreateTask, viewallTask, viewoneTask } from "../Controller/Taskcontroller";

// test("just a simple test", () => {
//     expect(true).toBe(true)
// })

// describe("testing for boolean", () => {
//     test("bool1", () => {
//         expect(true).toBe(true)
//         expect(true).not.toBe(false)
//         expect(true).not.toBeNaN()
//         expect(true).not.toBeUndefined()

//     })
// })




// test("number test", () => {
//     let val = (a: number, b: number) => {
//         return a + b
//     }
//     expect(val(1, 1)).not.toBe(47)
// })



// describe("testing diff methods", () => {
//     test("testing array", () => {
//         let name = ["zion", "james", "ayo", "ekene"]
//         expect(name).toContain("zion")
//     })
// })





describe("checking out buss logic", () => {
    test("testing crerate task", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 100),
                title: Math.ceil(Math.random() * 1000).toString(),
                done: true,
                desc: Math.ceil(Math.random() * 1000).toString(),
            };
        });

        let value = {
            id: Math.floor(Math.random() * 100),
            title: Math.ceil(Math.random() * 1000).toString(),
            desc: Math.ceil(Math.random() * 1000).toString(),
            done: true
        };

        let arrObj: Array<{ title: string; id: number; done: boolean, desc: string }> = [
            { title: "cooking", id: 1, done: true, desc: "boiling the rice" },
            { title: "fighting", id: 2, done: true, desc: "beating" },
            { title: "running", id: 3, done: true, desc: "100km" },
            { title: "slapping", id: 4, done: true, desc: "power slap" },
        ];



        expect(CreateTask(data, value)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                done: expect.any(Boolean),
                desc: expect.any(String)
            })
        );
    });




    //view all

    test("check our view all task logic", () => {
        let data = Array.from({ length: 6 }, () => {
            return {
                id: Math.floor(Math.random() * 100),
                title: Math.ceil(Math.random() * 1000).toString(),
                desc: Math.ceil(Math.random() * 1000).toString(),
                done: true
            };
        });

        let value = {
            id: Math.floor(Math.random() * 100),
            title: Math.ceil(Math.random() * 1000).toString(),
            desc: Math.ceil(Math.random() * 1000).toString(),
            done: true
        };

        expect(viewallTask(data)).toEqual(
            expect.arrayContaining([
                {
                    id: expect.any(Number),
                    title: expect.any(String),
                    desc: expect.any(String),
                    done: expect.any(Boolean)
                },
            ])
        );
    });


    //viewone


    test("check our view one task logic", () => {
        let count = 0;
        let data = Array.from({ length: 6 }, () => {
            count++;

            return {
                id: count,
                title: Math.ceil(Math.random() * 1000).toString(),
                desc: Math.ceil(Math.random() * 1000).toString(),
                done: true
            };
        });

        expect(viewoneTask(data, 1)).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            desc: expect.any(String),
            done: expect.any(Boolean),
        });
    });

})
