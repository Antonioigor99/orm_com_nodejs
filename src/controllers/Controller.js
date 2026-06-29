class Controller {
  //o que é costructor? é um método especial para criar e inicializar um objeto criado a partir de uma classe. 
  // Ele é chamado automaticamente quando uma nova instância da classe é criada no caso do controller, ele recebe 
  //uma instância do serviço da entidade como parâmetro, que é usada para realizar operações de CRUD (Create, Read, Update, Delete)
  //nos registros da entidade.
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  //para cada método, ele é responsável por lidar com uma requisição HTTP específica e retorna uma resposta HTTP apropriada.
  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      return res.status(500).json({message: `Erro ao buscar registros ${error.message}`});
    }
  }
  //Esse método é responsável por lidar com uma requisição HTTP para buscar um registro específico da entidade com base no ID fornecido
  //na URL.
  async pegaUmRegistro(req, res) {
    const {id} = req.params;
    try{
      const registro = await this.entidadeService.pegaUmRegistro(id);
      if(registro){
        return res.status(200).json(registro);
      }else{
        return res.status(404).json({message: `Registro de id ${id} não encontrado`});
      }
    }catch(error){
      return res.status(500).json({message: `Erro ao buscar registro de id ${id}`});
    }
  }
  
  //Esse método é responsavel por lidar com uma requisição HTTP para criar um novo registro da entidade com base nos dados fornecidos 
  //no corpo da requisição.
  async criaRegistro(req,res){
    try{
      const novoRegistro = await this.entidadeService.criaRegistro(req.body);
      return res.status(201).json(novoRegistro);
    }catch(error){
      return res.status(500).json({message: `Erro ao criar registro ${error.message}`});
    }
  }

  //Esse método é responsável por lidar com uma requisição HTTP para atualizar um registro existente da entidade com base no id
  //fornecido e nos dados do corpo da requisição.
  async atualizaRegistro(req,res){
    const {id} = req.params;
    const dadosAtualizados =req.body;
    try{
      const registroAtualizado = await this.entidadeService.atualizarRegistro(dadosAtualizados, Number(id));
      //Esse if verifica se o registro foi atualizado com sucesso. se o valor do primeiro elemento do array for igual a 1,
      //significa que o registro foi atualizado com sucesso e a função retorna uma resposta HTTP com status 200 e uma mensagem
      //de sucesso. Se não retorna uma resposta HTTP com status 404 e mensagem de erro dizendo que o registro não foi encontrado.
      if(registroAtualizado[0] === 1){
        return res.status(200).json({message: `Registro de id ${(id)} atualizado com sucesso`});
      }else{
        return res.status(404).json({message: `Registro de id ${id} não encontrado`});
      }
    }catch(error){
      res.status(500).json({message: `Erro ao atualizar registro de id ${id}`});
    }
  }

  //Esse método é responsável por apagar um registro existente com base no id fornecido na url.
  async apagaRegistro(req,res){
    const {id} = req.params;
    try{
      const registroApagado = await this.entidadeService.deletaRegistro(Number(id));
      //aqui verifica se o registro foi apagado com sucesso. se não retorna um 404 com erro de não encontrado.
      if(registroApagado){
        return res.status(200).json({message: `Registro de id ${id} apagado com sucesso`});
      }else{
        return res.status(404).json({message: `Registro de id ${id} não encontrado`});
      }
    }catch(error){
      res.status(500).json({message: `Erro ao apagar registro de id ${id}`});
    }
  }
}

module.exports = Controller;
