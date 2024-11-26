import Alert from 'react-bootstrap/Alert';

function MyAlert() {
  return (
    <>
      {[
        'info',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Saldi con il 30% di sconto EXTRA!
        </Alert>
      ))}
    </>
  );
}

export default MyAlert;