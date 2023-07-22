export const requiredRules = [
(value: string) => {
    if (value) return true;

    return 'Este campo é obrigatório.';
},
];
  
export const emailRules = [
(value: string) => {
    if (value) return true;

    return 'Este campo é obrigatório.';
},
(value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return 'O e-mail deve ser válido.';
},
];