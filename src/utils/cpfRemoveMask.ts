export function cpfRemoveMask(value: string): string {
  const formattedCpf = value.replace(/\D/g, "");
  return formattedCpf;
}
