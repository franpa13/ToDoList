import Alert from 'react-bootstrap/Alert';

function AlertTrue({tarea}) {
    return (
        <>
            {[

                'info',

            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    {tarea.tarea} ha sido Completada!
                </Alert>
            ))}
        </>
    );
}

export default AlertTrue;