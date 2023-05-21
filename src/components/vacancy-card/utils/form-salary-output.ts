export const formSalaryOutput = (paymentFrom: number, paymentTo: number, currency: string): string => {
  const baseOutput = 'з/п';

  const isSalaryRange = paymentFrom && paymentTo;
  const areSalaryEdgesEqual = paymentFrom === paymentTo;

  if (isSalaryRange && areSalaryEdgesEqual) {
    return `${baseOutput} ${paymentFrom} ${currency}`;
  }

  if (isSalaryRange) {
    return `${baseOutput} ${paymentFrom} - ${paymentTo} ${currency}`;
  }

  if (paymentFrom) {
    return `${baseOutput} от ${paymentFrom} ${currency}`;
  }

  if (paymentTo) {
    return `${baseOutput} до ${paymentTo} ${currency}`;
  }

  return `${baseOutput} не указана`;
};
