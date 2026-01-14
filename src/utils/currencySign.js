const currencySign = (locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
};

export default currencySign;
