import Alert from 'react-bootstrap/Alert';

function AlertDanger() {
  return (
    <>
      {[

        'danger',
  
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Tarea eliminada correctamente!
        </Alert>
      ))}
    </>
  );
}

export default AlertDanger;