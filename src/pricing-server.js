async function callPricingService(path) {
    const hostUrl = "http://127.0.0.1:5000"
    const pricingUrl = hostUrl + path
    console.log("Getting price")

    return (await fetch(pricingUrl).then(resp => resp.text()))
}

export function getHotelPrice(hotel_id) {
    let path = `/hotel/price/${hotel_id}`
    return callPricingService(path)
}