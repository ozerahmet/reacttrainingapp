function ShowNameWithLuckyNumber() {
    let fname = "Ahmet";
    let lName = "Özer";
    let num = 6;
    return <div><h1>Hello {fname} {lName} !</h1><p>Your lucky number is {Math.floor(Math.random() * 10)}</p></div>;
}

function ShowCopyRight() {
    let fname = "Ahmet";
    let lName = "Özer";
    return <div><p>Created By {fname} {lName}</p><p>Copyright {new Date().getFullYear()}</p></div>;
}

export default ShowNameWithLuckyNumber;