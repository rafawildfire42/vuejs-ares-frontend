export const requiredRules = (value: string) => {
  if (value) return true;

  return 'Este campo é obrigatório.';
}
  
export const emailRules = (value: string) => {
  if (/.+@.+\..+/.test(value)) return true;

  return 'O e-mail deve ser válido.';
}

function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos
  
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false; // Verificar se o CPF tem 11 dígitos e não é composto por dígitos repetidos
  
    let sum = 0;
    let remainder;
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
  
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
  
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;
  
    return true;
  }
  
export const cpfRules = (value: string) => {
  if (!value) return 'Este campo é obrigatório.';
  const cpf = value.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos
  if (!isValidCPF(cpf)) return 'CPF inválido.';

  return true;
}
  
function isValidCNPJ(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos

  if (cnpj.length !== 14 || /^(.)\1+$/.test(cnpj)) return false; // Verificar se o CNPJ tem 14 dígitos e não é composto por dígitos repetidos

  let sum = 0;
  let position = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * position;
    position--;
    if (position < 2) position = 9;
  }

  let remainder = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (remainder !== parseInt(cnpj.charAt(12))) return false;

  sum = 0;
  position = 6;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * position;
    position--;
    if (position < 2) position = 9;
  }

  remainder = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (remainder !== parseInt(cnpj.charAt(13))) return false;

  return true;
}
  
export const cnpjRules = (value: string) => {
  const cnpj = value.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos

  if (!cnpj) return 'Este campo é obrigatório.';
  if (!isValidCNPJ(cnpj)) return 'CNPJ inválido.';

  return true;
}

function isValidPhone(phone: string): boolean {
  phone = phone.replace(/[^\d]+/g, ''); // Remover caracteres não numéricos

  // Verificar se o telefone possui 11 dígitos (considerando DDD)
  if (phone.length !== 11) return false;

  // Exemplo de validação simples: se o telefone começa com 9, consideramos válido (número de celular)
  const firstDigit = phone.charAt(2); // Considerando o DDD no formato 63 9 9999-9999
  if (firstDigit === '9') return true;

  return false;
}

export const phoneRules = (v: string) => isValidPhone(v) || 'Telefone inválido. O número deve estar no formato (63) 9 9999-9999'