import axios from 'axios';

interface CNPJData {
  nome: string;
  cnpj: string;
  // Adicione outros campos que deseja obter da API da Receita Federal
}

async function consultarCNPJ(cnpj: string): Promise<CNPJData | null> {
  try {
    const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = response.data;

    if (data.status === 'ERROR') {
      console.error('Erro ao consultar CNPJ:', data.message);
      return null;
    }

    // Extrair os dados relevantes da resposta da API
    const cnpjData: CNPJData = {
      nome: data.nome,
      cnpj: data.cnpj,
      // Adicione outros campos aqui conforme necessário
    };

    return cnpjData;
  } catch (error: any) {
    console.error('Erro na requisição:', error.message);
    return null;
  }
}

// Exemplo de uso
// const cnpj = '12345678000190'; // Insira o CNPJ que deseja consultar
// consultarCNPJ(cnpj).then((data) => {
//   if (data) {
//     console.log('Dados da empresa:', data);
//   } else {
//     console.log('CNPJ inválido ou erro na consulta.');
//   }
// });

export function callWhatsApp() {
  const phoneNumber = "63981189986"
  const message = "Olá! Gostaria de realizar um orçamento para um projeto."
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank")
}