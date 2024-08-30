export function cpfMask(value: string): string{
  const cpf = value.replace(/\D/g, "")
  const formattedCpf = cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return formattedCpf
}