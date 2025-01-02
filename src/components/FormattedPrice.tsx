interface Props {
    amount: number;
  }
  
  const FormattedPrice = ({ amount }: Props) => {
    return <span>฿{amount.toLocaleString('th-TH')}</span>;
  };
  
  export default FormattedPrice;