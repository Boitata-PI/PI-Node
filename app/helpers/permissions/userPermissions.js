const userPermissions = (usuario) => {
    //console.log(usuario);
    const tipo  = usuario.tipo;
    let permissions = [];
    
    switch (tipo) {
        case 'ADM':
            permissions.push(tipo);
            break;

        case 'PROFESSOR':
            if(usuario.Disciplinas.length > 0){
                permissions.push(tipo);
            }

            if(usuario.Cursos.length > 0){
                permissions.push('COORDENADOR');
            }
            break;

        case 'ALUNO':
            if(usuario.AlunoDiscs.length > 0){
                permissions.push(tipo);
            }
            break;

        default:
            break;
    }
    
    console.log('permissions: ', permissions);
    return permissions.length ? permissions : false;
}

export default userPermissions;