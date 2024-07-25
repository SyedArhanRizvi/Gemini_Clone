export const getData = async ()=>{
    const data = await fetch('https://auto.dev/api/listings?apikey=ZrQEPSkKYXJoYW5yaXp2aTlAZ21haWwuY29t', {
        method:"GET",
    });
    return await data.json();
}