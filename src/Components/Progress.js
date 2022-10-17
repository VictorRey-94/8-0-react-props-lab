function Progress(props) {
  const { targetAmount, amountDonated } = props;
  return (
    <section classNAme="progress">
      <h2>
        Raised <span className="secondary">${amountDonated}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}

export default Progress;
