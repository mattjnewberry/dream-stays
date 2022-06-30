async function callPricingService(path) {
    const hostUrl = "http://kah2021.pythonanywhere.com/"
    const pricingUrl = hostUrl + path
    console.log("Getting price")

    return (await fetch(pricingUrl).then(resp => resp.text()))
}

export function getHotelPrice(hotel_id) {
    let path = `/hotel/price/${hotel_id}`
    return callPricingService(path)
}

