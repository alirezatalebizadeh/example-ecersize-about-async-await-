

let number = + prompt('enter your id', 1)

async function getPosts() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${number}`);
    let allComment = await res.json();

    // allComm11ent.forEach(comment => {
        console.log(allComment10);
    // });
}

getPosts()








