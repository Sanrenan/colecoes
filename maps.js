function getAdmins(map)
{
    let = admins = [];
    for([key, value] of map)
    {
        if(value ==='Admin')
        {
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Renan', 'Admin');
usuarios.set('José', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));