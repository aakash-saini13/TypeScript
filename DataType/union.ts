function demo(fruits: string, quantity: number | string): number|string {
    console.log(fruits,quantity)
    return quantity
}

demo('graps', 10)
demo('banana','1 dozen')