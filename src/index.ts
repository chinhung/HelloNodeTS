import * as express from 'express';

function greeter(person: string) {
    return "Hello " + person;
}

let user = "John";

const app = express();

app.get('/', (req, res) => {
    res.send(greeter(user) + ', this is an express app built by typescript!');
});

app.listen(3000, () => {
    console.log("Express app listening on port 3000");
});