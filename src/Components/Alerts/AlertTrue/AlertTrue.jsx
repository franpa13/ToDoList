import Alert from 'react-bootstrap/Alert';

function AlertTrue() {
    return (
        <>
            {[

                'info',

            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    la tarea ha sido Completada!
                </Alert>
            ))}
        </>
    );
}

export default AlertTrue;