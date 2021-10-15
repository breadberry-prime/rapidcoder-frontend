import {timer} from "rxjs"

let source = timer(3000)

source.subscribe(callback => {
    console.log(callback)
})

source = timer(10000)
console.log("t")
