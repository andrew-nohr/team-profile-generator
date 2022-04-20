const createTeam = team => {
    const createManager = manager => {
        return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `
    }

    const createEngineer = engineer => {
        return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div>
        `
    }

    const createIntern = intern => {
        return `
<div class="card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `
    }

    const cards = [];
    console.log(team);
    cards.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
        // .join('') for engineer and intern
    );

    cards.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join('')
    );

    cards.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join('')
    );

    return cards.join('');


}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3">
                <h1>My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `
}