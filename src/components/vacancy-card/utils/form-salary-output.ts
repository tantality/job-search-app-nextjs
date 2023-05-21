export const formSalaryOutput = (paymentFrom: number, paymentTo: number, currency: string): string => {
  if (paymentFrom && paymentTo) {
    if (paymentFrom === paymentTo) {
      return `з/п ${paymentFrom} ${currency}`;
    }

    return `з/п ${paymentFrom} - ${paymentTo} ${currency}`;
  }

  if (paymentFrom) {
    return `з/п от ${paymentFrom} ${currency}`;
  }

  if (paymentTo) {
    return `з/п до ${paymentTo} ${currency}`;
  }

  return 'з/п не определена';
};
