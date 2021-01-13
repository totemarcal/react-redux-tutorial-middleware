const fazerLog = ({ getState, dispatch }) => next => action => {
    //pega o state antes de executar a action
    let stateAnterior = getState();
    //.next() passa a action para os proximos middlewares
    //ate chegar nos reducers que atualizam o state
    //retorna o retorno da execucao dos middlewares seguintes 
    //ou action caso seja o ultimo middleware em execucao
    let result = next(action);
    //pega o state atualizado
    let stateAtual = getState();
    //aqui ja temos o state atualizados
    console.log({ stateAnterior, action, stateAtual });
    //o retorno da dispatch
    return result;
};

export default fazerLog