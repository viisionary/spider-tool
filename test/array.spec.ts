import flatByKeys from "../src/array/flatByKeys";
import {AssertionError, strictEqual} from "assert";
import randomFill from "../src/array/randomFill";

describe('数组处理', function () {
    describe('flatByKeys', function () {
        const array = [
            {
                id: 'id1',
                children: [{childrenId: 'cId1', subChildren: [{subChildrenId: 'ccId1'}]}],
            },
            {
                id: 'id2',
                children: [{childrenId: 'cId2', subChildren: [{subChildrenId: 'ccId2'}]}],
            },
            {id: "id3"},
            {id: "id4", children: []},
        ]
        it('扁平化为 id: value', function () {
            const newArray = flatByKeys(array, ['children', 'subChildren'])
            console.log(newArray)
            strictEqual(newArray.length, 2)
        })
        it('错误的key值 id: value', function () {
            const newArray = flatByKeys(array, ['children', 'errorKey'])
            strictEqual(newArray.length, 0)
            console.log(newArray)
        })
    })
    describe('randomFill', ()=>{
        it('随机选取填充', function () {
            const toFill =[1, 2, , , 3, , 1, ,];
            const picked = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
            const random = randomFill(toFill, picked);
            console.log(random)
            strictEqual(random.length, 8)
        });
        it('随机选取填充 - 引用类型', function () {
            const toFill =[1, 2, , , 3, , 1, ,];
            const picked = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
            const random = randomFill(toFill, picked);
            console.log(random)
            strictEqual(random.length, 8)
        });
    })
})