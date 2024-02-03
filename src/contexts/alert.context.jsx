import { createContext, useContext, useState } from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const addAutoCloseAlert = (variant, message) => {
    const newAlert = { id: new Date().getTime(), variant, message, autoClose: true };
    setAlerts([...alerts, newAlert]);

    setTimeout(() => {
      removeAlert(newAlert.id);
    }, 3000);
  };

  const addCloseButtonAlert = (variant, message) => {
    const newAlert = { id: new Date().getTime(), variant, message, autoClose: false };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  const addOptionsAlert = (variant, message, onYes, onNo) => {
    const newAlert = { id: new Date().getTime(), variant, message, autoClose: true, onYes, onNo };
    setAlerts([...alerts, newAlert]);
  };

  const removeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider
      value={{
        alerts,
        addAutoCloseAlert,
        addCloseButtonAlert,
        addOptionsAlert,
        removeAlert,
      }}
    >
      {children}
      <Container
        style={{
          position: 'fixed',
          top: '10px',
          zIndex: 9999,
          margin: 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Row>
          <Col className='col-md-6 mx-auto'>
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                variant={alert.variant}
                onClose={() => {
                  removeAlert(alert.id);
                  if (alert.onNo) alert.onNo();
                }}
                dismissible={!alert.autoClose}
              >
                <div className='flex-just-center'>
                  {alert.message}
                </div>
                {alert.onYes && alert.onNo && (
                  <div className="flex-space-bet">
                    <Button variant="success" onClick={() => alert.onYes()}>
                      Yes
                    </Button>{' '}
                    <Button variant="danger" onClick={() => alert.onNo()}>
                      No
                    </Button>  
                  </div>
                )}
              </Alert>
            ))}
          </Col>
        </Row>
      </Container>
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};