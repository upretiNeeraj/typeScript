let response: any = '42';

let numberLength: number = (response as string).length;
console.log(numberLength);

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book;

console.log(typeof bookObject);


try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }

    console.log('error =>', error);

}


type Role = "admin" | "user" | "super Admin";

function redirectBasedOnRole(role: Role): void {
    if (role === 'admin') {
        console.log("redirectiong to admin dashBoard");
        return;
    }
    if (role === 'user') {
        console.log("redirectiong to user dashBoard");
        return;
    }
    role;

}